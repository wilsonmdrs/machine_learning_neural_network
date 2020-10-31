import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useHistory, useLocation } from "react-router-dom";

const Navigation = () => {
    let history = useHistory()
    let location = useLocation()
    const [active,setActive] = useState()
    
    const onActive = (path) => {
        let current = location.pathname
        if (current === path) {
            return "active"
        }else return ""
    }
    
    console.log(location)


    return (
        <section id="navigation">
            <div className={"nav-item " + onActive("/home")}>
                <Link to={{ pathname: "/home" }}>
                    Inicio
                </Link>
            </div>
            <div className={"nav-item " + onActive("/features")}>
                <Link to={{ pathname: "/features" }}>
                    Características
                </Link>
            </div>
            <div className={"nav-item " + onActive("/listing")}>
                <Link to={{ pathname: "/listing" }}>
                    Listagem
                </Link>
            </div>
            <div className={"nav-item " + onActive("/classify")}>
                <Link to={{ pathname: "/classify" }}>
                    Classificação
                </Link>
            </div>
        </section>
    )
}

export default withRouter(Navigation)