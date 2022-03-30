import React from 'react';

export default function Living() {
    return (
        <div className='w3-card w3-row w3-padding'>
            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Bed Linen & Furnishing</a></h6>
                {
                    bed.map((each, index) => {
                        return (<div> <h6><a className='w3-small text-decoration-none w3-text-black ' href="#">{each}</a><br /></h6> </div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Flooring</a></h6>
                {
                    floor.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Bath</a> </h6>
                {
                    bath.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Lamps & Lighting</a></h6>
                {
                    lamps.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } 
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Home Decor</a></h6>
                {
                    decor.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Cushions & Cushion Covers</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Curtains</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Home Gift Sets</a></h6>
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Kitchen & Table</a></h6>
                {
                    kitchen.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Storage</a></h6>
                {
                    storage.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } 
            </div>

            <div className='w3-col s2 w3-padding'>
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
const bed = ["Bedsheets", "Bedding Sets", "Blankets, Quilts & Dohars", "Pillows & Pillow Covers", "Bed Covers", "Diwan Sets", "Chair Pads & Covers", "Sofa Covers"];
const floor = ["Carpets", "Floor Mats & Dhurries", "Door Mats"];
const bath = ["Bath Towels", "Hand & Face Towels", "Beach Towels", "Towel Sets", "Bath Rugs","Bath Robes","Bathroom Accessories","Shower Curtains"];
const lamps = ["Floor Lamps", "Ceiling Lamps", "Table Lamps", "Wall Lamps", "Outdoor Lamps","String Lights"];
const decor = ["Plants & Planters", "Aromas & candles", "Clocks", "Mirrors", "Wall Decor", "Festive Decor", "Pooja Essentials","Wall Shelves","Fountain","Showpieces & Vases"];
const kitchen = ["Dinnerware & Serveware", "Cups & Mugs", "Bakeware & Cookware", "Kitchen Storage & Tools", "Bar & Drinkware", "Table Covers & Furnishings"];
const storage = ["Organisers", "Hooks & Holders", "Laundary Bags"];
const brands = ["Home Centre", "Spaces", "D`Decor", "Portico New York", "Story@Home", "Pure Home & Living","Swayam", "Raymond Home", "Maspar", "Corelle", "Trident", "Cortina", "Random","Ellementry","ROMEE","SEJ by Nisha Gupta"];
