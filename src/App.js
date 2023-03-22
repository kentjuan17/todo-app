import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";

import AddTaskPage from "./pages/AddTaskPage";
import TaskListPage from "./pages/TaskListPage";
import NotFoundPage from "./pages/NotFoundPage";

import HelpPage from "./pages/HelpPage";
import HelpIntroductionPage from "./pages/HelpPage/Introduction";
import HelpAddTaskPage from "./pages/HelpPage/AddTask";
import HelpRemoveTaskPage from "./pages/HelpPage/RemoveTask";
import HelpChangeStatusPage from "./pages/HelpPage/ChangeStatus";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/help" element={<HelpPage />}>
          <Route path="" element={<HelpIntroductionPage />} />
          <Route path="add" element={<HelpAddTaskPage />} />
          <Route path="remove" element={<HelpRemoveTaskPage />} />
          <Route path="change" element={<HelpChangeStatusPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
