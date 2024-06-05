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
    onClick?: () => void;
}





export const Task = (props: TaskProps = defaultTaskProps) =>
    {        
        const completionStatus = props.isComplete ? 'complete' : 'incomplete';

        return(
            <div className={["flex", "flex-row", "task-card", `task-card--${completionStatus}`].join(' ')} onClick = {props.onClick} >
                <div className='flex-col'>
                    <div 
                        className={['task-checkbox', `task-checkbox--${completionStatus}` ].join(' ')}
                        // could just be... className={`task-checkbox task-checkbox--${completionStatus}`}
                    />
                </div>
                <div className= {["flex-col",'flex-grow', `task-card--${completionStatus}`].join(' ')} >
                    <div className= {['flex', 'flex-row', 'task-card--title',].join(' ')}>
                        {props.title}
                    </div>
                    <div className= "flex-row task-card--description">
                        {props.description}
                    </div>
                </div>
            </div>
        )
    }

export default Task



