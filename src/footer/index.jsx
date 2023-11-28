import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import "./footer.css"

function Footer() {
    return (
        <div id="contato" className="container_footer">
            <div class="  container px-4 py-5" id="hanging-icons">
                <h2 class="pb-2 border-bottom">Contatos</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="col d-flex align-items-start">
                        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-3 flex-shrink-0 me-3">
                            <FaWhatsapp className="ico" />
                        </div>
                        <div>
                            <h3 class="fs-2 ">Whatsapp</h3>
                            <p>Entre em contato conosco pelo WhatsApp. Nosso atendimento está disponível durante o horário comercial.</p>
                            <a href="#" class="btn btn-primary">
                                Entre em contato
                            </a>
                        </div>
                    </div>
                    <div class="col d-flex align-items-start">
                        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-3 flex-shrink-0 me-3">
                            <FaInstagram className="ico" />
                        </div>
                        <div>
                            <h3 class="fs-2 ">Instagram</h3>
                            <p>Também estamos disponíveis no Instagram entre em contato conosco por meio do Direct, onde estaremos prontos para atender às suas perguntas.</p>
                            <a href="https://www.instagram.com/exploretourmcz/" class="btn btn-primary">
                                Entre em contato
                            </a>
                        </div>
                    </div>
                    <div class="col d-flex align-items-start">
                        <div class=" text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-3 flex-shrink-0 me-3">
                            <MdOutlineEmail className="ico" />
                        </div>
                        <div>
                            <h3 class="fs-2">Email</h3>
                            <p>Além disso, disponibilizamos o nosso endereço de e-mail como uma alternativa adicional para facilitar o contato. </p>
                            <a href="mailto:exploretourmcz@gmail.com" class="btn btn-primary">
                                Entre em contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;