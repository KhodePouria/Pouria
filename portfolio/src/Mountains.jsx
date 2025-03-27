import React,{useEffect,useState} from "react"
import Mountain from "./assets/Mountain.svg"
import Clouds from "./assets/Clouds.svg"
import Insta from "./assets/Insta-Logo.svg"
import Tele from "./assets/Telegram-Logo.svg"
function mountain(){
    
    const [scrollY, setscrollY] = useState(0)

    const handlescroll= ()=> {
        setscrollY(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handlescroll)

        return() => {window.removeEventListener('scroll', handlescroll)}

    },[])


    return(
        <div className="container">
            <img className="mountain" src={Mountain} style={{transform:`translateY(${scrollY * 0.5}px)`}}></img>
            <div className="cloud-container" >
                <img className="clouds" src={Clouds} style={{position:"absolute"}}></img >
                <div className="white-space" style={{ backgroundColor: "white", height:'150vh',width:'100vw'}}>
                    
                <h1 className="name-intro" style={{transform:`translateY(${scrollY * 0.5}px)`,marginBottom:"400px"}}>KhodePouria</h1>
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" , transform:`translateY(${scrollY * 0.5}px)`}}>
                <div style={{ display: "flex", alignItems: "center", fontSize: "3rem", margin: "0px", padding: "0px" }}>
                    <img src={Insta} style={{ width: "3vw", marginLeft: "10px", marginRight: "10px" }} />
                    <h3 style={{ margin: "0", padding: "0" }}>@pouria._.ramezani</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "3rem", margin: "0px", padding: "0px" }}>
                    <img src={Tele} style={{ width: "3vw", marginLeft: "10px", marginRight: "10px" }} />
                    <h3 style={{ margin: "0", padding: "0" }}>@khodepouria</h3>
                </div>
                </div>
                </div> 
                </div>
            </div>
            
    )
}

export default mountain