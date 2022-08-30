import * as React from "react";
import "./NavBar.css";
import logo from "./turners.png";
import { FaToggleOn, FaFacebook, FaInstagram } from "react-icons/fa";
// import styled from "styled-components";

export default function NavBar() {
    return (
        <nav className="navbar">
            <>
                <div className="nav__logo">
                    <a href="https://www.turners.co.nz/?activetab=carsearch/">
                    <img src={logo} alt="Logo" size="18px" />                    </a>
                </div>

                <ul className="nav__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="/cicd">my CICD</a></li>
                </ul>

                <ul className="nav__icons">
                    <li> <a href="https://www.instagram.com/"><FaInstagram /></a></li>
                    <li> <a href="https://www.twitter.com/"><FaFacebook /> </a></li>
                </ul>


                <a href="#" className="nav__toggleBtn">
                    <FaToggleOn />
                </a>
            </>
        </nav>
    );
}