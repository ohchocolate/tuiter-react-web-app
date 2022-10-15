import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <!--search-->
            <div class="position-relative">
                <i class="fas fa-search fa-2x position-absolute m-1" style="color: lightgray"></i>
                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter">
            </div>
            <div class="col-2">
                <i class="fas fa-cog fa-2x" style="color:#0d6efd"></i>
            </div>
            
            <!--nav-tab-->
            <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <!-- for-you.html-->
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <!-- trending.html-->
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <!-- news.html-->
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-block d-lg-block">
                    <!-- sports.html-->
                    <a class="nav-link" href="#" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-none d-xl-inline-block">
                    <!-- entertainment.html-->
                    <a class="nav-link" href="#" tabindex="-1">
                        <span class="d-none d-sm-none d-md-none d-xl-inline-block">Entertainment</span>
                    </a>
                </li>
            </ul>
            
            <!--middle content picture-->
            <div class="position-relative">
                <img src="https://s.hdnux.com/photos/01/23/33/15/21869409/4/rawImage.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>
            ${PostSummaryList()}
    `);

}
export default ExploreComponent;
