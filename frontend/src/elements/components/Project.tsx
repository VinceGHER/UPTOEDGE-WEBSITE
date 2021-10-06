import React from 'react';
import "./Project.scss";
type Props = {
    className?:string,
    image?: string,
    imageSize?:number,
    title?: string,
    description?: string,
    footer?:string,
    reverse?:boolean,
}

function Project(props:Props) {
  return (
    <div className={"p-0 card shadow bg-body rounded-4"+" "+props.className}>
    <div className="row p-0">
        <div className={"col-md "+(props.reverse ? "order-last":"")}>
        <img src={props.image} className={"card-img-top h-100 rounded-4 "+(props.reverse ? "rounded-start":"rounded-end")} alt="..." style={{objectFit:"contain",width:props.imageSize}}/>
        </div>
        <div className="col-md">
        <div className="card-body h-100 position-relative" >
    
                    <div className="col-12 card-title fw-bold fs-2 mt-xl-5">{props.title}</div>
                    <div className="col-12 card-text fs-5 mb-5">{props.description}</div>
                    <div className="col-12 card-text position-absolute bottom-0  fs-6">
                        <div className="pb-3">
                        <small className="text-muted fs-5">{props.footer}</small>
                        </div>
                       </div> 
                
        </div>
        
        </div>
    </div>
</div>
  );
}

export default Project;
