import PropTypes from 'prop-types';

const TaskItem = ({ task, onDelete, onEdit }) => {
  const hadleEditing = () => {
    onEdit(task)
  }

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={onDelete}>Eliminar</button>
      <button onClick={hadleEditing} style={{ marginLeft:"20px" }}>Editar</button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskItem;