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
        const completionStyles = isComplete ? 'task-card--complete' : 'task-card--incomplete';

        return(
            <div className="flex flex-row task-card" >
                <div className="flex flex-col">
                    {isComplete ? "Complete" : "Incomplete"}
                </div>
                <div className= "flex flex-col" >
                    <div className= {['flex flex-row', 'task-card--title', completionStyles].join(' ')}>
                        {title}
                    </div>
                    <div className= "flex flex-row task-card--description">
                        {description}
                    </div>
                </div>
            </div>
        )
    }

export default Task



