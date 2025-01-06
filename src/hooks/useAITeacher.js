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
  userInteracted: false, // Track if the user has interacted

  setTeacher: (teacher) => {
    set(() => ({
      teacher,
      messages: get().messages.map((message) => ({
        ...message,
        audioPlayer: null, // New teacher, new Voice
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
    const message = { question, id: messages.length };

    set(() => ({ loading: true }));

    try {
      const res = await fetch(`/api/ai?question=${encodeURIComponent(question)}`);
      const data = await res.json();
      // console.log("data -", data.result);
      message.answer = data.result;
      message.speech = speech;

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
  },

  playMessage: async (message) => {
    set(() => ({ currentMessage: message }));

    if (!get().userInteracted) {
      console.warn("Audio playback is blocked until user interaction.");
      return; // Exit if no user interaction
    }

    if (!message.audioPlayer) {
      set(() => ({ loading: true }));

      try {
        const audioRes = await fetch(`/api/tts?teacher=${get().teacher}&text=${encodeURIComponent(message.answer.ReplyForUser)}&language=${get().language}`);
        const audioBlob = await audioRes.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioPlayer = new Audio(audioUrl);

        const visemes = await extractVisemesFromAudio(audioBlob); // Extract visemes
        message.visemes = visemes;
        message.audioPlayer = audioPlayer;

        audioPlayer.onended = () => {
          set(() => ({ currentMessage: null }));
        };

        set(() => ({
          messages: get().messages.map((m) => (m.id === message.id ? message : m)),
          loading: false,
        }));
      } catch (error) {
        console.error("Error in playMessage:", error);
        set(() => ({ loading: false }));
      }
    }

    message.audioPlayer.currentTime = 0;
    message.audioPlayer.play();
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
