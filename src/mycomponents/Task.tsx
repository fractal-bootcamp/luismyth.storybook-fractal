// import React from 'react';
// // import './task.css' ??? may be needed later
// import '..tailwind.css'
// actually maybe none of these are needed

const defaultTaskProps = {
    title: 'sweep the kitchen',
    description: 'get under the cabinets, do a good job',
    isComplete: true
}

type TaskProps = {
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
                <p>hello world this a task</p>
            </div>
        )
    }

export default Task



