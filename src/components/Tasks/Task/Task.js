import "./Task.scss";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeTask, statusChange } from "../../../redux/taskSlice";

export default function Task({ id, description, status }) {
  const dispatch = useDispatch();

  const handleStatusClick = (e) => {
    e.preventDefault();
    dispatch(statusChange(id));
  };

  const handleTaskRemove = (e) => {
    e.preventDefault();
    dispatch(removeTask(id));
  };

  const statusStyle = status ? "completed" : "open";

  return (
    <div className="task">
      <button className="close" onClick={handleTaskRemove}>
        <IoClose />
      </button>
      <div className="description">{description}</div>
      <div className="id">ID: {id}</div>
      <div className="status">
        Status:
        <span className={statusStyle}> {status ? "Completed" : "Open"}</span>
      </div>
      <span className="change-status">
        <button onClick={handleStatusClick}>
          {(status && <FaToggleOn />) || <FaToggleOff />}
        </button>
        Change Status
      </span>
    </div>
  );
}
