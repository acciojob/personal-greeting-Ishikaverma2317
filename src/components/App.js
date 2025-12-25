import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name" 
      />

      {name !== "" && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;
