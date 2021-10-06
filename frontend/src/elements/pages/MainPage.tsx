import Header from "../components/Header";
import Main from "../components/Main";

type Props = {
    lang: "en" |"fr",
    setLang: Function,
}

function MainPage(props:Props){
    return (
        <div>
            <Header lang={props.lang} setLang={props.setLang} home={true}/>
            <Main lang2={props.lang}/>
        </div>
    );
}

export default MainPage;