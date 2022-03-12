import Story from "./Story";


export default function Stories(props) {

    console.log("STORIES, BORA");
    console.log(props);

    const storiesLista = props.stories.map(story => {
        return <Story username={story} />
    })

    return (
        <div class="stories">
            {props.stories.map(story => {
                return <Story username={story} />
            })}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
}