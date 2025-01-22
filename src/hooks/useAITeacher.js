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
  lessonData: null,
  userInteracted: false, 

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

  setlessonData: (lessonData) => {
    set(() => ({ lessonData }));
    get().loadLessonContent(lessonData);
  },

  setSpeech: (speech) => {
    set(() => ({ speech }));
  },

  markUserInteracted: () => {
    set(() => ({ userInteracted: true }));
  },

  loadLessonContent: async (lessonData) => {
    const language = lessonData.replace(/-.*/, "");
    const lesson = lessonData.match(/-(\d+)$/)?.[1];
    console.log("Language:", language, "Lesson:", lesson);

    try {
      const textPath = `/assets/${language}/${lesson}/text/1.1.txt`;
      const textRes = await fetch(textPath);

      if (!textRes.ok) {
        throw new Error(`Lesson text not found at ${textPath}`);
      }

      const textContent = await textRes.text();

      const message = {
        id: get().messages.length,
        question: `Playing lesson: ${lessonData}`,
        answer: { ReplyForUser: textContent },
      };

      set((state) => ({
        messages: [...state.messages, message],
        currentMessage: message,
      }));

      get().playMessage(message);
    } catch (error) {
      console.error(`Error loading lesson content for ${lessonData}:`, error);
    }
  },


  askAI: async (question) => {
    if (!question) return;

    const { speech, messages, lessonData } = get();

    set(() => ({ loading: true }));

    if (lessonData) {
      get().loadLessonContent(lessonData);
    } else {
      try {
        const res = await fetch(`/api/ai?question=${encodeURIComponent(question)}`);
        const data = await res.json();

        const message = {
          question,
          answer: data.result,
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
    }
  },

  playMessage: async (message) => {
    set(() => ({ currentMessage: message }));

    if (!get().userInteracted) {
        console.warn("Audio playback is blocked until user interaction.");
        return; // Exit if no user interaction
    }

    if (message.audioPlayer && message.audioPlayer.paused) {
        message.audioPlayer.play();
        return;
    }

    const {lessonData} = get();

    if (lessonData) {
        // Load lesson-specific content
        const language = lessonData.replace(/-.*/, "");
    const lesson = lessonData.match(/-(\d+)$/)?.[1];
    console.log("Language:", language, "Lesson:", lesson," -> audio");
        
        try {
            const audioPath = `/assets/${language}/${lesson}/audio/1.1.mp3`;
            const audioRes = await fetch(audioPath);
            const audioBlob = await audioRes.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            const audioPlayer = new Audio(audioUrl);

            audioPlayer.onended = () => {
                set(() => ({ currentMessage: null }));
            };

            message.audioPlayer = audioPlayer;
            audioPlayer.currentTime = 0;
            audioPlayer.play();

            // Update state with new audio player
            set(() => ({
                messages: get().messages.map((m) => (m.id === message.id ? message : m)),
            }));
        } catch (error) {
            console.error(`Error playing lesson audio for ${lessonData}:`, error);
        }
    } else {
        // Generate audio dynamically for AI-generated messages
        set(() => ({ loading: true }));
        try {
            const audioRes = await fetch(
                `/api/tts?teacher=${get().teacher}&text=${encodeURIComponent(
                    message.answer.ReplyForUser
                )}&language=${get().language}`
            );
            const audioBlob = await audioRes.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            const audioPlayer = new Audio(audioUrl);

            // Extract visemes for additional features
            const visemes = await extractVisemesFromAudio(audioBlob);
            message.visemes = visemes;
            message.audioPlayer = audioPlayer;

            audioPlayer.onended = () => {
                set(() => ({ currentMessage: null }));
            };

            set(() => ({
                messages: get().messages.map((m) => (m.id === message.id ? message : m)),
                loading: false,
            }));

            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } catch (error) {
            console.error("Error in playMessage:", error);
            set(() => ({ loading: false }));
        }
    }
},


  stopMessage: (message) => {
    if (message.audioPlayer) {
      message.audioPlayer.pause();
      message.audioPlayer.currentTime = 0; // Reset audio to the start
    }
    set(() => ({ currentMessage: null }));
  },
}));

const extractVisemesFromAudio = async (audioBlob) => {
  return new Promise((resolve) => {
    const mockVisemes = [
      { time: 0.0, viseme: "a" },
      { time: 0.5, viseme: "e" },
      { time: 1.0, viseme: "o" },
    ];
    resolve(mockVisemes); // Return mock data for now
  });
};	

// Add a listener to track user interaction
if (typeof window !== "undefined") {
  window.addEventListener("click", () => useAITeacher.getState().markUserInteracted(), { once: true });
  window.addEventListener("keydown", () => useAITeacher.getState().markUserInteracted(), { once: true });
}
