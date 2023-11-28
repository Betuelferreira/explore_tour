import React from "react";
import "./header.css"
import logo from "../../src/assets/logo_branca.png"
import Misao from "../missao";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            
            <div class="container ">
                <a class="navbar-brand" href=""><img src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
               
                <div class="collapse navbar-collapse alinhar" id="navbarSupportedContent">

                    <ul class="navbar-nav ">
                        
                    <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#container_car">Objetivos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#quem-somos">Quem Somos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#trabalho">Trabalhos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contato">Contatos</a>
                        </li>
    
                    
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;