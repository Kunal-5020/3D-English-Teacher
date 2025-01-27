import React, { useState,useEffect } from 'react';
import './dashboard.css';
import Lessons from '../pages/lessons';
import Doubts from '../pages/doubts';
import Settings from '../pages/settings';

const Dashboard = () => {
    const [currentView, setCurrentView] = useState('userInfo');
    
    const [isSidebarHidden, setSidebarHidden] = useState(false);

    const userData = JSON.parse(localStorage.getItem('UserInformation'));


    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("greetingSent");
        window.location.reload();
    };

    const closeDoubtsSection = (audioPlayer) => {
        if (audioPlayer && audioPlayer.pause) {
          audioPlayer.pause(); // Pause the audio
        }
        setCurrentView('userInfo');
      };

    useEffect(() => {
        setSidebarHidden(!isSidebarHidden);
    }, [currentView]);

    const renderContent = () => {
        switch (currentView) {
            case 'lessons':
                return (
                    <div className="doubts-section">
                        
                        <Lessons closeDoubtsSection={closeDoubtsSection}/>;
                </div>
                )
            case 'doubts':
                return (
                    <div className="doubts-section">
                        <button className="close-button" onClick={closeDoubtsSection}>
                        ✖
                        </button>
                        <Doubts />
                    </div>
                );
            case 'settings':
                return <Settings />;
            default:
                return (
                    <div className="user-info-section">
                    <div className="user-info-card">
                      <div className="user-info-header">
                        <div className="avatar">
                          <img src={ '/profile.png'} alt="User Avatar" />
                        </div>
                        <div className="user-info-name">
                          <h2>{userData.name}</h2>
                          <p className="user-info-title">Learner</p>
                        </div>
                      </div>
                      <div className="user-info-details">
                        <div className="user-info-item">
                          <span className="user-info-label">Age:</span>
                          <span className="user-info-value">{userData.age}</span>
                        </div>
                        <div className="user-info-item">
                          <span className="user-info-label">Highest Education:</span>
                          <span className="user-info-value">{userData.highestEducation}</span>
                        </div>
                        <div className="user-info-item">
                          <span className="user-info-label">Email:</span>
                          <span className="user-info-value">{userData.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
        }
    };

    return (
        <div className={`dashboard-container ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
            {/* Conditional Rendering for Sidebar */}
            {currentView !== 'doubts' && (
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
                        <li className="logout">
                            <a
                                href="#"
                                className={currentView === 'logout' ? 'active' : ''}
                                onClick={handleLogout}
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            <div className="content-section">{renderContent()}</div>

            {/* Conditional Rendering for Sidebar Toggle */}
            {currentView !== 'doubts' && (
                <button
                    className={`toggle-sidebar-button ${isSidebarHidden ? 'rotate' : ''}`}
                    onClick={() => setSidebarHidden(!isSidebarHidden)}
                >
                    <img
                        src="https://i.ibb.co/x2nLhXN/arrow-right-svgrepo-com-1.png"
                        alt="toggle sidebar"
                        className="arrow-icon"
                    />
                </button>
            )}

        </div>
    );
};

export default Dashboard;
