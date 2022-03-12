import ReactDOM from 'react-dom';
import App from './components/App';


const data = {
    usuario: {
        name: "Catana",
        username: "catanacomics",
    },
    posts: [
        {username: "meowed", media: {type:"img", file: "gato-telefone.svg"}, likes: {totalLikes: 101523, highlightedUsername: "respondeai"}},
        {username: "barked", media: {type: "img", file: "dog.svg"}, likes: {totalLikes: 99159, highlightedUsername: "adorable_animals"}},
        {username: "barked", media: {type: "video", file: "video"}, likes: {totalLikes: 99159, highlightedUsername: "adorable_animals"}}
    ],
    stories: ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"],
    sugestoes: [
        {username: "bad.vibes.memes", isFollowingYou: true},
        {username: "chibirdart", isFollowingYou: true},
        {username: "razoesparaacreditar", isFollowingYou: false},
        {username: "adorable_animals", isFollowingYou: true},
        {username: "smallcutecats", isFollowingYou: true}
    ],
}



ReactDOM.render(
    <App data={data}/>,
    document.querySelector(".root")
)