import React, { useState } from "react";

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello, I'm {name}</h1>
      <p>I'm {age} years old</p>
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        />
        <label>Enter your age:</label>
        <input
          type="text"
          value={age}
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <button>Click me</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
