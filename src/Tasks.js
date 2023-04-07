import { useState } from "react"
import { Task } from "./component/Task"
export const Tasks = ({tasks}) => {
    return (
        <>
        {tasks.map((task) => (<Task key={task.id} task={task} /> ))}
    </>
    )
}
