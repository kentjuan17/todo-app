import { useState } from "react";
import { MdAddTask } from "react-icons/md";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (description === "") {
      setErrorMessage("Unable to add task. Please enter a description");
    } else {
      // Add task
      const data = { description, status };
      dispatch(addTask(data));

      // Alerts the user and navigates to the task list page
      alert("Task added successfully!");
      navigate("/");

      // Clear form
      setDescription("");
      setStatus("");
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="task-form-window">
      {/* Display error message if necessary */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Form field */}
      <div className="task-form">
        <div className="task-form-fields">
          <label>
            <span>Description:</span>
            <input
              type="text"
              maxLength={150}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <span>Status:</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value={false}>Open</option>
              <option value={true}>Completed</option>
            </select>
          </label>
        </div>
        <button>
          <MdAddTask />
          Add
        </button>
      </div>
    </form>
  );
}
