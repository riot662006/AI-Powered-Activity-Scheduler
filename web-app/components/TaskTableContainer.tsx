'use client';
import { useState } from "react";

import Task from "@/lib/Task";
import TaskList from "./TaskTable";
import AddTaskContainer from "./AddTaskContainer";

const TaskListContainer: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([new Task("Water seeds", "low", 500, "chores")]);

    return (
        <div>
            <AddTaskContainer tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks}/>
        </div>
    );
};  

export default TaskListContainer;