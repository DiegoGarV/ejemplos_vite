// Recibe la ruta y renderiza el componente
import TaskComponent from '../view/taskComponent'
import PropTypes from 'prop-types';
import AddTaskForm from '../view/addTaskForm';

function Router({ ruta, setRoute, tasks, setTasks }) {

    const navigate = (newRoute) => {
        setRoute(newRoute);
    };

    switch (ruta) {
        case "/list":
            return <TaskComponent tasks={tasks} setTasks={setTasks}/>
        case "/add":
            return <AddTaskForm onAddTask={(task) => {
                setTasks([...tasks, task]);
                localStorage.setItem('task', JSON.stringify([...tasks, task]))
                navigate("/list");
            }} />;
        case "/":
            return <TaskComponent tasks={tasks} setTasks={setTasks}/>
        default:
            return (
                <div>
                    <h1>Bienvenidos</h1>
                </div>
            )
    }
}

Router.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRoute: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
};

export default Router