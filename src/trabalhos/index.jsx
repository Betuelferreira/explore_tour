import React from "react";
import Praia from "../../src/assets/praia1.jpeg"
import Ipioca from "../../src/assets/Ipioca.png"
import Pratagy from "../../src/assets/pratagy.png"
import Garunhuns from "../../src/assets/garanhuns.png"
import "./trabalhos.css"


function Trabalhos() {
    return (
        <div id="trabalho" className="container_trabalhos">
             <div class="container"><h2 class="pb-2 border-bottom">Alguns trabalhos</h2></div>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class=" container carousel-inner">
                <div class="carousel-item active">
                    <img src={Praia} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Praia de Paripueira</h5>
                        <p>Paripueira é uma praia longa, com areia fina, mar claro, barracas de praia, coqueiros e muitos barquinhos de pescadores. </p>
                    </div>
                </div>
               
                <div class="carousel-item">
                    <img src={Pratagy} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Pratagy Premium Class</h5>
                        <p>Essa é a parte Premium do hotel Pratagy com uma linda vista para o mar</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Garunhuns} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Vinícola Vale das Colinas</h5>
                        <p>Vinícola Vale das Colinas localizada em Garanhuns com belas vistas.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        )
}
export default Trabalhos;