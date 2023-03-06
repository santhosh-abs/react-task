import Carousels from "./Carousel"

import "./Product.scss"

const card = [
    {
        icon: <i className="bi bi-heart" id="heart"></i>,
        img : <img src="/Images/list1.png" alt=""/>,
        h4:"Full Sleeve Solid Men Jack",
        h5:"€4300",
        h3:"€2388",
        rating: [<i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill"></i>,
                <i className="bi bi-star-fill"></i>
            ],
        button:<i className="bi bi-bag-fill" id="bag"></i>
    },
    {
        icon: <i className="bi bi-heart" id="heart"></i>,
        img : <img src="/Images/list2.png" alt=""/>,
        h4:"Full Sleeve Solid Men Jack",
        h5:"€4300",
        h3:"€2388",
        rating: [<i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill"></i>,
                <i className="bi bi-star-fill"></i>
            ],
        button:<i className="bi bi-bag-fill" id="bag"></i>
    },
    {
        icon: <i className="bi bi-heart" id="heart"></i>,
        img : <img src="/Images/list3.png" alt=""/>,
        h4:"Full Sleeve Solid Men Jack",
        h5:"€4300",
        h3:"€2388",
        rating: [<i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill"></i>,
                <i className="bi bi-star-fill"></i>
            ],
        button:<i className="bi bi-bag-fill" id="bag"></i>
    },
    {
        icon: <i className="bi bi-heart" id="heart"></i>,
        img : <img src="/Images/list4.png" alt=""/>,
        h4:"Full Sleeve Solid Men Jack",
        h5:"€4300",
        h3:"€2388",
        rating: [<i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill ic-active" id="star-fill"></i>,
                <i className="bi bi-star-fill"></i>,
                <i className="bi bi-star-fill"></i>
            ],
        button:<i className="bi bi-bag-fill" id="bag"></i>
    },
]

const Product = ()=> {
    return(
        <>
          
            <div>
                <div className="product-view">
                        <div className="banner-section shop">
                            <img src="/Images/list-banner.png" alt="banner"/>
                            <div className="content">
                                <h1>Shop</h1>
                                <p>DeWalt Power Detect Technology Marks the Brand's <br/> Entry in Advanced 20V Max Tools</p>
                            </div>
                        </div>
                        <div className="site-wrapper">
                            <div className="row mt-4">
                                <div className="col-lg-3 custom-pdd" id="categories-list">
                                <div className="inner">
                                    <div className="inner-header">
                                        <h4 className="card-heading mb-2"> Categories </h4>                       
                                    </div>
                                <div className="card list" id="check-box">
                                    <div className="option-wraper p-4">
                                        <ul>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 1</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 2</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 3</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 4</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 5</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 6</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="inner">
                                    <div className="inner-header">
                                        <h4 className="card-heading mt-3 mb-2"> Categories </h4>                       
                                    </div>
                                    <div className="card list p-4" id="check-box"></div>
                                </div>
                                <div className="inner">
                                    <div className="inner-header">
                                        <h4 className="card-heading mt-3 mb-2"> Filter By Brand </h4>                       
                                    </div>
                                <div className="card list"  id="check-box">
                                    
                                    <div className="option-wraper p-4">
                                        <ul>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 1</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 2</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 3</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 4</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 5</li>
                                            <li><input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>Category Option 6</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="list-content">
                                        <div className="list-header d-flex justify-content-between align-items-center mb-4">
                                            <div className="left">
                                                <nav aria-label="breadcrumb">
                                                    <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">Home</li>
                                                    <li className="breadcrumb-item" aria-current="page">Shop</li>
                                                    <li className="breadcrumb-item active" aria-current="page">Syringes & Needles</li>
                                                    </ol>
                                                </nav>
                                                <h4 className="list-heading"> Our Featured Products </h4> 
                                            </div>
                                            <div className="right d-flex" id="sort-btn">
                                                <div className="btn-group d-flex me-2">
                                                    <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Sort By
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="/logo.png">Newest</a></li>
                                                    <li><a className="dropdown-item" href="/list-banner.png">Oldest</a></li>
                                                    <li><a className="dropdown-item" href="/list-banner.png">Relevance</a></li>
                                                    </ul>
                                                </div>
                                                <button type="button" className="btn btn-light me-2"><i className="bi bi-grid ic-active"></i></button>
                                                <button type="button" className="btn btn-light"><i className="bi bi-list ic-active"></i></button>
                                            </div>
                                        </div>
                                        <div className="card-item">
                                            <div className="col-lg-3">
                                                <div className="d-flex" id="card-banner">
                                                    {card.map((item)=>{return(
                                                    <div className="card list p-2 me-4" id="card-list">
                                                        <div className="wishlist">
                                                            {item.icon}
                                                        </div>
                                                        <div className="list-img-wrapper d-flex justify-content-center pt-3 pb-3">
                                                            {item.img}
                                                        </div>
                                                        <div className="list-details pt-1 pb-1">
                                                            <h4>{item.h4}</h4>
                                                            <div className="list-footer d-flex justify-content-between align-center">
                                                                <div className="price-wrapper ">
                                                                    <div className="content d-flex align-items-baseline">
                                                                        <h5><strike>{item.h5}</strike></h5>
                                                                        <h3>{item.h3}</h3>
                                                                    </div>
                                                                    <div className="ratings">
                                                                        {item.rating}
                                                                    </div>
                                                                </div>
                                                                <button type="button" className="btn">{item.button}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )})}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination d-flex justify-content-between mt-4 align-center">
                                            <p>Showing 1-12 of 18 results</p>
                                            <div className="right">
                                                <button type="button" className="btn btn-light me-2" id="icon-btn">
                                                    <i className="bi bi-chevron-left"></i>
                                                </button>
                                                <button type="button" className="btn btn-light" id="icon-btn">
                                                    <i className="bi bi-chevron-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <Carousels/>
                </div>
            </div>
        </>
    );
}

export default Product;
