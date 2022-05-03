import React from "react";
import './picture.css';

function image(props){
 return(
    <div className="picture">
        <img className="picture_img" src={props.img} alt="#" />
        <div className="text">
                <h2>{props.title}</h2>
                <p>{props.author}</p>
        </div>
    </div>
 )
}
export default image;