export const SettingsSidebar = ({
  showSidebar,
  setShowSidebar,
  showTypingField,
  setShowTypingField,
  showVoicePreview,
  setShowVoicePreview,
}) => {
  const handleToggleTypingField = () => {
    setShowTypingField(!showTypingField);
  };

  const handleToggleVoicePreview = () => {
    setShowVoicePreview(!showVoicePreview);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    sessionStorage.removeItem("greetingSent");
    // Optionally, redirect the user to the login page
    window.location.reload(); // Refresh the page to reset the state
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 shadow-lg transform transition-transform duration-300 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <button
        className="absolute top-2 right-2 text-gray-300 hover:text-white"
        onClick={() => setShowSidebar(false)}
      >
        ✖
      </button>

      <h2 className="text-2xl mb-4">Settings</h2>

      {/* Show Typing Box */}
      <div className="flex items-center justify-between mb-4">
        <span>Show Typing Box</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showTypingField}
            onChange={handleToggleTypingField}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
        </label>
      </div>

      {/* Show Voice Preview (Only when Typing Box is Hidden) */}
      {!showTypingField && (
        <div className="flex items-center justify-between mb-4">
          <span>Show Voice Preview</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showVoicePreview}
              onChange={handleToggleVoicePreview}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>
      )}

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute bottom-4 left-4 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors"
      >
        Logout
      </button>
    </div>
  );
};
