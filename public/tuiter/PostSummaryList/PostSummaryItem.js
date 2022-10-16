const PostSummaryItem = (post) => {
    return (`
    <div class="row wd-frame">
        <div class="col-8">
            <div class="text-secondary">
                ${post.topic}
            </div>
            <div class="fw-bolder wd-tuiter-author">
                ${post.userName}<i class="fas fa-check-circle"></i> -${post.time}
            </div>
            <div class="fw-bolder">
                ${post.title}
            </div>
        </div>
        <div class="col-4">
            <img class="float-end rounded" src="${post.image}" height="100px">
        </div>
    </div>
  `);
};
export default PostSummaryItem;