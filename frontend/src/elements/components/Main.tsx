import React from 'react';
import shibi from '../../images/shibi.png';
import {settingContext} from "../../App"
import "./Main.scss"
import SkillCol from './SkillCol';
import Project from './Project';
import logo from './images/logo.png';
import {Link} from 'react-router-dom'
import chat from '../../images/chat.jpg';
import agri from '../../images/agricenter.png';
import junior from '../../images/junior.png';
import foodtraitor from '../../images/foodtraitor1.png'
import FadeIn from '../tools/FadeIn';
const strings = {
    en:{
      titleStart:"Hi, I'm",
      titleMiddle:"Vincent",
      titleEnd:"App developer",
      description:"Designer, Front-end & Back-end",
      hello:"Hello i'm Vincent, Nice to meet you.",
      intro:"I'm student from EPFL passionate by the informatic more especially by the web development and the creation of mobile application.  That's why I created my company of web development Uptoedge.I'm quietly confident, naturally curious, and try always to give the best of myself for each project. ",
      titleProject:"Some Things I've Built",
      descriptionProject:"Here are the last project that I worked on recently. Want to see more?",
      descriptonProjectHighlight:"Contact Me.",
      foodTraitorDescription: " honestly always thought that front end development was more about user experience and responsiveness, less about animations. This video probably changed my mind. I gotta learn more about",
      companie:"I'm proud to have collaborated with these companies",
      titleCall:"Start a project",
      descriptionCall:"Interested in working together? We should queue up a chat.",
      buttonCall:"Let's do this !",

    },
    fr: {
       titleStart:"Salut, je suis",
       titleMiddle:"Vincent",
       titleEnd:"App developpeur",
       description:"Designer, Front-end & Back-end",
       hello:"Bonjour, je m'appelle Vincent, Heureux de te rencontrer.",
       intro:"Je suis un étudiant de l'EPFL passionnée par l'informatique et les nouvelles technologies plus particulièrement par le developpement web et la création d'application mobile. C'est pourquoi je me suis lancé en tant que auto-entrepneur en créant Uptoedge. Pour parler un peu de moi, je suis naturellement curieux, toujours à 100% à fond dans mes projets et essaie toujours de donner le meilleur de moi-même.",
       titleProject:"Quelques projets que j'ai réalisé",
       descriptionProject:"Voici mes derniers projets que j'ai réalisé récémment. Tu veux en savoir plus?",
       descriptonProjectHighlight:"Contacte Moi.",
       foodTraitorDescription: "FoodTraitor est une application de commande de nourriture à la uber-eat mais pour des durées plus longues (plusieurs jours)",
       companie:"Je suis fier d'avoir collaboré avec ces entreprises",
       titleCall:"Commencer un projet",
       descriptionCall:"Intéressé pour travailler ensemble?, nous devrions se contacter.",
       buttonCall:"Allons-y !",

    }
}


type Props = {
    lang2: "en" | "fr"
}
function Main(props:Props) {


  return (
    <div className="container">
        <div className="row">
            <div className="col text-center" id="title">

                {strings[props.lang2].titleStart}
                <span id="hoverTitle">{" "+strings[props.lang2].titleMiddle}</span>
                <div id="titleEnd">
                    {strings[props.lang2].titleEnd}
                </div>
                <div id="descriptionTitle">
                {strings[props.lang2].description}
                </div>

                
            </div>
            <div className="col-12 col-md-4 mt-md-2 text-center text-md-start" id="shibi">
                <img src={shibi} width="300"/>
            </div>
        </div>
        <div className="colorTheme" style={{height:"500px"}}></div>
        <div className="row mt-3 justify-content-center">
            <div id="hello" className="text-center">
                {strings[props.lang2].hello}
            </div>
            <div id="intro" className="text-center">
                {strings[props.lang2].intro}
            </div>
        </div>
        <FadeIn className="row mouseAnimation text-center">
            <SkillCol lang={props.lang2}/>
        </FadeIn>
        <div className="row mt-7 text-center">
            <div className="fs-2 fw-bold">{strings[props.lang2].titleProject}</div>
            <div className="fs-5 mt-2">
                {strings[props.lang2].descriptionProject}
                <Link to={"/contact"} className="text-primary fw-bold" style={{textDecoration:"none"}} href="#">{" "+strings[props.lang2].descriptonProjectHighlight}</Link>
         
            </div>
            <FadeIn>
                <Link to="/foodtraitor" style={{textDecoration:"none",color:"black"}}>
                    <Project 
                        className="mb-6 mt-5 mouseAnimation"
                        image={foodtraitor}
                        imageSize={200}
                        title={"FoodTraitor"}
                        description={strings[props.lang2].foodTraitorDescription}
                        footer={"React-Native Express Redux MongoDB"}
                    />
                </Link>
            </FadeIn>
            <FadeIn>
            <Project 
                className="mb-6 mouseAnimation"
                image={chat}
                title={"FoodTraitor"}
                description={strings[props.lang2].foodTraitorDescription}
                footer={"Next.js Chart js Github API"}
                reverse={true}
            />
            </FadeIn>
        </div>
        <FadeIn className="row gy-5 px-7 px-md-0">
            <div className="col-12 col-md-4">
                <img src={chat} className="card-img-top h-100 rounded-4 shadow mouseAnimation" alt="..." style={{objectFit:"cover"}}/>
            </div>
            <div className="col-12 col-md-4">
                <img src={chat} className="card-img-top h-100 rounded-4 shadow mouseAnimation" alt="..." style={{objectFit:"cover"}}/>
            </div>
            <div className="col-12 col-md-4">
                <img src={chat} className="card-img-top h-100 rounded-4 shadow mouseAnimation" alt="..." style={{objectFit:"cover"}}/>    
            </div>
        </FadeIn>
        <div className="row mt-6 text-center">
            <div className="fs-4 fw-bold">{strings[props.lang2].companie}</div>
        </div>
        <div className="row mt-4 justify-content-center align-items-center">
            <div className="col col-md-2 ">
                <img src={agri} className="card-img-top" alt="..." style={{objectFit:"contain"}} height={80}/>    
            
            </div>
            <div className="col col-md-2 ">
                <img src={junior} className="card-img-top" alt="..." style={{objectFit:"contain"}} height={100}/>    
            
            </div>
        </div>
        <FadeIn className="text-center shadow row mt-6 p-2 pb-4 g-4 bg-action rounded-4 text-secondary align-items-center mouseAnimation">
            <div className="col-12 col-md-4 fw-bold fs-3">
                {strings[props.lang2].titleCall}
            </div>
            <div className="col-12 col-md-5 fs-5">
                {strings[props.lang2].descriptionCall}
            </div>
            <div className="col-12 col-md-3">
          
            <Link to={"/contact"}  className="btn fw-bold fs-4 text-action btn-secondary rounded-4" type="button">
            {strings[props.lang2].buttonCall}
            </Link>
            </div>
        </FadeIn>


    </div>
  );
}

export default Main;
