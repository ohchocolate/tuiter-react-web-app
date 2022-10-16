/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
          <div class="row m-auto">
                    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                        ${NavigationSidebar('Explore')}
                    </div>
                    <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                        ${PostList()}
                    </div>
                    <div class="col-lg-4 col-xl-4 d-none d-lg-block">
                        ${PostSummaryList()}
                    </div>
          </div>
   `);
}

$(exploreComponent);