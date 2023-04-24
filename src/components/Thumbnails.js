import React from "react"

function Thumbnails(props){
    return(
        
            <div className="Thumbnails">
                <img src={props.picture}/>
                <div className="nailBody">
                    <p className="title">Title: <a href={props.link}>{props.title}</a></p>
                    <p className="genre">Type: {props.type}</p>
                    <p className="ratings">Status: {props.status}</p>
                </div>
            </div>
        
    )
}

export default Thumbnails