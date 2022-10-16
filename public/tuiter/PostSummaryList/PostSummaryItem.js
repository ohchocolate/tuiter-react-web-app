const PostSummaryItem = (post) => {
    return (`
    <div class="row wd-frame">
        <div class="col-12 list-group">
            <div class="list-group-item">
                <div><img class="float-end rounded" src="${post.image}" height="100px"></div>
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div class="fw-bolder wd-author">
                    ${post.userName}<i class="fas fa-check-circle"></i> -${post.time}
                </div>
                <div class="fw-bolder">
                    ${post.title}
                </div>
            </div>
        </div>
    </div>
  `);
};
export default PostSummaryItem;