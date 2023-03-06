import "./MyAccount.scss"

const MyAccount = ()=>{
    
    return(
      <>
        <div className="dropdown" id="account">
          <button type="button" className="dropdown-toggle" id='signin-btn' data-bs-toggle="dropdown" aria-expanded="false">
            <p>Hello, Sign In</p>
            My Account
          </button>
          <div className="dropdown-menu mt-3">
              <a href="profile.html" className="dropdown-item" type="button">
                <span><i className="bi bi-person"></i></span>My Profile
              </a>
              <a href="cart.html" className="dropdown-item" type="button"> 
                <span><i className="bi bi-bag-fill"></i></span>My Cart
              </a>
              <a href="wishlist.html" className="dropdown-item" type="button"> 
                <span><i className="bi bi-heart"></i></span>My Wishlist
              </a>
              <a href="orders.html" className="dropdown-item" type="button"> 
                <span><i className="bi bi-box2-fill"></i></span>My Orders
              </a>
              <a href="reviews.html" className="dropdown-item" type="button"> 
                <span><i  className="bi bi-star-fill"></i></span>My Reviews
              </a>
              <a href="compare.html" className="dropdown-item" type="button"> 
                <span><i className="bi bi-square-half"></i></span>Compare
              </a>
              <a href="login.html" className="dropdown-item" type="button"> 
                <span><i className="bi bi-power"></i></span>Logout
              </a>          
          </div>
        </div>    
      </>
        
    );
}

export default MyAccount;