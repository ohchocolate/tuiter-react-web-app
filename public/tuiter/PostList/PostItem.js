import PictureSummary from "./PictureSummary.js";
const PostItem = (post) => {
    return(`
          <div class="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
            <div class="col-1 justify-content-center">
                <div><img class="rounded-circle wd-avatar" src="${post.icon}" height="100px"></div>
            </div>
        
            <div class="col-11 row ms-2">
                <!--text post-->
                <div class="col-11 mb-2">
                    <p>
                    <!--Nbsp stands for non-breaking space, meaning that strings separated with this entity 
                    will not be separated and put into separate lines.-->
                        <span class="wd-author">${post.userName}&nbsp;
                        <i class="fas fa-check-circle"></i></span>&nbsp;
                        @${post.handle}&nbsp;•&nbsp;${post.time}
                    </p>
                    <div class="wd-content">${post.content}</div>
                </div>
                <div class="col-1">
                    <a>...</a>
                </div>
                
                <!--picture and text-->
                ${PictureSummary(post)}
                
                <!--post icons-->
                <div class="col-12 d-flex m-auto justify-content-between">
                        <a>
                            <span class="wd-tuit-time">
                            <i class="far fa-comment fa-flip-horizontal"></i>
                            </span>${post.comment_count}
                        </a>
                        <a>
                            <span><i class="fas fa-retweet"></i></span>
                            ${post.retweet_count}</a>
                        <a>
                            <span><i class="fas fa-heart"></i></span> 
                            ${post.like_count}</a>
                        <a>
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                </div>     
            </div>     
        </div>  
        <hr>
    `);
};
export default PostItem;