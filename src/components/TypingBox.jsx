import { useAITeacher } from "@/hooks/useAITeacher";
import { useState } from "react";

// Check if the browser supports SpeechRecognition API
const isSpeechRecognitionSupported = () => {
  return (
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
  );
};

export const TypingBox = () => {
  const askAI = useAITeacher((state) => state.askAI);
  const loading = useAITeacher((state) => state.loading);
  const [question, setQuestion] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  let recognition;

  if (typeof window !== "undefined") {
    recognition = isSpeechRecognitionSupported()
      ? new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      : null;
  }

  const startRecording = () => {
    if (recognition) {
      setIsRecording(true);
      recognition.lang = "en-US"; // Set the language for recognition
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuestion(transcript); // Set the recognized text to the question state
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };
    } else {
      console.log("Speech Recognition is not supported in this browser.");
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  const ask = () => {
    askAI(question);
    setQuestion("");
  };

  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4 backdrop-blur-md rounded-xl border-slate-100/30 border">
      <div>
        <h2 className="text-white font-bold text-xl">
          Ask question to the AI teacher to learn English Speaking
        </h2>
        <p className="text-white/65">
          It will Communicate with you and help you to learn English better
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </div>
      ) : (
        <div className="gap-3 flex">
          <input
            className="focus:outline focus:outline-white/80 flex-grow bg-slate-800/60 p-2 px-4 rounded-full text-white placeholder:text-white/50 shadow-inner shadow-slate-900/60"
            placeholder="Ask a question?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ask();
              }
            }}
          />
          <button
            className="bg-slate-100/20 p-2 px-6 rounded-full text-white"
            onClick={ask}
          >
            Ask
          </button>
          {/* Mic button */}
          <button
            className={`bg-slate-100/20 p-2 rounded-full text-white ${isRecording ? "bg-red-500" : "bg-green-500"}`}
            onClick={isRecording ? stopRecording : startRecording}
          >
            {isRecording ? "Stop" : "🎤 Start"}
          </button>
        </div>
      )}
    </div>
  );
};
