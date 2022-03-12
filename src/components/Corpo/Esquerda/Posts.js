
import Post from "./Post";

export default function Posts(props) {

    return (
        <div class="posts">

            {
                props.posts.map(post => {
                    return <Post username={post.username} media={post.media} likes={post.likes} />
                })
            }

        </div>

    );
}