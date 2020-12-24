import React, { useEffect } from 'react'
import "./Loader.scss";
function Loader() {
    useEffect(()=>{
        let body = document.querySelector('body');
        body.style.maxHeight = "100vh";
        body.style.overflow = "hidden";
        return () => {
            let body = document.querySelector('body');
            body.style.maxHeight = "unset";
            body.style.overflow = "visible";
        }
    },[])
    return (
        <div className="loader-page-container">
            <div className="blur-background"><div className="loader"></div></div>
        </div>
    )
}

export default Loader
