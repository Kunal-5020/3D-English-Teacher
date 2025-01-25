import React, { useState } from "react";
import "./auth.css";

const Auth = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    highestEducation: "",
  });
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", age: "", highestEducation: "" }); // Reset form
    setMessage(""); // Reset message
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? "/api/auth/login" : "/api/auth/signup";

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: formData.age,
          highestEducation: formData.highestEducation,
        };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        if (isLogin) {
          // Save token in localStorage and update authentication state
          localStorage.setItem("token", result.token);
          localStorage.setItem("UserInformation", JSON.stringify(result.user));
          setIsAuthenticated(true); // Update parent component to indicate user is logged in
          setMessage("Login Successful!");
          
      
        } else {
          setMessage(result.message || "Signup successful!");
        }
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  min="1"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="highestEducation"
                  placeholder="Highest Education"
                  value={formData.highestEducation}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={handleToggle} className="toggle-btn">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
