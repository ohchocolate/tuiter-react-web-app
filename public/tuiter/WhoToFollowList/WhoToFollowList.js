import WhoToFollowListItem from "./WhoToFollowListItem";
import who from './who.js';

const WhoToFollowList = () => {
    return (`
    <ul class="list-group d-none d-sm-none d-md-none d-lg-inline-block">
        <li class="list-group-item fw-bolder">Who to follow</li>
        ${who.map((item) => WhoToFollowListItem(item)).join('')}
                
    `);
};
export default WhoToFollowList;