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
import { TypingBox } from "./TypingBox";
import { SettingsSidebar } from "./SettingsSidebar"; // Import the sidebar

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

export const Experience = () => {
  const teacher = useAITeacher((state) => state.teacher);
  const askAI = useAITeacher((state) => state.askAI);
  const classroom = useAITeacher((state) => state.classroom);
  const [showTypingField, setShowTypingField] = useState(true);
  const [showVoicePreview, setShowVoicePreview] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); 

  useEffect(() => {
    
    
      // Check if the greeting has already been sent in the session
      const greetingSent = sessionStorage.getItem("greetingSent");

      if (!greetingSent) {
        const greetingQuestion = `Welcome Greeting to the user`;
        askAI(greetingQuestion);
        // Set the flag in sessionStorage to indicate the greeting has been sent
        sessionStorage.setItem("greetingSent", "true");
      }
    
  }, [ askAI]);

  return (
    <>
      <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
        <TypingBox
          showTypingField={showTypingField}
          showVoicePreview={showVoicePreview}
        />
      </div>

      {/* Settings Toggle Button */}
      <button
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-lg shadow-md z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        ⚙️
      </button>

      <SettingsSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        showTypingField={showTypingField}
        setShowTypingField={setShowTypingField}
        showVoicePreview={showVoicePreview}
        setShowVoicePreview={setShowVoicePreview}
      />
      
      {/* Show the Leva panel here */}
      <Leva hidden />
      
      <Loader />
      <Canvas
        camera={{
          position: [0, 0, 0.0001],
        }}
      >
        <CameraManager />

        <Suspense>
          <Float speed={0.5} floatIntensity={0.2} rotationIntensity={0.1}>
            <Html
              transform
              {...itemPlacement[classroom].board}
              distanceFactor={1}
            >
              <MessagesList />
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
  const loading = useAITeacher((state) => state.loading);
  const currentMessage = useAITeacher((state) => state.currentMessage);

  const [isMobile, setIsMobile] = useState(false);
  const [cameraData, setCameraData] = useState({ position: [], zoom: 1 });

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
        // Set zoom levels for mobile
        controls.current.minZoom = 0.6; // Closer zoom on mobile
        controls.current.maxZoom = 2;
        controls.current.zoomTo(CAMERA_ZOOMS.mobileDefault);
      } else {
        controls.current.camera.position.set(0, 3, 5); // Adjusted for desktop view
        controls.current.camera.fov = 60; // Default field of view for desktop
        // Set zoom levels for desktop
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
  }, [loading]);

  useEffect(() => {
    // Update the cameraData whenever the controls change
    if (controls.current) {
      const position = controls.current.getPosition();
      const zoom = controls.current.camera.zoom;
      setCameraData({ position: [...position], zoom });
    }
  }, []);

  // Handle clicking the button to log camera position
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
      minZoom={isMobile ? 0.6 : 1} // Default zoom for mobile will be 0.7, else 1 for desktop
      maxZoom={isMobile ? 2 : 3}
      polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      mouseButtons={{
        left: 1, // ACTION.ROTATE
        wheel: 16, // ACTION.ZOOM
      }}
      touches={{
        one: 32, // ACTION.TOUCH_ROTATE
        two: 512, // ACTION.TOUCH_ZOOM
      }}
    />
  );
};

// Preload the GLTF model
useGLTF.preload("/models/classroom_default.glb");
