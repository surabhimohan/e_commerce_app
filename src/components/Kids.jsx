import React from 'react';

export default function Kids() {
    return (
        <div className='w3-card w3-row w3-padding'>
            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Boys Clothing</a></h6>
                {
                    boys.map((each, index) => {
                        return (<div> <h6><a className='w3-small text-decoration-none w3-text-black ' href="#">{each}</a><br /></h6> </div>)
                    })
                }
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Girls Clothing</a> </h6>
                {
                    girls.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Footwear</a></h6>
                {
                    footwear.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Toys</a></h6>
                {
                    toys.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Infants</a></h6>
                {
                    infants.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Home & Bath</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Personal Care</a></h6>                
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Kids Accessories</a></h6>
                {
                    kids.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Brands</a></h6>
                {
                    brands.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } 
            </div>
        </div>

    );
}
const boys = ["T-Shirts", "Shirts", "Shorts", "Jeans", "Trousers","Clothing Sets", "Ethnic Wear", "Track Pants & Pyjamas", "Jackets, Sweaters & Sweatshirts", "Party Wear", "Innerwear & Thermals", "Nightwear & Loungewear", "Valuepacks"];
const girls = ["Dresses", "Tops", "T-Shirts","Clothing Sets", "Lehenga choli", "Jeans, Trousers & Capris", "Shorts & Skirts", "Party Wear", "Kurta Sets", "Dungarees & Jumpsuits", "Tights & Leggins", "Jacket, Sweater & Sweatshirts", "Nightwear & Loungewear", "Innerwear & Thermals","Valuepacks"];
const footwear = ["Flats", "Casual Shoes","Flipflops", "Heels", "Sandals", "Sport Shoes","School Shoes","Socks"];
const toys = ["Learning & Development", "Activity Toys", "Soft Toys", "Action Figure/Play Set"];
const infants = ["Bodysuits", "Rompers & Sleepsuits", "Clothing Sets", "T-Shirts & Tops", "Ddresses", "Bottom wear","Winter wear","Innerwear & Sleepwear","Infant care"];
const kids = ["Bags & Bagpacks", "Watches", "Jewellery & Hair Accessories", "Sunglasses", "Masks & Protective Gears","Caps & Hats"];
const brands = ["H&M", "Max Kids", "Pantaloons", "United Colors of Benetton Kids","YK","U.S. Polo Assn. Kids","Mothercare","HRX"];
