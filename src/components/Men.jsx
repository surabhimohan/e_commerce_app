import React from 'react';

export default function Men() {
    return (
        <div className='w3-card w3-row w3-padding'>
            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Topwear</a></h6>
                {
                    topwear.map((each, index) => {
                        return (<div> <h6><a className='w3-small text-decoration-none w3-text-black ' href="#">{each}</a><br /></h6> </div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Festivewear</a></h6>
                {
                    festwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Bottomwear</a> </h6>
                {
                    botmwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Innerwear</a></h6>
                {
                    innerwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Plus Size</a></h6>
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Footwear</a></h6>
                {
                    footwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Personal Care & Grooming</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Sunglasses & Frames</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Watches</a></h6>
                
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Sports & Active Wear</a></h6>
                {
                    sportswear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Gadgets</a></h6>
                {
                    gadgets.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } 
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Fashion Accessories</a></h6>
                {
                    fashion.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Bags & Bagpacks</a></h6>             
                <h6><a className='text-decoration-none w3-text-red' href="">Luggages & Trolleys</a></h6>
            </div>
        </div>

    );
}
const topwear = ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"];
const festwear = ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"];
const botmwear = ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"];
const innerwear = ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"];
const footwear = ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"];
const sportswear = ["Sports Shoes", "Sports Sandals", "Active T-Shirts", "Track Pants & Shorts", "Tracksuits", "Jackets & Sweatshirts", "Sports Accessories", "Swimwear"];
const gadgets = ["Smart Wearable", "Fitness Gadgets", "Headphones", "Speakers"];
const fashion = ["Wallets", "Belts", "Perfumes & Body Mists", "Trimmers", "Deodorants", "Ties, Cufflinks & Pocket Squares", "Accessory Gift Sets", "Caps & Hats", "Mufflers, Scarfs & Gloves", "Phone Cases", "Rings & Wristwear", "Helmets"];
