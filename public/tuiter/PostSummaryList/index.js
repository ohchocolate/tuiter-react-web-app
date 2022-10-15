import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts";

const PostSummaryList = () => {
    return (`
    ${posts.map((post) => PostSummaryItem(post)).join('')}
    `);
};
export default PostSummaryList;