import { Task, TaskProps, defaultTaskProps } from "./Task"
import { useState } from "react"

import './task.css';

export const defaultTaskListProps = [
    {title: "Special First Task",
    description: "Wash, dry, fold, and put away the clothes and linens.",
    isComplete: true
},
{
    title: "Special Second Task More Laundry",
    description: "Wash, dry, fold, and put away the clothes and linens.",
    isComplete: true
},
{
    title: "Third Task Yo Even More Laundry",
    description: "Wash, dry, fold, and put away the clothes and linens.",
    isComplete: true
},
defaultTaskProps,
]


// type TaskListProps = {
//     tasks: typeof defaultTaskListProps[]
// }

// type TaskListProps = {
//     tasks: {
//         title: string;
//         description: string;
//         isComplete: boolean;
//     }[]
// }

type TaskListProps = {
    tasks: Array<TaskProps>
}

function compareTasksForSequencing(a: TaskProps, b: TaskProps) {
    if (a.isComplete && !b.isComplete) {
        return -1;
    }
    else if (!a.isComplete && b.isComplete) {
        return 1;
    }
    else {
        return 0;
    }
}

export const TaskList = (props: TaskListProps = {tasks: defaultTaskListProps}) =>
    {        
        const [taskListState, setTaskListState] = useState<TaskProps[]>(props.tasks ? [...props.tasks].sort(compareTasksForSequencing) : []);
        const arrayOfTaskObjects = taskListState
        

        const sequencing = "TBD"
        return(
            <>
                {taskListState.map(singleTaskObject => {
                    return(
                        <div className="flex m-4" key = {singleTaskObject.title}>
                            <Task {...singleTaskObject} />
                            {/* Dot dot dot unpacks all the params and passes them through, e.g. the same as saying... 
                            <Task title={singleTaskObject.title} description={singleTaskObject.description} isComplete={singleTaskObject.isComplete} /> */}
                        </div>)
                })}
            </>
        )
    }



