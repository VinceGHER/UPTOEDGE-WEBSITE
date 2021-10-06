import Header from "../components/Header";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { log } from "console";
import { useState } from "react";
import success from "../../images/success.png"
import err from "../../images/error.png"
import { Link, useHistory } from "react-router-dom";
import FadeIn from '../tools/FadeIn';
const url = "http://localhost:3000/sendemail"

const strings = {
    en:{
        nom:"Name",
        email:"Email",
        send: "Send",
        error: "Message not sent",
        messageSent: "Message sent",
        retour: "Getting back to the main page...",
        validName: " Please enter a valid name",
        validAdress: " Please enter a valid email adress",
        
    },
    fr:{
        nom:"Nom",
        email:"Email",
        send: "Envoyer",
        error: "Message non envoyé",
        messageSent: "Message envoyé",
        retour: "En train de retourner sur la page principale",
        validName: "Entrez un nom valide",
        validAdress: "Entrez une adresse email valide",
    }
  }
  


type TypeState = "undefined"|"error"|"send" |"loading"
type Props = {
    lang: "en" |"fr",
    setLang: Function,
}
type Inputs = {
    name:string,
    email: string,
    message: string,
  };
function ContactPage(props:Props){
    const history = useHistory();
  
    let [sendState, setSendState] = useState("undefined"as TypeState);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>(  {mode:"onChange"});
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setSendState("loading")
        let result = await fetch(url,{
            method: "POST",
            body: JSON.stringify({
                name:data.name,
                email:data.email,
                message:data.message,
                lang:props.lang
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        if (result.status == 200){
            setSendState("send")
            setTimeout(() => history.push("/"), 2000);
        } else {
            setSendState("error")
        }
    }

    function errorB(name:string ):string{
        let err = errors[name as keyof Inputs];
        const value = watch(name as keyof Inputs);
        console.log(err)
        console.log(value)
        if (value == "" || value == undefined) return "";
        if (err != undefined) return "is-invalid";
        console.log("valid")
        return "is-valid";
        
    }
    function display(){
        if (sendState == "undefined" as TypeState)
            return (
                <FadeIn>
                    <form className="container mt-6 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                        <div className="mb-3 col-12 col-md-6">
                            <label className="form-label fs-5">{strings[props.lang].nom}</label>           
                            <input {...register("name" ,{ required: true})} className={`form-control ${errorB("name")}`} defaultValue=""  />
                            <div className="invalid-feedback">
                            {strings[props.lang].validName}
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-md-6">
                            <label className="form-label fs-5">{strings[props.lang].email}</label>           
                            <input {...register("email" ,{ required: true, pattern:/^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/i})} className={`form-control ${errorB("email")}`} defaultValue=""  />
                            <div className="invalid-feedback">
                            {strings[props.lang].validAdress}
                            </div>
                        </div>
                        <div className="mb-3 col-12">
                            <label className="form-label fs-5">Message</label>
                            <textarea rows={5} defaultValue="" {...register("message", { required: true })}  className={`form-control ${errorB("message")}`}/>
                        </div>
                        <div className="row text-center">
                            <div className="mb-3">
                                <button className="btn btn-primary text-secondary rounded-4 px-5 fs-4" type="submit">{strings[props.lang].send}</button>
                            </div>
                        </div>

                        </div>
                    
                    </form>
                </FadeIn>
            );
        if (sendState == "send")
            return (
                <FadeIn className="text-center py-8 ">
                    <img src={success} alt="success" width="100"/>
                    <div className="fs-3 mt-2 fw-bold">{strings[props.lang].messageSent}</div>
                    <div className="fs-5 mt-2 fw-bold">{strings[props.lang].retour}</div>
                </FadeIn>
            );
        if (sendState == "error")
            return (
                <FadeIn className="text-center py-8 ">
                    <img src={err} alt="error" width="100"/>
                    <div className="fs-2 mt-2 fw-bold">{strings[props.lang].error}</div>
                </FadeIn>
            );
        if (sendState == "loading")
            return (
                <FadeIn className="text-center py-8 ">
                    <div className="spinner-border text-primary" role="status" style={{width: "5rem", height: "5rem"}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
             </FadeIn>
            );
    }
    return (
        <div className="bg-secondary">
            <Header lang={props.lang} setLang={props.setLang} home={false}/>
            {display()}
        </div>
    );
}

export default ContactPage;