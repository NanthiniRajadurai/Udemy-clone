function Navbar(){
    return(
        <div class="navbar">
            <div class="navbar__s1">
                <h1 class="navbar__s1__title">Udemy</h1>
            </div>
            <div class="navbar__s2">
                <i class="fa-solid fa-magnifying-glass" style="color: rgb(0, 0, 0);"></i>
                <input placeholder="Search for anything here. Tech, Business, Art...." />
            </div>
            <div class="navbar__s3">
                <p>Courses</p>
                <div class="myLearning">
                    <p>My Learning</p>
                    <div class="myLearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i class="fa-solid fa-cart-shopping" style="color: rgb(0, 0, 0);"></i>
                <i class="fa-solid fa-bell" style="color: rgb(0, 0, 0);"></i>
                <i class="fa-solid fa-user" style="color: rgb(0, 0, 0);"></i>
            </div>
            <div class="navbar__s4">
                <i class="fa-duotone fa-solid fa-bars"
                    style="--fa-primary-color: rgb(0, 0, 0); --fa-secondary-color: rgb(0, 0, 0);"></i>
            </div>
        </div>
    );
}

export default Navbar;