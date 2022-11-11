import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"
import "./style.css"

function App(){
    
    const card= Data.map(item=>{
        
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )   
    })
    
    return (
        <div>
            <Navbar />
            {card}
        </div>
    )
}

export default App;
