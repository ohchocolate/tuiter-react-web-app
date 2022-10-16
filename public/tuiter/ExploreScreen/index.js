/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

function exploreComponent() {
    $('#wd-explore').append(`
          <div class="row m-auto">
                    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                        ${NavigationSidebar('Explore')}
                    </div>
                    <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                        ${ExploreComponent()}
                    </div>
                    <div class="col-lg-4 col-xl-4 d-none d-lg-block">
                        ${WhoToFollowList()}
                    </div>
          </div>
   `);
}

$(exploreComponent);