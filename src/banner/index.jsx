import React from "react";
import  banner_ from "../../src/assets/Banner_explore.png"
import "./banner.css"

function Banner(){
    return(
        <div class="container_banner" >
            <div><img src={banner_} alt="" /></div>
            
        </div>
    )
}

export default Banner;