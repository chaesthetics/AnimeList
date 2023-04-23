import React from "react"

function Thumbnails(props){
    return(
        
            <div className="Thumbnails">
                <img src={props.picture}/>
                <div className="nailBody">
                    <p className="title">Title: {props.title}</p>
                    <p className="genre">Genre: {props.genre}</p>
                    <p className="ratings">Ratings: ⭐⭐⭐</p>
                </div>
            </div>
        
    )
}

export default Thumbnails