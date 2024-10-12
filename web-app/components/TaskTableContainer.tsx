'use client';
import { useState } from "react";

import Task from "@/lib/Task";
import TaskList from "./TaskTable";

const TaskListContainer: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([new Task("Water seeds", "low", 500, "chores")]);

    return (
        <div>
            <TaskList tasks={tasks}/>
        </div>
    );
};  

export default TaskListContainer;