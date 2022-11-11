import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: "https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_400x400.png",
            userName: "Java",
            handle: "java" }
    }
) => {
    return(
        <div>
        <li className="list-group-item">
            <div className="row d-flex justify-content-between">
                <div className="col-9">
                    <div className="row">
                        <img alt="avatar" src={who.avatarIcon} className="rounded-circle col-3"/>
                            <div className="col">
                                <div className="fw-bolder">
                                    {who.userName}
                                </div>
                                <div>
                                    @{who.handle}
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-3 m-auto">
                    <button className="btn btn-primary btn-block rounded-pill m-auto">
                        Follow
                    </button>
                </div>
            </div>
        </li>
        </div>
    );
};
export default WhoToFollowListItem;