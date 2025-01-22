import 'regenerator-runtime/runtime'; 
import { useAITeacher } from "@/hooks/useAITeacher";
import { useState, useRef, useEffect} from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export const TypingBox = ({ showTypingField = true, showVoicePreview = false }) => {
  const askAI = useAITeacher((state) => state.askAI);
  const loading = useAITeacher((state) => state.loading);
  const [question, setQuestion] = useState("");
  const [isRecording, setIsRecording] = useState(false);


  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  
  const timeoutRef = useRef(null);

  const startRecording = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Not supported");
      return;
    }
  
    setIsRecording(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  
    // Start a timeout to detect silence
    resetSilenceTimeout();
  };
  
  // Reset the silence timeout when user speaks
  const resetSilenceTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      console.log("No speech detected for 3 seconds. Stopping recording.");
      stopRecording();
    }, 3000);
  };

  const stopRecording = async () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
    const trimmedTranscript = question.trim();
    
    clearTimeout(timeoutRef.current);

    if (trimmedTranscript) {
      await ask(trimmedTranscript);  // Ensure `ask` is called async
    }
    setQuestion("");
    resetTranscript(); 
  };

  useEffect(() => {

    if (transcript.trim()) {
      resetSilenceTimeout(); // Reset the silence timer when the user speaks
    }

    setQuestion(transcript);
  }, [transcript]);

  const ask = async (questionText) => {
    if (!questionText.trim()) return;
    try {
      await askAI(questionText);  // Assuming askAI is async
      setQuestion("");
      resetTranscript(); 
    } catch (error) {
      console.error("Error while asking AI:", error);
    }
  };

  return (
    <div
      className={`relative z-10 flex flex-col bg-gradient-to-tr from-slate-300/30 
      via-gray-400/30 to-slate-600/30 p-4 backdrop-blur-md rounded-lg border border-slate-100/30 shadow-md 
      transition-all duration-300 ${showTypingField ? "w-full max-w-[800px]" : "w-30"} mx-auto`}
    >
      {showTypingField && (
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative w-full">
            <input
              className="w-full bg-slate-800/60 p-3 rounded-lg text-white placeholder:text-white/50 shadow-inner 
              focus:outline focus:outline-white/80 text-base md:text-sm pr-10"
              placeholder="Ask a question?"
              value={question}  // Bind input value to the `question` state
              onChange={(e) => setQuestion(e.target.value)}  // Update question state
              onKeyDown={(e) => e.key === "Enter" && ask(question)} // Ensure `ask` is called with the correct argument
            />
          </div>

          <div className="flex gap-2 items-center justify-center">
            <button
              className={`px-4 py-2 rounded-lg text-white text-sm bg-blue-700 ${
                !question.trim() ? "opacity-50 pointer-events-auto" : ""
              }`}
              onClick={() => ask(question)}  
              onTouchStart={(e) => e.stopPropagation()} // Prevent the button from being clicked twice
              disabled={!question.trim()}
            >
              Ask
            </button>
            <button
              className={`w-11 h-11 md:w-13 md:h-13 py-1 px-1 rounded-full text-white text-sm ${isRecording ? "bg-red-500" : "bg-green-500"}`}
              onClick={isRecording ? stopRecording : startRecording} // Toggle between start and stop recording
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {!showTypingField && (
        <div className="flex flex-col items-center">

          {showVoicePreview && transcript && (
            <div className="mt-2 p-2 bg-gray-800 text-white rounded-lg shadow">
              <p className="text-center">{transcript}</p>
            </div>
          )}

          <button
            className={`w-14 h-14 md:w-16 md:h-16 p-4 rounded-full text-white ${
              isRecording ? "bg-red-500 animate-pulse" : "bg-blue-500 hover:bg-blue-700"
            } text-2xl shadow-lg`}
            onClick={isRecording ? stopRecording : startRecording} >

            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
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
