import logo from '../../images/logo.png';
import SegmentedControl from './SegmentedControl';
import {Link} from "react-router-dom";

const strings = {
    en:{
      buttonMain:"Say Hi !",
      buttonContact:"Go Back"
    },
    fr:{
      buttonMain: "Discuter !",
      buttonContact:"Retour"
    }
  }
  

type Props = {
    lang:"en"|"fr",
    setLang:Function,
    home: boolean,
}


function Header (props:Props){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
            <Link to="/">
            <img src={logo} alt="logo" width="250"/>
            </Link>
            <Link to={props.home ? "/contact" : "/"} className="ms-auto me-1 me-md-4 px-md-4" href="#">
              <button className="btn btn-mainColor " type="button">
                {props.home ? strings[props.lang].buttonMain : strings[props.lang].buttonContact}
              </button>
            </Link >
            <SegmentedControl _onChange={props.setLang} current={props.lang}/>
        </div>
    </nav>
    );
}

export default Header;