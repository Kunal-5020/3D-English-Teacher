import React, { useState } from 'react';
import './dashboard.css';
import Lessons from '../pages/lessons';
import Doubts from '../pages/doubts';
import Settings from '../pages/settings';


const Dashboard = () => {
    const [currentView, setCurrentView] = useState('userInfo');
    const [completedLessons, setCompletedLessons] = useState(67); 
    const totalLessons = 90;
    const [isSidebarHidden, setSidebarHidden] = useState(false);

    const renderContent = () => {
        switch (currentView) {
            case 'lessons':
                return <Lessons />;
            case 'doubts':
                return <Doubts />;
            case 'settings':
                return <Settings />;
            default:
                return (
                    <div className="user-info-section">
                        <h2>Your Progress</h2>
                        <div className="completed-lessons-section">
                            <div className="wrapper">
                                <div
                                    className="circle left"
                                    style={{
                                        animationDuration: `${6 - (completedLessons / totalLessons) * 10}s`,
                                    }}
                                ></div>
                                <div
                                    className="circle right"
                                    style={{
                                        animationDuration: `${3 - (completedLessons / totalLessons) * 5}s`,
                                    }}
                                ></div>
                                <div className="center-text">
                                    {completedLessons}/{totalLessons}
                                </div>
                            </div>
                            <button className="continue-button">Continue</button>
                        </div>
                    </div>
                );
        }
    };

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
    };

    return (
        <div className={`dashboard-container ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
            <div className={`sidebar ${isSidebarHidden ? 'hidden' : ''}`}>
                <ul>
                    <li>
                        <a
                            href="#"
                            className={currentView === 'userInfo' ? 'active' : ''}
                            onClick={() => setCurrentView('userInfo')}
                        >
                            User Info
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={currentView === 'lessons' ? 'active' : ''}
                            onClick={() => setCurrentView('lessons')}
                        >
                            Lessons
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={currentView === 'doubts' ? 'active' : ''}
                            onClick={() => setCurrentView('doubts')}
                        >
                            Doubts
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={currentView === 'settings' ? 'active' : ''}
                            onClick={() => setCurrentView('settings')}
                        >
                            Profile Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content-section">{renderContent()}</div>
            <button className={`toggle-sidebar-button ${isSidebarHidden ? 'rotate' : ''}`} onClick={toggleSidebar}>
            <img src="https://i.ibb.co/x2nLhXN/arrow-right-svgrepo-com-1.png" alt="toggle sidebar" className="arrow-icon" />
            </button>
        </div>
    );
};

export default Dashboard;