import React, {useEffect, useState} from "react";


function Content(props){
    
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])



    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType])
 
    let data = items.map((item)=>{
        return <pre>ID: {JSON.stringify(item.id)} Name: {JSON.stringify(item.name)}</pre>
    })
    return (
        <div className="Content">
            <h1>Welcome to my Website</h1>
            <h2>{resourceType}</h2>
           
           
            <h3>Come on ! and explore more about anime </h3>

       
            <div className="Form">
                <input type='text'/>
                <button> Search </button>

            </div>
            <button onClick={()=>{setResourceType('users')}}>USERS</button>
            <button onClick={()=>{setResourceType('posts')}}>POST</button>
            <button onClick={()=>{setResourceType('comments')}}>COMMENTS</button>
            <h3>{data}</h3>
        </div>
    )
}

export default Content