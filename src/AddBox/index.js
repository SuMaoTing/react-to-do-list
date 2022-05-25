import React from 'react';
import styles from './index.css';

const AddBox = () => {
    return (
        <form action='add()' className="AddBox">
            <input type='text'/>
            <input type='submit'/>
        </form>
    )
}
export default AddBox;