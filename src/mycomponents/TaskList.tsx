import { Task, TaskProps, defaultTaskProps } from "./Task"
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
defaultTaskProps,
defaultTaskProps,
defaultTaskProps,
]




export const TaskList = (props = defaultTaskListProps) =>
    {        
        const sequencing = "TBD"

        return(
            <>
                {Task(props[0])}
                {Task(props[1])}
                {Task(props[3])}
            </>
        )
    }



