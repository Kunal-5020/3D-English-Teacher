import { create } from "zustand";

export const teachers = ["Nanami", "Naoki"];

export const useAITeacher = create((set, get) => ({
  messages: [],
  currentMessage: null,
  teacher: teachers[0],
  setTeacher: (teacher) => {
    set(() => ({
      teacher,
      messages: get().messages.map((message) => {
        message.audioPlayer = null; // New teacher, new Voice
        return message;
      }),
    }));
  },
  classroom: "default",

  // Corrected the typo here from 'Langauage' to 'Language'
  Language: 'English',
  setLanguage: (Language) => {  // Also update here
    set(() => ({
      Language,
    }));
  },
  loading: false,

  speech: "formal",
  setSpeech: (speech) => {
    set(() => ({
      speech,
    }));
  },
  askAI: async (question) => {
    if (!question) {
      return;
    }
    const message = {
      question,
      id: get().messages.length,
    };
    set(() => ({
      loading: true,
    }));

    const speech = get().speech;

    // Ask AI
    const res = await fetch(`/api/ai?question=${question}&speech=${speech}`);
    const data = await res.json();
    message.answer = JSON.parse((data.result.candidates[0].content.parts[0].text).replace(/```json|```/g, "").trim());
    message.speech = speech;

    set(() => ({
      currentMessage: message,
    }));

    set((state) => ({
      messages: [...state.messages, message],
      loading: false,
    }));
    get().playMessage(message);
  },
  playMessage: async (message) => {
    set(() => ({
      currentMessage: message,
    }));

    if (!message.audioPlayer) {
      set(() => ({
        loading: true,
      }));
      // Get TTS
      const audioRes = await fetch(
        `/api/tts?teacher=${get().teacher}&text=${message.answer.text}&language=${get().Language}` // Use `get().Language` here
      );
      
      
      const audio = await audioRes.blob();
      const audioUrl = URL.createObjectURL(audio);
      const audioPlayer = new Audio(audioUrl);

      // Generate visemes locally from the audio
      const visemes = await extractVisemesFromAudio(audio); // Local method to extract visemes from the audio blob

      message.visemes = visemes; // Store visemes in message object
      message.audioPlayer = audioPlayer;
      message.audioPlayer.onended = () => {
        set(() => ({
          currentMessage: null,
        }));
      };

      set(() => ({
        loading: false,
        messages: get().messages.map((m) => {
          if (m.id === message.id) {
            return message;
          }
          return m;
        }),
      }));
    }

    message.audioPlayer.currentTime = 0;
    message.audioPlayer.play();
  },
  stopMessage: (message) => {
    message.audioPlayer.pause();
    set(() => ({
      currentMessage: null,
    }));
  },
}));

// Example method to extract visemes locally (using an external library or a model)
const extractVisemesFromAudio = async (audioBlob) => {
  // You can use a library like Papagayo, or you could implement TensorFlow-based extraction here
  // This function should process the audio and return the viseme data
  return new Promise((resolve, reject) => {
    // Implement logic here to extract visemes from the audio (using external tools like Papagayo or TensorFlow)
    // For now, let's return a mock viseme data array
    const mockVisemes = [
      { time: 0.0, viseme: 'a' },
      { time: 0.5, viseme: 'e' },
      { time: 1.0, viseme: 'o' },
    ];
    resolve(mockVisemes);  // Return mock data for now
  });
};
