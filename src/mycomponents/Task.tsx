import './task.css';

const defaultTaskProps = {
    title: 'sweep the kitchen',
    description: 'get under the cabinets, do a good job',
    isComplete: true
}

export type TaskProps = {
    title: string;
    description: string;
    isComplete: boolean;
}

const Task = ({
    title,
    description,
    isComplete
}: TaskProps = defaultTaskProps) =>
    {
        return(
            <div className="task">
                <p>{title}</p>
                <p>{description}</p>
                <br />
                <p>{isComplete ? "Complete" : "Incomplete"}</p>
            </div>
        )
    }

export default Task



