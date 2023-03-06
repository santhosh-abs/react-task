import "./MyCart.scss"

const MyCart = ()=>{
    
    return(
        <div>
            <div className="icon-wrapper d-flex flex-wrap align-items-center">
                <div>
                    <div className="notification ">
                      <i className="bi bi-bag-fill"></i>
                      <span className="badge">01</span>
                    </div>
                </div>
                <div className="dropdown">
                  <button className="dropdown-toggle" id='cart-btn' data-bs-toggle="dropdown" aria-expanded="false">
                    <p>My Cart </p>€ 23.880
                  </button>
                  <div className="dropdown-menu mt-3">
                      <button className="dropdown-item" type="button">list 1</button>
                      <button className="dropdown-item" type="button">list 2</button>
                      <button className="dropdown-item" type="button">list 3</button>
                  </div>
                </div>
            </div>                          
        </div>   
    );
}

export default MyCart;