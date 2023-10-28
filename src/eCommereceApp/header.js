import React from "react";

  export default function Header() {
    return(
        <header className="bg-dark py-3" id="header">
        <div className="container px-4 px-lg-5 my-5">
        <img width="165" height="170" alt="iphone" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBkEpqrEOdjGakwRl1Qy09F8931c-5z97qQ&usqp=CAU"/>
            <div className="text-center text-white">
            <h1 class="rs-shop-header">Shop iPhones in</h1>
                <h1 className="display-4 fw-bolder">iMobiles</h1>
                <div className="rs-shop-subheader">Make every day an iPhone day</div>
            </div>
        </div>
    </header>
    )
}