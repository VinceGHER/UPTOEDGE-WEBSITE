import React from 'react';
import { PencilAltIcon, CodeIcon, DatabaseIcon } from '@heroicons/react/solid'
import "./SkillCol.scss";

const strings = {
  en:{
    col:[
      {
        title:"Design",
        description:"I value simple content structure, clean design patterns, and thoughtful interactions.",
        title2:"Things I liked designed",
        description2:"UX,  UI, Website, Mobile app.",
        title3:"My favorite tools",
        description3:"Pinterest, Framer, photoshop, illustator",
      },
      {
        title:"Front-End Developper",
        description:"I like to code every idea that I have in mind and make them real in the browser.",
        title2:"Languages I speak",
        description2:"HTML, CSS, JavaScript, Typescript, C++, Python",
        title3:"Technologies I know",
        description3:"Boostrap, React, React Native",
      },
      {
        title:"Back-End Developper",
        description:"The back-end is for me an important things that everyone should never overlook.",
        title2:"Languages I speak",
        description2:"JavaScript, Typescript, C++, Python",
        title3:"Technologies I know",
        description3:"NodeJS, Express, MongoDB",
      }
    ]

  },
  fr: {
    col:[
      {
        title:"Design",
        description:"J'apprécie avoir une structure de contenu simple, des modèles de conception épurés et des interactions réfléchies.",
        title2:"Choses que j'aime designer",
        description2:"UX,  UI, Website, Application Mobile.",
        title3:"Mes outils favories",
        description3:"Pinterest, Framer, photoshop, illustator",
      },
      {
        title:"Front-End Developper",
        description:"J'aime coder toutes les idées que j'ai en tête et les concrétiser dans le navigateur.",
        title2:"Langages que je parle",
        description2:"HTML, CSS, JavaScript, Typescript, C++, Python",
        title3:"Technologies que je connais",
        description3:"Boostrap, React, React Native",
      },
      {
        title:"Back-End Developper",
        description:"Le back-end est pour moi une chose importante que tout le monde ne devrait jamais négliger.",
        title2:"Langages que je parle",
        description2:"JavaScript, Typescript, C++, Python",
        title3:"Technologies que je connais",
        description3:"NodeJS, Express, MongoDB",
      }
    ]
  }
};



type Props = {
  lang: "en" | "fr"
}
function generateCol(index:number,lang:"en"|"fr"){
  return (
    <div className="container">
      <div className="row">
        <div className="mt-4 fw-bold fs-4">{strings[lang].col[index].title}</div>
        <div className="mt-1 fs-6">{strings[lang].col[index].description}</div>  
      </div>
    <div className="row">
      <div className="mt-5 fw-bold fs-5">{strings[lang].col[index].title2}</div>
      <div className="mt-1 fs-6">{strings[lang].col[index].description2}</div>  
    </div>
    <div className="row">
      <div className="mt-5 fw-bold fs-5">{strings[lang].col[index].title3}</div>
      <div className="mt-1 fs-6">{strings[lang].col[index].description3}</div>  
    </div>
    
    </div>
  );

}

function SkillCol(props:Props) {
  return (
    <div className="container rounded-4 mt-5 bg-secondary shadow p-3 pb-5 bg-body rounded">
      <div className="row mt-3">
        <div className="col-12 col-md-4  mb-6 mb-md-0">
          <PencilAltIcon className="icon text-primary"/> 
          {generateCol(0, props.lang)}
        </div>
        <div className="col-12 col-md-4  mb-6 mb-md-0">
          <CodeIcon className="icon text-primary"/> 
          {generateCol(1, props.lang)}
        </div>
        <div className="col-12 col-md-4">
          <DatabaseIcon className="icon text-primary"/> 
          {generateCol(2, props.lang)}
        </div>
      </div>

    </div>
  );
}

export default SkillCol;
