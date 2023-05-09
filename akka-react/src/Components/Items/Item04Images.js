import './Item04Images.css';
import gpt34 from '../../assets/images/gpt34.png'
// Pour les SVG seulement, on peut les "transformer" en component avec ceci (TOUJOURS EN PascalCase !):
import {ReactComponent as DotNet} from '../../assets/images/dotNet.svg'

function Item04Images (){

    return(
        <div className="Item04Images">
            <h3>Voici un test d'upload d'images:</h3>
            <img src={"https://i.ytimg.com/vi/bnWpTxA5zyg/maxresdefault.jpg"} alt="" />
            <figcaption>Une image via un lien internet, le classique : un lien URL dans le "src" de la balise "img"</figcaption>
            <br /><br /><br />
            <img src={gpt34} alt="" />
            <figcaption>Une image via un component "Item04images.js", avec un "import xxx from xxx"</figcaption>
            <br /><br /><br />
            <DotNet />
            <figcaption>Une image SVG via un "import ReactComponent as DotNet from 'xxx'", et en l'utilisant en component "DotNet /" dans la div</figcaption>
            <br /><br /><br />
        </div>
    );

}

export default Item04Images;
