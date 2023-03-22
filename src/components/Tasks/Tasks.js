import Task from "./Task/Task";
import "./Tasks.scss";
import { CgPlayListRemove } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { clearTask } from "./../../redux/taskSlice";

export default function Tasks() {
  let tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleClearTasks = (e) => {
    e.preventDefault();
    dispatch(clearTask());
  };

  return (
    <main className="task-list">
      {tasks.length !== 0 && (
        <button className="clear-task" onClick={handleClearTasks}>
          <CgPlayListRemove />
          Clear Tasks
        </button>
      )}
      {!tasks.length && <div className="empty-list">Your list is empty.</div>}
      {tasks.map((task, index) => {
        return <Task key={index} {...task} />;
      })}
    </main>
  );
}
