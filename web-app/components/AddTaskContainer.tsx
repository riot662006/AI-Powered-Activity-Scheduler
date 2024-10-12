'use client';

import { useState } from 'react';

import AddTask from './AddTask';
import TaskTable from './TaskTable';
import Task from '@/lib/Task';

interface TaskContainerProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}


const AddTaskContainer: React.FC<TaskContainerProps> = ({tasks, setTasks}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]); // Add the new task to the task list
  };

  return (
    <div>
        {
            (isHidden) ? <button onClick={() => {setIsHidden(false)}}>New Task</button> : <button onClick={() => {setIsHidden(true)}}>Close</button>
        }
        {
            (!isHidden) && <AddTask onAddTask={addTask} />
        }
    </div>
  );
};

export default AddTaskContainer;
