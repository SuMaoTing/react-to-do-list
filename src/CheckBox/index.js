import react, {useState} from "react";
import styles from './index.css';

const CheckBox = () =>{
    const task = [
        {
            id:1,
            name: 'abc',
            check: false
        },
        {
            id:2,
            name: 'def',
            check: true
        }
    ]
    const handleCheck = () =>(
        console.log('Check')
    )

    const listItem = task.map((task) => 
    <li key={task.id}>
        <form className="CheckBox">
            <input type="checkbox" checked={task.check} onChange={handleCheck}/>
            {task.name}
            <input type="button" value="delete" />
        </form>
    </li>
    )
    return(
        <ul>
            {listItem}
        </ul>
    )
} 
export default CheckBox;