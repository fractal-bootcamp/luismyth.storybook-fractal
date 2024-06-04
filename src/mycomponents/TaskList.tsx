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


// type TaskListProps = {
//     tasks: typeof defaultTaskListProps
// }

type TaskListProps = {
    tasks: {
        title: string;
        description: string;
        isComplete: boolean;
    }[]
}


export const TaskList = (props: TaskListProps = {tasks: defaultTaskListProps}) =>
    {        
        const arrayOfTaskObjects = props["tasks"]
        
        const sequencing = "TBD"
        console.log(`IF YOU ONLY DIG IN AS FAR AS TASKS YOU GET`, props["tasks"])
        return(
            <>
                <p>{props.tasks[0].description}</p>
                {Task(props["tasks"][0])}
                {Task(props["tasks"][1])}
                <br />
                {arrayOfTaskObjects.map(singleTaskObject => {
                    return(
                        <div>
                            {Task(singleTaskObject)}
                        </div>)
                })}
            </>
        )
    }



