const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row d-flex justify-content-between">
            <div class="col-9">
                <div class="row">
                    <img src="${who.avatarIcon}" class="rounded-circle col-3">
                    <div class="col">
                        <div class="fw-bolder">
                            ${who.userName} <i class="fas fa-check-circle"></i>
                        </div>
                        <div>
                            @${who.handle}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 m-auto">
                <button class="btn btn-primary btn-block rounded-pill m-auto">
                    Follow
                </button>
            </div>
        </div>
    </li>       
`);
}
export default WhoToFollowListItem;
