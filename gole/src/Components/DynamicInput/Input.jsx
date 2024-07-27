import React, { useState } from 'react';

const DynamicInput = () => {
  const [inputs, setInputs] = useState(['']); // State to store input values

  // Function to handle input change
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Function to add a new input field
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  // Function to remove an input field
  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveInput(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
};

export default DynamicInput;