import Suggestion from "./Suggestion";
import User from "./User";

export default function Sidebar(){
    const userData = [{imageUrl:"./img/catanacomics.svg", userName:"catanacomics", name:"Catana"}];
    let userProps = userData.map(user => <User imageUrl={user.imageUrl} userName={user.userName} name={user.name}/>);
    const suggestionData = [{userImage:"./img/bad.vibes.memes.svg", userName:"bad.vibes.memes", message:"Segue você"},{userImage:"./img/chibirdart.svg", userName:"chibirdart", message:"Segue você"},{userImage:"./img/razoesparaacreditar.svg", userName:"razoesparaacreditar", message:"Novo no Instagram"},{userImage:"./img/adorable_animals.svg", userName:"adorable_animals", message:"Segue você"},{userImage:"./img/smallcutecats.svg", userName:"smallcutecats", message:"Segue você"}];
    let suggestionProps = suggestionData.map(suggestion => <Suggestion userImage={suggestion.userImage} userName={suggestion.userName} message={suggestion.message}/>);
    return(
        <div className="sidebar">
            {userProps}
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {suggestionProps}
            </div>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}