import React from 'react';
import '../index.css';

function TodoList (props) {
  return (
    <li className='list_item'>
        {props.item}
        <span >
            <i >
            <button className='deletebutton' onClick={(e)=>{
              props.deleteListItem(props.index)
             }}>delete</button>
            </i>
          
        </span>
    </li>
  )
}
export default TodoList;