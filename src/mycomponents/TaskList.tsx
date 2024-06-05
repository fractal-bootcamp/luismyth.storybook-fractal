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

        const sequencing = "TBD"
        return(
            <>
                {taskListState.map((singleTaskObject, index )=> {
                    return(
                        <div className="flex m-4" key = {index}>
                            <Task 
                                {...singleTaskObject} 
                                onClick = {() => {
                                    const workingCloneOfState = [...taskListState]; 
                                    // if you just said oldState = taskListState it would be two variables pointing to the same reference
                                    // we want a "deep copy", so we'll pull the ingredients out of taskListState
                                    // and then reassemble them in a fresh reference
                                    workingCloneOfState[index].isComplete = !workingCloneOfState[index].isComplete;
                                    console.log("test");
                                    setTaskListState(workingCloneOfState);
                                }}
                            />
                            {/* Dot dot dot unpacks all the params and passes them through, e.g. the same as saying... 
                            <Task title={singleTaskObject.title} description={singleTaskObject.description} isComplete={singleTaskObject.isComplete} /> */}
                        </div>)
                })}
            </>
        )
    }


// export function INSPIRATION(props: TaskListProps) {

//     const [taskList, setTaskList] = useState<TaskProps[]>(props.tasks ? [...props.tasks].sort(sortTaskList) : []);
    
//     return (
//         <div className="flex flex-col gap-[16px]">
//         {taskList.map((task, index) => <Task name={task.name} description={task.description} isCompleted={task.isCompleted} width={props.width || 300}
//         onClick={() => {
//             const newTaskList = [...taskList];
//             newTaskList[index].isCompleted = !newTaskList[index].isCompleted;
//             newTaskList.sort(sortTaskList);
//             setTaskList(newTaskList);
//         }}
//         />)}
//         </div>
//     );
//     }


