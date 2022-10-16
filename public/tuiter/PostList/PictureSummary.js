//The first example has a picture following with a summary
const PictureSummary = (post) => {
    // if there is no title in the post
    // === strictly equal
    if (post.title == undefined) {
        return (`
        <!-- a big picture -->
        <div class="col-12">
                <div class="wd-border-thin wd-rounded-corners-all-around">
                    <img class="img-fluid wd-rounded-corners-all-around" src="${post.image}"/>
                </div>
        </div>
        `);
    }
    else {
        return (`
        <!-- a big picture -->
        <div class="col-12">
            <div class="wd-border-thin wd-rounded-corners-top">
                <img class="img-fluid wd-rounded-corners-all-around" src="${post.image}"/>
            </div>
        </div>
        <!-- a text summary -->
        <div class="col-12">
            <div class="wd-tuit-border wd-rounded-corners-bottom p-3">
                <div class="wd-author">${post.title}</div>
                <span>${post.summary}</span>
                <span>
                    <i class="fas fa-link fa-xs"></i>${post.link}
                </span>
            </div>
        </div>
        `);
    }
};
export default PictureSummary;