import React, {useRef} from "react"
import Carousel from "react-elastic-carousel"

import "./Product.scss"

const breakpoints = [
    {width: 1, itemsToShow:2},
    {width: 550, itemsToShow:4},
    {width: 768, itemsToShow:5},
    {width: 1200, itemsToShow:6},
]
const list = [
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
    {
        icon: <i className="bi bi-heart" id="heart"></i>,
        img : <img src="/Images/list5.png" alt=""/>,
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
    {
        icon: <i className="bi bi-heart" id="heart"></i>,
        img : <img src="/Images/list5.png" alt=""/>,
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


const Carousels = ()=> {
    const ref = useRef();
   

    return(
        <>
            <div className="container-fluid p-0 bg-light" id="recent">
                <div className="site-wrapper">
                    <div className="our-ft-pdts mt-4">
                        <div className="inner-header d-flex mb-4 align-items-center justify-content-between">
                            <h4 className="inner-heading mb-0"> Recently Viewed </h4>
                            {/* <a href="Images/logo.png">View all Products</a>  */}
                        </div>
                        <div className="carousel-component">
                            <Carousel ref={ref} breakPoints={breakpoints} >

                            {list.map((item)=>{return(
                                <item>
                                    <div className="d-flex" id="card-banner">
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
                                       
                                    </div>
                                </item> )})}
                            </Carousel>
                            <div className="text-end mt-2">
                                <button className="btn me-2" onClick={() => ref.current.slidePrev()}>Prev</button>
                                <button className="btn me-4"  onClick={() => ref.current.slideNext()}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousels;