import React from "react";
import   s from "./Menu.module.css"

type MenuPropsType = {

    handleMouseDown: ()=>void;
    menuVisibility: boolean;
}


export const Menu = (props:MenuPropsType) => {

    let visibility = "hide";



    if (props.menuVisibility) {
        visibility = "show";

    }

    console.log(visibility)
    console.log(s)

    const addClass = props.menuVisibility ? s.show : s.hide;

    return (
        <div  onMouseDown={props.handleMouseDown} className={s.flyoutMenu + " " + addClass}>
            <div>Home</div>
            <div>About</div>
        </div>
)


}