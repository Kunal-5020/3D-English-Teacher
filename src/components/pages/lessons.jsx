import React, { useState } from 'react';
import { Experience } from '../Experience2';
import './lessons.css';

const Lessons = () => {
    const lesson = Array.from({ length: 90 }, (_, i) => `Lesson ${i + 1}`);
    const [lessonInfo, setlessonInfo] = useState(null);

    // Function to handle button click
    const handleButtonClick = (language, lessonNumber) => {
        console.log(`Starting lesson ${lessonNumber} in ${language}`);
        setlessonInfo (`${language}-${lessonNumber}`); // Format lesson info
    };

    return (
        lessonInfo===null?(
        <div className="lessons-container">
            <h2 className="lessons-heading">Lessons</h2>
            <div className="lessons-grid">
                {lesson.map((lesson, index) => (
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
        </div>)
        :(
        <>
        <Experience lesson={lessonInfo} />
        </>)
        
    );
};

export default Lessons;
