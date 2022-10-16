const PictureSummary = (post) => {
    // if there is no title in the post
    // === strictly equal
    if (post.title === undefined) {
        return (`
        <div class="col-12">
                <div class="wd-border-thin wd-rounded-corners-all-around">
                    <img class="img-fluid wd-rounded-corners-all-around" src="${post.image}"/>
                </div>
        </div>
        `)
    }
}