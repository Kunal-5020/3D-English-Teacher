import React, { useState, useEffect } from 'react';
import { Experience } from '../Experience2';
import './lessons.css';

// Predefined data variable for lesson files
const data = {
    English: {
        1: {
            audioFiles: [
                "/assets/English/1/audio/1.mp3",
            ],
            textFiles: [
                "/assets/English/1/text/1.txt",
            ],
            visemes:[
                "/assets/English/1/audio/visemes.json",
            ]
        },
    },
    Hindi: {
        1: {
            audioFiles: [
                "/assets/Hindi/1/audio/1.mp3",
            ],
            textFiles: [
                "/assets/Hindi/1/text/1.txt",
            ],
            visemes:[
                "/assets/Hindi/1/audio/visemes.json",
            ]
        },
    },
};

const Lessons = ({ closeDoubtsSection }) => {
    const lessons = Array.from({ length: 90 }, (_, i) => `Lesson ${i + 1}`);
    const [lessonInfo, setLessonInfo] = useState(null);
    const [lessonData, setLessonData] = useState(null);

    // Function to fetch text and audio files' content
    const fetchLessonData = async (language, lessonNumber) => {
        try {
            // Fetch files from predefined data variable
            const lessonContent = data[language]?.[lessonNumber];
            if (!lessonContent) {
                throw new Error('Lesson data not found.');
            }

            // Fetch text file content
            const textContents = await Promise.all(
                lessonContent.textFiles.map(async (textFile) => {
                    const response = await fetch(textFile);
                    if (!response.ok) throw new Error(`Failed to fetch ${textFile}`);
                    return response.text(); // Get text content
                })
            );

            // Fetch audio file content
            const audioContents = await Promise.all(
                lessonContent.audioFiles.map(async (audioFile) => {
                    const response = await fetch(audioFile);
                    if (!response.ok) throw new Error(`Failed to fetch ${audioFile}`);
                    const blob = await response.blob(); // Get audio as Blob
                    return URL.createObjectURL(blob); // Create URL for Blob
                })
            );

           // Fetch viseme file content
      const visemeContents = await Promise.all(
        lessonContent.visemes.map(async (visemeFile) => {
          const response = await fetch(visemeFile);
          if (!response.ok) throw new Error(`Failed to fetch ${visemeFile}`);
          return response.json(); // Parse viseme data as JSON
        })
      );
    //   console.log(visemeContents);

      // Return processed lesson data
      return {
        textFiles: textContents,
        audioFiles: audioContents,
        visemes: visemeContents,
      };

        } catch (error) {
            console.error('Error fetching lesson data: ', error);
            return null;
        }
    };

    // Function to handle button click
    const handleButtonClick = async (language, lessonNumber) => {
        const data = await fetchLessonData(language, lessonNumber);

        if (data) {
            setLessonData(data);
            setLessonInfo(`${language}-Lesson ${lessonNumber}`); // Format lesson info
        } else {
            alert('Failed to load lesson data.');
        }
    };

    return lessonInfo === null ? (
        <div className="lessons-container">
            <h2 className="lessons-heading">Lessons</h2>
            <div className="lessons-grid">
                {lessons.map((lesson, index) => (
                    <div key={index} className="lesson-card">
                        <h3>{lesson}</h3>
                        <p>Click the button below to start this lesson.</p>
                        <div className="button-container">
                            {/* Pass the lesson number along with language */}
                            <button
                                className="play-button"
                                onClick={() => handleButtonClick('English', index + 1)}
                            >
                                English
                            </button>
                            <button
                                className="play-button"
                                onClick={() => handleButtonClick('Hindi', index + 1)}
                            >
                                Hindi
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    :
    (
        // <Experience lesson={lessonData} lessonInfo={lessonInfo} closeDoubtsSection={closeDoubtsSection} />
        <h1>Under Maintainence</h1>
    );
};

export default Lessons;