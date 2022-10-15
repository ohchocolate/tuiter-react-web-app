const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row d-flex justify-content-between">
            <div class="col-9">
                <div class="row">
                    <img src="https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_400x400.png" class="rounded-circle col-3">
                    <div class="col">
                        <div class="fw-bolder">
                            Java <i class="fas fa-check-circle"></i>
                        </div>
                        <div>
                            @Java
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 m-auto">
                <button class="btn btn-primary btn-block rounded-pill mx-auto">
                    Follow
                </button>
            </div>
        </div>
    </li>       
`);
}
export default WhoToFollowListItem;
