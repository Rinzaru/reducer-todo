import React from "react";

export const TodoState = [
  {
    text: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          completeText: "Not Complete",
          id: Date.now(),
        },
      ];
    case "TOGGLE_COMPLETED":
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            completed: !task.completed,
            completeText: !task.completed ? "Completed" : "Not Complete",
          };
        } else return task;
      });
    case "REMOVE_TODO":
      return [...state].filter((task) => {
        return !task.completed;
      });
    // case "EDIT_TODO":
    //   const { id } = action.payload;
    //   const newState = TodoState.map((task) => {
    //     if (task.id === id) task = action.payload;
    //     return task;
    //   });
    // return newState;
    default:
      return state;
  }
};
