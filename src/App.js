import React, { useState } from "react";
import Todos from "./todos";

function App() {
  const [state, setState] = useState({
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  });

  const deleteTodo = (id) => {
    const newList = state.todos.filter((item) => item.id !== id);
    console.log(newList);
    var tmpState = { ...state };
    tmpState.todos = newList;
    setState(tmpState);
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={state.todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
