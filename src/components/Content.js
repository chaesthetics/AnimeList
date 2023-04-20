import React, {useEffect, useState} from "react";


function Content(props){
   
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function sizeGetter(){
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', sizeGetter)
    }, [])
    return (
        <div className="Content">
            <h1>Welcome to my Website</h1>
            <h3>Come on ! and explore more about anime </h3>
            <div className="Form">
                <input type='text'/>
                <button> Search </button>
            </div>

            <h3>{windowWidth}</h3>
        </div>
    )
}

export default Content