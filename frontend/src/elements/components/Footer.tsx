import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import logoWhite from '../../images/logoWhite.png';
import {Link} from "react-router-dom"
const strings = {
    en:{
        footer:"Handcrafted by me",
    },
    fr:{
        footer:"Codé à la main en ReactJS",
    }
}

type Props = {
    lang:"en"|"fr",
}

function Footer(props:Props) {
    return (
        <div className="container text-center">
            <div id="call" className="colorTheme" style={{height:"300px"}}></div>
            <footer className="row pt-5 g-3 text-secondary align-items-center pb-2">
                <div className="col-12 col-md-4 ">
                    <a href = "mailto: info@uptoedge.com" className="text-secondary"  style={{textDecoration:"none"}}>
                    <MailIcon width={25}/> info@uptoedge.com
                    </a>
                </div>
                <div className="col-12 col-md-4">
                <a href="#root">
                    <img src={logoWhite} alt="logo" width="200"/>
                    </a>
                    <div className="mt-2">{strings[props.lang].footer+" © 2021"}</div>
                </div>
                <div className="col-12 col-md-4">
                    <a href="tel:+33640852879" className="text-secondary"   style={{textDecoration:"none"}}>
                       <PhoneIcon width={25}/> +33 6 40 85 28 79
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer