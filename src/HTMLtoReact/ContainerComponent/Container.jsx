import "./Container.scss"

const Container = ()=>{
    return(
        <div>
            <div className="site-wrapper-ut" id="container-btm">
                <div className="utilities d-flex flex-wrap align-items-center justify-content-between">
                    <div className=" d-flex flex-wrap align-items-center" id="flex-icon">
                        <div className="icon me-3">
                            <i className="bi bi-truck" id="icon"></i>
                        </div>
                        <div className="para">
                            <h4>Free Shipping</h4>
                            <p>On all orders</p>
                        </div>
                    </div>
                    <div className=" d-flex flex-wrap align-items-center" id="flex-icon">
                        <div className="icon me-3">
                            <i className="bi bi-check-circle" id="icon"></i>
                        </div>
                        <div className="para">
                            <h4>15 days returns</h4>
                            <p>Moneyback guarantee</p>
                        </div>
                    </div>
                    <div className="wrap d-flex flex-wrap align-items-center" id="flex-icon">
                        <div className="icon me-3">
                            <i className="bi bi-key-fill" id="icon"></i>
                        </div>
                        <div className="para">
                            <h4>Secure payment</h4>
                            <p>Protected by Paypal</p>
                        </div>
                    </div>
                    <div className="wrap d-flex flex-wrap align-items-center" id="flex-icon">
                        <div className="icon me-3">
                            <i className="bi bi-headphones" id="icon"></i>
                        </div>
                        <div className="para">
                            <h4>24/7 Support</h4>
                            <p>Live Support</p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
);
}

export default Container;