import { useState } from "react"
import './task.css';

export const defaultTaskProps = {
    title: 'sweep the kitchen',
    description: 'get under the cabinets, do a good job',
    isComplete: true
}

export type TaskProps = {
    title: string;
    description: string;
    isComplete: boolean;
}





export const Task = ({
    title,
    description,
    isComplete
}: TaskProps = defaultTaskProps) =>
    {        
        const completionStatus = isComplete ? 'complete' : 'incomplete';

        return(
            <div className={["flex", "flex-row", "task-card", `task-card--${completionStatus}`].join(' ')} >
                <div className='flex-col'>
                    <div 
                        className={['task-checkbox', `task-checkbox--${completionStatus}` ].join(' ')}
                    />
                </div>
                <div className= {["flex-col",'flex-grow', `task-card--${completionStatus}`].join(' ')} >
                    <div className= {['flex', 'flex-row', 'task-card--title',].join(' ')}>
                        {title}
                    </div>
                    <div className= "flex-row task-card--description">
                        {description}
                    </div>
                </div>
            </div>
        )
    }

export default Task



