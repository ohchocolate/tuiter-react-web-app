import posts from './posts.json';
import PostItem from './post-item';

const PostList = () => {
    return (
        <>
            {posts.map((post)=> (
                <PostItem post={post}/>
            ))}
        </>
    );
};
export default PostList;