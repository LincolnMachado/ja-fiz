import React from "react";
import Main from "./Main";
import Header from "./Header";
import Banner from "./Banner";
import { useLocalStorageState } from "./my-hooks";

function App() {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  return (
    <div>
      <Header />

      <Banner
        onNewTask={(t) => {
          setTasks([...tasks, t]);
        }}
      />

      <Main
        tasks={tasks}
        onNewTaskDone={(taskId, log) => {
          setTasks([
            ...tasks.map((t) => {
              if (t.id !== taskId) {
                return t;
              }
              return { ...t, logs: [...t.logs, log] };
            }),
          ]);
        }}
        onRemoveTask={(taskId) => {
          if (!window.confirm("Tem certeza:")) {
            return;
          }
          setTasks([...tasks.filter((t) => t.id !== taskId)]);
        }}
      />
    </div>
  );
}

export default App;
