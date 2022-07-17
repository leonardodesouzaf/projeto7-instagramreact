export default function User(props){
    return(
        <div className="usuario">
            <img src={props.imageUrl} />
            <div className="texto">
                <strong>{props.userName}</strong>
                {props.name}
            </div>
        </div>
    )
}