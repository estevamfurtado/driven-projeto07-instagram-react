import Stories from './Esquerda/Stories';
import Posts from './Esquerda/Posts';

export default function Esquerda(props) {
    return (
        <div class="esquerda">

            <Stories stories={props.stories}/>
            <Posts posts={props.posts}/>

        </div>)
}