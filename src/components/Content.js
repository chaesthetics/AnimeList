import React, {useEffect, useState} from "react";


function Content(props){

    const [resourceType, setResourceType] = useState('posts')

    const [items, setItems] = useState([])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [numero, setNumero] = useState(0)

    const [darkTheme, setDarkTheme] = useState(false)

    const theme= {
        backgroundColor: darkTheme ? '#191970' : 'white',
        color: darkTheme ? 'white' : '#191970'
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType])

    let observeSize = ()=>{
        setWindowWidth(window.innerWidth)
    }

    const taymis2 = (num) =>{
        return num *2
    }

    const list = items.map((item)=>{
        return <pre>The id is {JSON.stringify(item.id)} and the name is {JSON.stringify(item.name)}</pre>
    })
    return (
        <div className="Content">
            <h1>Welcome to my Website</h1>
            
           
           
            <h3>Come on ! and explore more about anime </h3>

        
            <div className="Form">
                <button onClick={()=>{setResourceType('posts')}}>Post</button>
                <button onClick={()=>{setResourceType('comments')}}>Comment</button>
                <button onClick={()=>{setResourceType('users')}}>User</button>
                {window.addEventListener('resize', observeSize) }
                <h3>{resourceType} {windowWidth}</h3>   

                <h3>Results: </h3>
                <h5></h5>
                <input type='number' onChange={
                    (e)=>{
                        setNumero(parseInt(e.target.value))
                    }
                    }
                />
                <button onClick={()=>{
                    setDarkTheme((dark)=>{
                        return !dark
                    })
                }}> Change theme </button>
                <h3 style={theme}>Result: {taymis2(numero)}</h3>
            </div>

            <h3></h3>
        </div>
    )
}

export default Content