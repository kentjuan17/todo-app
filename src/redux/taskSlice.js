import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialTasks = [
  {
    id: uuid(),
    description: "Walk the dog",
    status: true,
  },
  {
    id: uuid(),
    description: "Wash the car",
    status: false,
  },
  {
    id: uuid(),
    description: "Finish the lab",
    status: false,
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        description: action.payload.description,
        status: action.payload.status,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action) => {
      const id = action.payload;
      const filteredTasks = state.tasks.filter((task) => task.id !== id);
      state.tasks = filteredTasks;
    },
    statusChange: (state, action) => {
      const id = action.payload;
      const updatedTasks = [...state.tasks];
      updatedTasks.forEach((task) => {
        if (task.id === id) {
          task.status = !task.status;
        }
      });
      state.tasks = updatedTasks;
    },
    clearTask: (state, action) => {
      state.tasks = [];
    },
  },
});

export const { addTask, removeTask, statusChange, clearTask } =
  taskSlice.actions;
export default taskSlice.reducer;
