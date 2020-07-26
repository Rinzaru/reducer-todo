import React from "react";

const TodoList = (props) => {
  console.log(props.todoProps);
  console.log(props.toggleCompleted);
  return (
    <div>
      {props.todoProps.map((task) => {
        return (
          <div key={task.id}>
            <div
              style={{
                border: "1px solid black",
                width: "15%",
                marginTop: "5px",
                marginLeft: "45%",
                textAlign: "center",
              }}
            >
              <p>{task.text}</p>
              <label>
                {task.completeText}
                <input type="checkbox" id={task.id} onClick={props.toggle} />
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
