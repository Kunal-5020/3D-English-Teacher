import { create } from "zustand";

export const teachers = ["Nanami", "Naoki"];

export const useAITeacher = create((set, get) => ({
  messages: [],
  currentMessage: null,
  teacher: teachers[0],
  language: "English",
  classroom: "default",
  speech: "formal",
  loading: false,

  userInteracted: false, 
  isLesson: false,

  setTeacher: (teacher) => {
    set(() => ({}));
    set(() => ({
      teacher,
      messages: get().messages.map((message) => ({
        ...message,
        audioPlayer: null,
      })),
    }));
  },

  setLanguage: (language) => {
    set(() => ({ language }));
  },

 
  setSpeech: (speech) => {
    set(() => ({ speech }));
  },

  markUserInteracted: () => {
    set(() => ({ userInteracted: true }));
  },

  askAI: async (question) => {
    if (!question) return;

    const { speech, messages } = get();

    set(() => ({ loading: true }));
      try {
        const res = await fetch(`/api/ai?question=${encodeURIComponent(question)}`);
        const data = await res.json();


        const message = {
          question,
          answer: data.result.ReplyForUser,
          id: messages.length,
          speech,
        };
        set((state) => ({
          currentMessage: message,
          messages: [...state.messages, message],
          loading: false,
        }));

        get().playMessage(message);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        set(() => ({ loading: false }));
      }
    } ,

  playMessage: async (message) => {
    set(() => ({ currentMessage: message }));

    if (!get().userInteracted) {
        console.warn("Audio playback is blocked until user interaction.");
        return;
    }

    if (message.audioPlayer && message.audioPlayer.paused) {
        message.audioPlayer.play();
        return;
    }

    if(!get().isLesson){  
    set(() => ({ loading: true }));
    try {
        const audioRes = await fetch(`/api/tts?teacher=${get().teacher}&text=${encodeURIComponent(message.answer)}&language=${get().language}`);
        if (!audioRes.ok) {
          const errorData = await audioRes.json();
          console.error("Error in playMessage:", errorData);
          throw new Error(`Error: ${errorData.error} - ${errorData.message}`);
      }

        // Extract visemes from the header
        const visemesHeader = audioRes.headers.get("Visemes");
        if (!visemesHeader) throw new Error("Visemes header not found.");

        const visemes = JSON.parse(atob(visemesHeader)); // Decode Base64 and parse JSON

        const audioBlob = await audioRes.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioPlayer = new Audio(audioUrl);


        audioPlayer.onended = () => {
            set(() => ({ currentMessage: null }));
        };
        
        message.visemes = visemes;
        message.audioPlayer = audioPlayer;
        audioPlayer.play();

        set(() => ({
            messages: get().messages.map((m) => (m.id === message.id ? message : m)),
            loading: false,
        }));
    } catch (error) {
        console.error("Error in playMessage:", error);
        set(() => ({ loading: false }));
    }
  } else{
    set(() => ({
      messages: get().messages.map((m) => (m.id === message.id ? message : m)),
      loading: false,
    }));

    console.log("viseme data", message.visemes);
  }
},



stopMessage: (message) => {
  if (!message || !message.audioPlayer) {
    return; // Exit early if the message or audioPlayer is null/undefined
  }
  message.audioPlayer.pause();
  message.audioPlayer.currentTime = 0; // Reset audio to the start
  set(() => ({ currentMessage: null }));
},


}));


// Add a listener to track user interaction
if (typeof window !== "undefined") {
  window.addEventListener("click", () => useAITeacher.getState().markUserInteracted(), { once: true });
  window.addEventListener("keydown", () => useAITeacher.getState().markUserInteracted(), { once: true });
}
