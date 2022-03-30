import React from 'react';

export default function Women() {
    return (
        <div className='w3-card w3-row w3-padding'>
            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-pink' href="">Indian & Fusion Wear</a></h6>
                {
                    indianwear.map((each, index) => {
                        return (<div> <h6><a className='w3-small text-decoration-none w3-text-black ' href="#">{each}</a><br /></h6> </div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-pink' href="">Belts, Scarves & More</a></h6>
                <h6><a className='text-decoration-none w3-text-pink' href="">Watches & Wearables</a></h6>
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-pink' href="">Western Wear</a> </h6>
                {
                    western.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-pink' href="">Plus Size</a></h6>
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-pink' href="">Meternity</a></h6>
                <h6><a className='text-decoration-none w3-text-pink' href="">Sunglasses & Frames</a></h6>
                <h6><a className='text-decoration-none w3-text-pink' href="">Footwear</a></h6>
                {
                    footwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-pink' href="">Sports & Active Wear</a></h6>
                {
                    sportswear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>
            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-pink' href="">Lingeries & Sleepweaer</a></h6>
                {
                    sleepwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-pink' href="">Beauty & Personal Care</a></h6>
                {
                    beauty.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-pink' href="">Gadgets</a></h6>
                {
                    gadgets.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-pink' href="">Jewellery</a></h6>
                {
                    jewellery.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-pink' href="">Bagpacks</a></h6>
                <h6><a className='text-decoration-none w3-text-pink' href="">Handbags, Bags & Wallets</a></h6>
                <h6><a className='text-decoration-none w3-text-pink' href="">Luggages & Trolleys</a></h6>
            </div>
        </div>

    );
}
const indianwear = ["Kurtas & Suits", "Kurtis, Tops & Tunics", "Ethnic Wear", "Leggins, Salwars & Churidars", "Skirts & Plazzos", "Sarees", "Dress Materials", "Lehenga Cholis", "Dupattas & Shawls", "Jackets"];
const western = ["Dresses", "Tops", "T-Shirts", "Jeans", "Trousers & Capris", "Shorts & Skirts", "Co-ords", "Playsuits", "Jumpsuits", "Shrugs", "Sweaters & Sweatshirts", "Jackets & Coats", "Blazzers & Waistcoats"];
const footwear = ["Flats", "Casual Shoes", "Heels", "Boots", "Sport Shoes & Floaters"];
const sportswear = ["Clothing", "Footwear", "Sport Accessories", "Sports Equipments"];
const sleepwear = ["Bras", "Briefs", "Shapewear", "Sleepwear & Loungewear","Swimmer","Camisoles & Thermals"];
const beauty = ["Makeup", "Skincare", "Premium Beauty", "Lipstick", "Fragrances"];
const gadgets = ["Smart Wearable", "Fitness Gadgets", "Headphones", "Speakers"];
const jewellery = ["Fashion Jewellery","Fine Jewellery","Earrings"];
