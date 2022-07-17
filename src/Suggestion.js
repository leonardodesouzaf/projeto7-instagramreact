export default function Suggestion(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userImage} />
                <div className="texto">
                    <div className="nome">{props.userName}</div>
                    <div className="razao">{props.message}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}