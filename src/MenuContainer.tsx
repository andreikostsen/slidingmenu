import React, {Component, useState} from "react";
import MenuButton from "./MenuButton";
import {Menu} from "./Menu";
import any = jasmine.any;

export const MenuContainer = ()=> {

    const [state, setState] = useState({visible: false})


  const toggleMenu = () => {
        setState({
            visible: !state.visible
        });
    }


    const handleMouseDown = (e:any) => {
        toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

            return (


            <div>
                <MenuButton handleMouseDown={handleMouseDown}/>
                <Menu handleMouseDown={handleMouseDown}
                      menuVisibility={state.visible}/>
                <div>
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



