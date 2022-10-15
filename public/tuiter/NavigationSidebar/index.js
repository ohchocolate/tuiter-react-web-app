const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html"
                   class="list-group-item list-group-item-action
                   ${active === 'Home' ? 'active' : ''}">
                    <i class="fa fa-home"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">Home</span>
                </a>
                <a href="../explore/index.html"
                   class="list-group-item list-group-item-action 
                   ${active === 'Explore' ? 'active' : ''}">
                   <i class="fa fa-hashtag"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">Explore</span>
                </a>
                <a href="../notification.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">Notifications</span>
                </a>
                <a
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">Messages</span>
                </a>
                <a href="public/tuiter/bookmarks/index.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">Bookmarks</span>
                </a>
                <a
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">List</span>
                </a>
                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">Profile</span>
                </a>
                <a
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-dot-circle"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">More</span>
                </a>
            </div>
            <button id="tuit-button" class="btn btn-primary w-100 mt-1 rounded-pill">
                Tuit
            </button>
 `);
}
export default NavigationSidebar;

