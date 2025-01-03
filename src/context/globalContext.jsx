"use client";

import { createContext, useContext, useState } from "react";

// Create the global context
const GlobalContext = createContext();

// Global provider component
export const GlobalProvider = ({ children }) => {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    age: null,
    highestEducation: "",
    checklist: [],
    allSummaryHistory: [],
  });

  // Function to sync data with the server
  const syncWithServer = async (dataType, data) => {
    try {
      await fetch(`https://voice-chat-server-w8qu.onrender.com/${dataType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(`Failed to sync ${dataType} with server:`, error);
    }
  };

  // Function to update the checklist and sync it with the server
  const updateChecklist = (newChecklist) => {
    setUserData((prevUserData) => {
      const updatedUserData = { ...prevUserData, checklist: newChecklist };
      syncWithServer("checklist", updatedUserData);
      return updatedUserData;
    });
  };

  // Function to add an entry to user history and sync it with the server
  const addToHistory = (entry) => {
    setUserData((prevUserData) => {
      const updatedHistory = [...prevUserData.allSummaryHistory, entry];
      const updatedUserData = { ...prevUserData, allSummaryHistory: updatedHistory };
      syncWithServer("updatehistory", updatedHistory);
      return updatedUserData;
    });
  };

  // Function to update all user data
  const updateUserData = (updatedData) => {
    setUserData((prevUserData) => {
      const newUserData = { ...prevUserData, ...updatedData };
      
      return newUserData;
    });
  };


  return (
    <GlobalContext.Provider
      value={{
        UserData,
        updateChecklist,
        addToHistory,
        updateUserData,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

