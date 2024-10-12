import Task from "@/lib/Task";

interface TaskListProps {
    tasks: Task[];
}

const TaskTable: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Duration (mins)</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Created At</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description || 'N/A'}</td>
                <td>{task.priority}</td>
                <td>{task.duration}</td>
                <td>{task.category}</td>
                <td>{task.deadline ? task.deadline.toLocaleDateString() : 'N/A'}</td>
                <td>{task.createdAt.toLocaleDateString()}</td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default TaskTable;