import React from "react";
import "./missao.css"
import { FaTasks } from "react-icons/fa";
import { LuArrowUpNarrowWide } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa6";



function Misao() {
    return (


        <div id="container_car" className=" container_card">
            <div class="container"><h2 class="pb-2 border-bottom">Nossos objetivos</h2></div>
            <div className="alinhas_missao">
                <div class=" container p-auto row g-4 py-5 row-cols-1 row-cols-lg-3">

                    <div class="feature col cards ">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <FaTasks />
                        </div>
                        <h3 class="fs-2  ">Missão</h3>
                        <p>Encantar e inspirar viajantes com experiências únicas, conectando destinos incríveis através de soluções inovadoras em marketing de turismo, proporcionando momentos transformadores.</p>

                    </div>
                    <div class="feature col cards">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                            <LuArrowUpNarrowWide />
                        </div>
                        <h3 class="fs-2 ">Visão</h3>
                        <p>Buscamos ser a principal referência em marketing de turismo, destacando-nos pela autenticidade ao captar a essência de cada destino. Lideramos na criação de campanhas que contam histórias, despertam emoções e elevam o padrão da indústria do turismo.</p>

                    </div>
                    <div class="feature col cards">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <FaHandHoldingHeart />
                        </div>
                        <h3 class="fs-2 ">Valores</h3>
                        <p>Autenticidade: Comprometemo-nos a retratar destinos de maneira verdadeira e genuína, respeitando e celebrando a diversidade cultural de cada lugar.

                            Inovação: Buscamos constantemente novas formas criativas de apresentar e promover destinos, adotando tecnologias e estratégias de marketing de última geração.</p>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Misao;