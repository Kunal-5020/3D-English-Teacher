import { useAITeacher } from "@/hooks/useAITeacher";
import { useState, useRef, useEffect } from "react";

const isSpeechRecognitionSupported = () => {
  return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
};

export const TypingBox = ({ showTypingField = true, showVoicePreview = false }) => {
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

    try {
      recognitionRef.current.start();

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuestion((prevQuestion) => prevQuestion + " " + transcript.trim());
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert(`Error occurred during speech recognition: ${event.error}`);
        setIsRecording(false);
      };

    } catch (error) {
      console.error("Error starting speech recognition:", error);
      alert("There was an error starting speech recognition. Please try again.");
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);

      if (question.trim()) {
        ask();
      }
    }
  };

  const ask = () => {
    if (!question.trim()) return;
    askAI(question);
    setQuestion("");
  };

  return (
    <div
      className={`relative z-10 flex flex-col bg-gradient-to-tr from-slate-300/30 
      via-gray-400/30 to-slate-600/30 p-4 backdrop-blur-md rounded-lg border border-slate-100/30 shadow-md 
      transition-all duration-300 ${
        showTypingField ? "w-full max-w-[800px]" : "w-30"
      } mx-auto`}
    >
      {showTypingField && (
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative w-full">
            <input
              className="w-full bg-slate-800/60 p-3 rounded-lg text-white placeholder:text-white/50 shadow-inner 
              focus:outline focus:outline-white/80 text-base md:text-sm pr-10"
              placeholder="Ask a question?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask()}
            />
          </div>

          <div className="flex gap-2 items-center justify-center">
            <button
              className={`px-4 py-2 rounded-lg text-white text-sm bg-blue-500 ${
                !question.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={ask}
              disabled={!question.trim()}
            >
              Ask
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-white text-sm ${
                isRecording ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? "Stop" : "Start"}
            </button>
          </div>
        </div>
      )}

      {!showTypingField && (
        <div className="flex flex-col items-center">
          {showVoicePreview && question && (
            <div className="mt-2 p-2 bg-gray-800 text-white rounded-lg shadow">
              <p className="text-center">{question}</p>
            </div>
          )}
          <button
            className={`w-14 h-14 md:w-16 md:h-16 p-4 rounded-full text-white ${
              isRecording ? "bg-red-500 animate-pulse" : "bg-blue-500 hover:bg-blue-700"
            } text-2xl shadow-lg`}
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
          >
           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center pt-4">
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
          </span>
        </div>
      )}
    </div>
  );
};

