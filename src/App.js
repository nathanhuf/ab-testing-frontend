import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [layout, setLayout] = useState("");

  useEffect(() => {
    fetchLayout();
  }, []);

  const fetchLayout = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get_layout`, {
        withCredentials: true,
      });
      setLayout(response.data.layout);
    } catch (error) {
      console.error("Error fetching layout:", error);
      setLayout("Error fetching layout");
    }
  };

  return (
    <div className="App">
      <header className={`App-header ${layout}`}>
        <h1>Current Layout: {layout.toUpperCase()}</h1>
      </header>
    </div>
  );
}

export default App;
