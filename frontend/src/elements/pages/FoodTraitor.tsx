import Header from "../components/Header";
import Main from "../components/Main";
import img1 from "../../images/foodtraitor1.png"
import img2 from "../../images/foodtraitor2.png"
import img3 from "../../images/foodtraitor3.png"
import ReactPlayer from 'react-player'
import palette from '../../images/palette.png'
import {Link} from 'react-router-dom'
type Props = {
    lang: "en" |"fr",
    setLang: Function,
}

function FoodTraitor(props:Props){
    return (
        <div>
            <Header lang={props.lang} setLang={props.setLang} home={true}/>
            <div className="container text-start fs-5 ">
                <div className="row mt-5">
                    <h1 className="col fw-bold text-center">FoodTraitor</h1>
                </div>
                <div className="row mt-5 mb-5 gx-5">
                    <div className="col-12 align-self-center col-md-6">
                        <p>FoodTraitor est une application de commande de nourriture à la uber-eat mais pour des durées plus longues (plusieurs jours)
        
                        Le but de ce projet était de se familiariser avec les frameworks react-native et redux.
                        L'application est composée d'un écran de connexion et d'un menu principal contenant 4 écrans:
                        
                        <ul className="mt-3">
                        <li>
                        Le premier pour afficher le menu du restaurant
                        </li>
                        <li>
                        Le second pour afficher le panier en cours,
                        </li> 
                        <li>
                        Le troisième pour afficher les commandes effectuées 
                        </li>
                        <li>
                        Le dernier pour  afficher le profil de l'utilisateur et les paramètres de l'application
                        </li>
                        </ul>
                        Le userflow de l'application (image au centre), est de choisir le plat dans un restaurant, l'ajouter au panier et commander ce panier puis aller le chercher au restaurant le jour indiqué. 
                        </p>
                        Technlogies utilisées pour le front-end
                        <ul>
                            <li>
                                React-native
                            </li>
                            <li>Redux</li>
                        </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="me-2" src={img1} width={200}/>
                            <img className="me-2" src={img2} width={200}/>
                            <img src={img3} width={200}/>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5 gx-5">
                     <div className="col-12">
                        <p>
                            Le Back-end de l'application est hébergé sur Azure Cloud, les infomations sont stockées dans une base de données NOSQL (MongoDB).
                        </p>
                        Technlogies utilisées pour le back-end
                        <ul>
                            <li>
                                Express
                            </li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                   </div>
         
                <div className="row">
                    <div className="col-12 col-md-6">
                        
                    <img src={palette} width={400}/>
                    </div>
                    <div className="col-12 col-md-6 mt-4 align-self-center">
                        
                        <p>Voici la palette de couleur que j'ai choisi avec des tons plutôt pales.
                            Bleu et orange étant des couleurs complémentaires, elles se marient très bien.
                        </p>
                        </div>
                </div>
                <div className="row mt-4 mt-md-5 mb-7 gx-5 justify-content-center text-center">
                    <Link to="/" className="col-4 col-md-3">
                        <button className="btn btn-primary text-secondary rounded-4  px-4 fs-3">Retour</button>
                    </Link>
                    <Link to="/contact" className="col-6  col-md-3">
                        <button className="btn btn-primary text-secondary rounded-4    px-4 fs-3">Me Contacter</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FoodTraitor;