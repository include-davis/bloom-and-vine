import "./serviceBar.css"

function ServiceBarElm(props){

    if(props.name == "Custom Orders"){
        return(
            <div id = "barElm">
                <img className= "servImg" src={props.img} alt={props.name} />
    
                <h3 className= "servHeader2" >{props.name}</h3>
            </div>
        )
    }
    else{
        return(
            <div id = "barElm">
                <img className= "servImg" src={props.img} alt={props.name} />
    
                <h3 className= "servHeader" >{props.name}</h3>
            </div>
        )
    }

};

export default ServiceBarElm;