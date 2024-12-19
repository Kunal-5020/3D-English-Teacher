import { useAITeacher } from "@/hooks/useAITeacher";
import { useState, useRef, useEffect } from "react";

const isSpeechRecognitionSupported = () => {
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
};

export const TypingBox = () => {
  const askAI = useAITeacher((state) => state.askAI);
  const loading = useAITeacher((state) => state.loading);
  const [question, setQuestion] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && isSpeechRecognitionSupported()) {
      recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognitionRef.current.lang = "en-IN";
    }
  }, []);

  const startRecording = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    setIsRecording(true);
    recognitionRef.current.start();

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      alert("An error occurred during speech recognition. Please try again.");
      setIsRecording(false);
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
      if (question.trim() !== "") {
        ask();
      }
    };
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const ask = () => {
    if (question.trim() === "") return;
    askAI(question);
    setQuestion("");
  };

  return (
    <div className="z-10 w-full max-w-[800px] flex flex-col space-y-4 bg-gradient-to-tr from-slate-300/30 via-gray-400/30 to-slate-600/30 p-4 backdrop-blur-md rounded-lg border border-slate-100/30 shadow-md">

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
          </span>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-3">
          {/* Input Box */}
          <input
            className="flex-grow bg-slate-800/60 p-2 rounded-lg text-white placeholder:text-white/50 shadow-inner focus:outline focus:outline-white/80 text-sm"
            placeholder="Ask a question?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") ask();
            }}
          />

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              className={`bg-slate-100/20 p-2 rounded-lg text-white text-sm ${
                question.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={ask}
              disabled={question.trim() === ""}
            >
              Ask
            </button>
            <button
              className={`p-2 rounded-lg text-white text-sm ${
                isRecording ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? "Stop" : "🎤 Start"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
