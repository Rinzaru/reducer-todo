import React, { useReducer } from "react";
import { reducer, TodoState } from "./reducers/reducer";
import AddToDoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
function App() {
  const [state, dispatch] = useReducer(reducer, TodoState);

  const toggleCompleteTask = (e) => {
    dispatch({ type: "TOGGLE_COMPLETED", id: e.target.id * 1 });
  };

  console.log(state);
  return (
    <div>
      <AddToDoForm dispatch={dispatch} />
      <TodoList todoProps={state} toggle={toggleCompleteTask} />
    </div>
  );
}

export default App;
