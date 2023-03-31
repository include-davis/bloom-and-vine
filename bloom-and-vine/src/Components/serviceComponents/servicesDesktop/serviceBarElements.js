import "./serviceBar.css"

function ServiceBarElm(props){
    function changeImage(){
        props.setIndex(props.changeTo);
    }

    if (props.name == "Custom Orders") {
        return (
            <div onClick = {changeImage} id = "barElm">
                <img  className= "servImg" src={props.img} alt={props.name} />
                <h3 className= "servHeader2">
                    {props.name}
                </h3>
            </div>
        )
    }
    else {
        return (
            <div onClick = {changeImage}  id = "barElm">
                <img className= "servImg" src={props.img} alt={props.name} />
                <h3 className= "servHeader">
                    {props.name}
                </h3>
            </div>
        )
    }

};

export default ServiceBarElm;