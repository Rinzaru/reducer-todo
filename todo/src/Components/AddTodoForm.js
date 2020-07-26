import React, { useState } from "react";

const AddToDoForm = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: value });
  };

  const handleChanges = (e) => {
    setValue(e.target.value);
  };

  const handleCompleted = () => {
    props.dispatch({ type: "REMOVE_TODO" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          style={{
            width: "15%",
            marginTop: "5px",
            marginLeft: "35%",
          }}
        >
          Add New Todo:
          <textarea onChange={handleChanges} placeholder="Add Todo" />
        </label>
        <button>Add Item</button>
      </form>
      <button onClick={handleCompleted}>Remove Completed</button>
    </div>
  );
};

export default AddToDoForm;
