// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import '../index.css'
// import './App.css';

function ToDo(props) {
    const [text,setText]=useState('');

    const handleTextChange =(event)=>{                            //for input value continuous change
       const newValue=event.target.value;
       setText(newValue);
    }

    return (
        <div>
            <div className='tod'>
                <div className='tod-input'>
                    <input type="text" className="form-control" 
                    id="exampleFormControlInput1"
                    value={text}
                    onChange={handleTextChange} 
                    placeholder="Note your Task"
                    
                    />
                </div>

                <div style={{padding:"5px", marginTop:"5px"}}>         
                   <button onClick={()=>{
                    props.addlist(text);
                    setText("")
                   }}>
                    Add 
                   </button>
                </div>

            </div>
        </div>
    );
}

export default ToDo;