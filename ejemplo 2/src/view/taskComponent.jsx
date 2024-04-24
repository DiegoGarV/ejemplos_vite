import { useEffect , useState } from 'react';
import TaskList from '../component/taskList';
import EditTaskForm from './editTaskForm';
import PropTypes from 'prop-types'

const TaskComponent = ({ tasks, setTasks }) => {
  const [changeTask, setChangeTask] = useState(null);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('task', JSON.stringify(updatedTasks));
  };

  const toEdit = (newTask) => {
    setChangeTask(newTask)
  };

  const saveEdit = (editedTask) => {
    const updatedTasks = tasks.map(task => task.id === editedTask.id ? editedTask : task);
    setTasks(updatedTasks);
    localStorage.setItem('task', JSON.stringify(updatedTasks));
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {changeTask ? (
        <EditTaskForm task={changeTask} onEditTask={saveEdit}/>
      ) : (
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onEditTask={toEdit} />
      )}
    </div>
  );
};

TaskComponent.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
}

export default TaskComponent;