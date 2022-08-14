import React, {useState} from "react";
import MenuButton from "./MenuButton";
import {Menu} from "./Menu";
import  s from "./Main.module.css"

export const MenuContainer = ()=> {

    const [state, setState] = useState({visible: false})

    console.log(!state.visible)

  const toggleMenu = () => {
        setState({
            visible: !state.visible
        });
    }


    const handleMouseDown = () => {
        toggleMenu();

        console.log("clicked");

    }

            return (


            <div>
                <MenuButton handleMouseDown={handleMouseDown}/>
                <Menu handleMouseDown={handleMouseDown}
                      menuVisibility={state.visible}/>
                <div id="container" className={s.container}>
                    <p>Can you spot the item that doesn't belong?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebees</li>
                        <li>Aenean</li>
                        <li>Consectetur</li>
                    </ul>
                </div>
            </div>
        )
    }



