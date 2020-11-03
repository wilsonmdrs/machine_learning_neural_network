import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Navigation = () => {
    let location = useLocation()
    
    const onActive = (path) => {
        let current = location.pathname
        if (current === path) {
            return "active"
        }else return ""
    }
    
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