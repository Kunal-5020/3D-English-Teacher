"use client";  // Add this at the top

import { useAITeacher } from "@/hooks/useAITeacher";
import {
  CameraControls,
  Environment,
  Float,
  Gltf,
  Html,
  Loader,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, button, useControls } from "leva";
import { Suspense, useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { BoardSettings } from "./BoardSettings";
import { MessagesList } from "./MessagesList";
import { Teacher } from "./Teacher";


const itemPlacement = {
  default: {
    classroom: {
      position: [0.2, -1.8, -2],
    },
    teacher: {
      position: [-1, -1.8, -3],
    },
    board: {
      position: [0.45, 0.3, -6],
    },
  },
};

export const Experience = ({ lesson, lessoninfo }) => {
  const { teacher, classroom, playMessage, stopMessage, currentMessage } =
    useAITeacher((state) => state);
  const [currentStep, setCurrentStep] = useState(0);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lessonData, setLessonData] = useState([]);

  const [showEndPopup, setShowEndPopup] = useState(false);
  
  useEffect(() => {
    useAITeacher.setState({ isLesson: true }); // Correct state update
  }, []);

  useEffect(() => {
    if (lesson && lesson.audioFiles && lesson.textFiles) {
      const combinedLessonData = lesson.textFiles.map((text, index) => ({
        text,
        audio: lesson.audioFiles[index] || null,
      }));
      setLessonData(combinedLessonData);
    }
  }, [lesson]);


  // Start the audio after a delay of 5 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (lessonData.length > 0 && lessonData[currentStep]) {
        const { text, audio } = lessonData[currentStep];
        const message = { question: null, answer: text, id: currentStep };
        useAITeacher.setState(state => ({
          currentMessage: message,
          messages: [...state.messages, message],
          loading: false,
        }));

        const newAudioPlayer = new Audio(audio);
        newAudioPlayer.onended = handleAudioEnd;
        setAudioPlayer(newAudioPlayer);
        playMessage(message);

        newAudioPlayer.play();
        setIsPlaying(true);
      }
    }, 5000); // 5-second delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [lessonData, currentStep, playMessage]);

  const handlePlay = () => {
    if (audioPlayer) {
      
      audioPlayer.play();
      setIsPlaying(true);
      useAITeacher.setState({
        currentMessage: 'Playing...',
      });
    }
  };

  const handlePause = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      setIsPlaying(false);
      useAITeacher.setState({
        currentMessage: null
      });
    }
  };

  // const handleRestart = () => {
  //   if (audioPlayer) {
  //     audioPlayer.currentTime = 0;
  //     audioPlayer.play();
  //     setIsPlaying(true);
  //   }
  // };

  // const handleNextStep = () => {
  //   if (currentStep < lessonData.length - 1) {
  //     setCurrentStep((prev) => prev + 1);
  //   } else {
  //     stopMessage(currentMessage);
  //     setAudioPlayer(null);
  //     setIsPlaying(false);
  //   }
  // };

    // Handle audio end and show the end popup
    const handleAudioEnd = () => {
      setShowEndPopup(true); // Show the popup once audio ends
    };
  
    // Return to the dashboard
    const returnToDashboard = () => {
      // Implement logic to go back to the dashboard or reset lesson state
      setShowEndPopup(false); // Hide the popup
      // You can reset lesson or navigate to dashboard here
    };
  
    // Restart the lesson
    const restartLesson = () => {
      setShowEndPopup(false); // Hide the popup
      setCurrentStep(0); // Restart from the first step
      setIsPlaying(false); // Reset play state
    };

  if (!lessonData || lessonData.length === 0) {
    return <div>Loading lesson data...</div>;
  }

  return (
    <>
      <div className="z-10 fixed bottom-4 left-4 right-4 flex flex-wrap justify-center gap-3">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="px-6 py-3 text-white font-bold bg-blue-500 rounded-lg transition duration-200 hover:bg-blue-600 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Play
        </button>
        <button
          onClick={handlePause}
          disabled={!isPlaying}
          className="px-6 py-3 text-white font-bold bg-blue-500 rounded-lg transition duration-200 hover:bg-blue-600 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Pause
        </button>


        
      {/* {showEndPopup && (
        <div className="end-popup">
          <p>Lesson completed!</p>
          <button onClick={returnToDashboard}>Return to Dashboard</button>
          <button onClick={restartLesson}>Restart Lesson</button>
        </div>
      )} */}

        {/* <button
          onClick={handleRestart}
          className="px-6 py-3 text-white font-bold bg-blue-500 rounded-lg transition duration-200 hover:bg-blue-600 active:scale-95"
        >
          Restart
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep >= lessonData.length - 1}
          className="px-6 py-3 text-white font-bold bg-blue-500 rounded-lg transition duration-200 hover:bg-blue-600 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button> */}


      </div>

      <Leva hidden />
      <Loader />
      <Canvas camera={{ position: [0, 0, 0.0001] }}>
        <CameraManager />

        <Suspense>
          <Float speed={0.5} floatIntensity={0.2} rotationIntensity={0.1}>
            <Html
              transform
              {...itemPlacement[classroom].board}
              distanceFactor={1}
            >
              <MessagesList lessonInfo={lessoninfo}/>
              <BoardSettings />
            </Html>
            <Environment preset="sunset" />
            <ambientLight intensity={0.8} color="pink" />

            <Gltf
              src={`/models/classroom_${classroom}.glb`}
              {...itemPlacement[classroom].classroom}
            />
            <Teacher
              teacher={teacher}
              key={teacher}
              {...itemPlacement[classroom].teacher}
              scale={1.5}
              rotation-y={degToRad(20)}
            />
          </Float>
        </Suspense>
      </Canvas>
    </>
  );
};

const CAMERA_POSITIONS = {
  default: [0, 6.123233995736766e-21, 0.0001],
  loading: [
    0.00002621880610890309, 0.00000515037441056466, 0.00009636414192870058,
  ],
  speaking: [0, -1.6481333940859815e-7, 0.00009999846226827279],

  mobileDefault: [0.0000036891791593946404, 0.0000039337346866935065, 0.00009985447255153167],
};

const CAMERA_ZOOMS = {
  default: 1.5,
  loading: 1.8,
  speaking: 2.1204819420055387,

  // Mobile Default Zoom
  mobileDefault: 0.6239784084873344,
};

const CameraManager = () => {
  const controls = useRef();
  const { loading, currentMessage } = useAITeacher((state) => state);

  const [isMobile, setIsMobile] = useState(false);
  const [cameraData, setCameraData] = useState({ position: [], zoom: 1 });

  useEffect(() => {
    if (controls.current && currentMessage) {
      controls.current.setPosition(0, -1, 3, true); // Adjust for active speaking
      controls.current.zoomTo(2, true);
    }
  }, [currentMessage]);


  useEffect(() => {
    // Detect if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this width for mobile breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (controls.current) {
      // Adjust camera position for mobile screens
      if (isMobile) {
        controls.current.camera.position.set(-4, 3, 5);
        controls.current?.setPosition(...CAMERA_POSITIONS.mobileDefault, true);
        controls.current.camera.fov = 60; // Wider FOV for mobile
        controls.current.minZoom = 0.6; // Closer zoom on mobile
        controls.current.maxZoom = 2;
        controls.current.zoomTo(CAMERA_ZOOMS.mobileDefault);
      } else {
        controls.current.camera.position.set(0, 3, 5); // Adjusted for desktop view
        controls.current.camera.fov = 60; // Default field of view for desktop
        controls.current.zoomTo(CAMERA_ZOOMS.default);
        controls.current.minZoom = 1;
        controls.current.maxZoom = 3;
      }
      controls.current.update();
    }
  }, [isMobile]);

  useEffect(() => {
    if (loading) {
      if (isMobile) {
        controls.current?.setPosition(0.00002621880610890309, 0.00000515037441056466, 0.00009636414192870058, true);
        controls.current?.zoomTo(1.3560873957863966, true);
      } else {
        controls.current?.setPosition(...CAMERA_POSITIONS.loading, true);
        controls.current?.zoomTo(CAMERA_ZOOMS.loading, true);
      }
    } else if (currentMessage) {
      if (isMobile) {
        controls.current?.setPosition(-0.000005384345998332845,0.000010064011499099357,0.00009934648705775275, true);
        controls.current?.zoomTo(0.8643233841669705, true);
      } else {
        controls.current?.setPosition(...CAMERA_POSITIONS.speaking, true);
        controls.current?.zoomTo(CAMERA_ZOOMS.speaking, true);
      }
    }
  }, [loading, currentMessage, isMobile]);

  useEffect(() => {
    if (controls.current) {
      const position = controls.current.getPosition();
      const zoom = controls.current.camera.zoom;
      setCameraData({ position: [...position], zoom });
    }
  }, []);

  const handleGetCameraPosition = () => {
    if (controls.current) {
      const position = controls.current.getPosition();
      const zoom = controls.current.camera.zoom;
      console.log("Camera Position:", position);
      console.log("Camera Zoom:", zoom);
    }
  };

  useControls("Camera Settings", {
    getCameraPosition: button(handleGetCameraPosition),
  });

  return (
    <CameraControls
      ref={controls}
      minZoom={isMobile ? 0.6 : 1}
      maxZoom={isMobile ? 2 : 3}
      polarRotateSpeed={-0.3}
      azimuthRotateSpeed={-0.3}
      mouseButtons={{
        left: 1,
        wheel: 16,
      }}
      touches={{
        one: 32,
        two: 512,
      }}
    />
  );
};

// Preload the GLTF model
useGLTF.preload("/models/classroom_default.glb");
