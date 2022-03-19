import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../components/Home/Home";

export default function HomePage(props) {
    return (
        <div className="page">
            <NavBar/>
            <Home/>

        </div>
    )
}