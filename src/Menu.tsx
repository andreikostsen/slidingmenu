
type MenuPropsType = {

    handleMouseDown: any;
    menuVisibility: boolean;
}


export const Menu = (props:MenuPropsType) => {

    let visibility = "hide";

    if (props.menuVisibility) {
        visibility = "show";
    }

    return (
        <div id="flyoutMenu" onMouseDown={props.handleMouseDown} className={visibility}>
            <div>Home</div>
            <div>About</div>
        </div>
)


}