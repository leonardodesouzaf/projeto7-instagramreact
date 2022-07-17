import React from 'react';

export default function Post(props){
    const [nameIcon, setNameIcon] = React.useState("heart-outline");
    const [classIcon, setClassIcon] = React.useState("none");
    function likedOrNot(){
      if(nameIcon === "heart-outline"){
        setNameIcon("heart");
        setClassIcon("liked");
      }
      if(nameIcon === "heart"){
        setNameIcon("heart-outline");
        setClassIcon("none");
      }
    }
    return(
        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.userImage} />
            {props.userName}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.postImage} onClick={() => likedOrNot()} />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div className="flexing">
              <div className={classIcon}><ion-icon name={nameIcon} onClick={() => likedOrNot()}></ion-icon></div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.likeImage} />
            <div className="texto">
              Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.likeNumber} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}