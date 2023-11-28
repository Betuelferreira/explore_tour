import React from "react";
import "./quem.css"
import Video from "../../src/assets/video.mp4"

function Quem() {
  return (
    <div id="quem-somos" className="container_quem" >
    <div class=" container_quem container px-4 py-5">
      <h2 class="pb-2 border-bottom">Quem somos?</h2>

      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="texto" class=" col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold ">Explore Tour: Desvende Destinos, Viva Experiências Inesquecíveis</h2>
          <p class="">Nossa expertise reside na arte de transformar destinos em narrativas envolventes. Utilizamos estratégias inovadoras de marketing para não apenas promover viagens, mas para criar conexões emocionais. Desde campanhas visuais cativantes até conteúdo autêntico e inspirador, nosso objetivo é transportar você para além das fronteiras, proporcionando uma prévia vívida do que cada lugar tem a oferecer..</p>
          
        </div>

        <div className="video" class="col">
          <video  width="100%" height="400" controls> <source src={Video} type="video/mp4"></source></video>
          
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Quem;