import React from "react"
import image from "../../images/platzi.png"

import "../../sass/sass.scss"
import "../../less/less.less"
import "../../stylus/stylus.styl"

function App(props) {
    return <div>
        <img src={image} alt="Logo de Platzi" style={{width: "300px"}}/>
        <div className="sass">Sass</div>
        <div className="less">Less</div>
        <div className="stylus">Stylus</div>
        <div className="post-css">PostCSS</div>
    </div>
}

export default App
