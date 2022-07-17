import Story from "./Story";
import Post from "./Post";

export default function Principal(){
    const storyData = [{url:"./img/9gag.svg",user:"9gag"},{url:"./img/meowed.svg",user:"meowed"},{url:"./img/barked.svg",user:"barked"},{url:"./img/nathanwpylestrangeplanet.svg",user:"nathanwpylestrangeplanet"},{url:"./img/wawawicomics.svg",user:"wawawicomics"},{url:"./img/respondeai.svg",user:"respondeai"},{url:"./img/filomoderna.svg",user:"filomoderna"},{url:"./img/memeriagourmet.svg",user:"memeriagourmet"}];
    let storyProps = storyData.map(story => <Story url={story.url} user={story.user}/>);
    const postData = [{userName:"meowed", userImage:"./img/meowed.svg", postImage:"./img/gato-telefone.svg", likeImage:"./img/respondeai.svg", likeUser:"respondeai", likeNumber:"101.523"},{userName:"barked", userImage:"./img/barked.svg", postImage:"./img/dog.svg", likeImage:"./img/adorable_animals.svg", likeUser:"adorable_animals", likeNumber:"99.159"}];
    let postProps = postData.map(post => <Post userName={post.userName} userImage={post.userImage} postImage={post.postImage} likeImage={post.likeImage} likeUser={post.likeUser} likeNumber={post.likeNumber}/>);
    return(
        <div className="esquerda">
            <div className="stories">
                {storyProps}
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
            <div className="posts">
                {postProps}
            </div>
        </div>
    )
}