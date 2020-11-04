import "../css/index.css"
import toGreen from "./module"

document.querySelector("body").innerHTML = "<div class='color'>Hola</div>"
toGreen()

if (module.hot) {
    module.hot.accept("./module.js", () => {
        toGreen()
    })
}
