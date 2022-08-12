import React from "react";
import './MenuButton.css';


type MenuButtonPropsType = {

    handleMouseDown: any

}


const MenuButton = (props:MenuButtonPropsType) => {
        return (
            <button id="roundButton" onMouseDown={props.handleMouseDown}></button>
        );
    }


export default MenuButton;