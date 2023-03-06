import "./SignIn.scss"

const Signin = ()=> {
    return(
        <div className="signin-component">
           
            <div className="container-component">
                <form>
                    <div className="d-flex justify-content-center bg-light">
                        <div className="card-login p-4">
                            <div className="mb-4">
                                <h1>Sign In</h1>
                                <p>Please Enter your details</p>
                            </div>
                            <div className="form-sec">
                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input type="text" className="form-control"  placeholder="Enter email"/>
                            </div>
                            <div className="form-group mb-3" id="password">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password"/>
                                <div className="input-icon">
                                    <i className="bi bi-eye-slash" id="eye-icon"></i>
                                </div>
                            </div>
                            <div className="login-custom d-flex flex-wrap align-items-center justify-content-between mt-4 mb-4">
                                <a href="f-password.html" id="f-pwd">Forgot Password?</a>
                                <a href="index.html" type="button" className="btn btn-primary">Sign In</a>
                            </div>
                            <div className="d-flex align-items-center justify-content-center" >
                                <p className="mb-0">New to Commercenxt? <a href="createaccount.html" id="f-pwd">Start here</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
export default Signin;