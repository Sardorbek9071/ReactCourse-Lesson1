import React, {useState} from "react";

import './books.css';

    const Books = props =>{
      const  [title, setTitle] = useState(props.title);
        const changeHandler = ()=>{
            setTitle("Perfect Diagnostic Clinic");
        }
        const changeHandlerReset = ()=>{
            setTitle(props.title)
        }
        const [counter, setCounter] = useState(0);
        const addCounter = () =>{
            setCounter(counter+1);
        }
        const delCounter = () => {
            setCounter(counter-1);
        }
        return(
            <div className="book">
                <img className="books_img" src={props.img} alt="Books"/>
                <div className="books_desc">
                    <h2>{title}</h2>
                    {/* <p>{props.author}</p> */}
                    <button className="Change" 
                    onClick={changeHandler}>Change</button>
                    <button className="Change2" onClick={changeHandlerReset}>Reset</button>
                    <p className="count">{counter}</p>
                    <button className="Increment" onClick={addCounter}>ADD</button>
                    <button className="Decrement" onClick={delCounter}>DEL</button>
                </div>
            </div>
        )
    }
export default Books;