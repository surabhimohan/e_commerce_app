import React from 'react';

export default function Beauty() {
    return (
        <div className='w3-card w3-row w3-padding'>
            <div className='w3-col s2 w3-padding'>                
                <h6><a className='text-decoration-none w3-text-red' href="">Makeup</a></h6>
                {
                    makeup.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Skincare, Bath & Body</a> </h6>
                {
                    bath.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Baby Care</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Masks</a></h6>                
            </div>

            <div className='w3-col s3 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Haircare</a></h6>
                {
                    haircare.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Fragrances</a></h6>
                {
                    fragrance.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                }
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Appliances</a></h6>
                {
                    appliance.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Men's Grooming</a></h6>
                {
                    men.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Beaty Gifts & Makeup Sets</a></h6>
                {
                    beauty.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } <hr />
                <h6><a className='text-decoration-none w3-text-red' href="">Premium Beauty</a></h6>
                <h6><a className='text-decoration-none w3-text-red' href="">Wellness & Hygiene</a></h6>
            </div>

            <div className='w3-col s2 w3-padding'>
                <h6><a className='text-decoration-none w3-text-red' href="">Top Brands</a></h6>
                {
                    brands.map((each, index) => {
                        return (<div><h6><a className='w3-small text-decoration-none w3-text-black' href="#">{each}</a><br /></h6></div>)
                    })
                } 
            </div>
        </div>

    );
}
const makeup = ["Lipstick", "Lip Gloss", "Lip Liner","Mascara","Eyeliner","Kajal","Eyeshadow","Foundation","Primer","Concealer","Compact","Nail Polish"];
const bath = ["Face Moisturiser", "Cleanser", "Masks & Peel", "Sunscreen", "Serum","Face Wash","Eye Cream","lip Balm","Body Lotion","Body Wash","Body Scrub","Hand Cream"];
const haircare = ["Shampoo","Conditioner","Hair Cream","Hair Oil","Har Gel","Hair Color","Hair Serum","Hair Accessory"];
const fragrance = ["Perfume", "Deodoranr", "Body Mist"];
const appliance = ["Hair Straightner", "Hair Dryer", "Epilator"];
const men = ["Trimmers", "Beard Oil", "Hair Wax"];
const beauty = ["Beauty Gift", "Makeup Kit"];
const brands = ["Lakme", "Maybelline", "LOreal", "Philips", "Bath & Body Works", "The Body Shop","Biotique", "Mamaearth", "MCaffeine", "Nivea", "Lotus Herbals", "LOreal Professionnel", "Kama Ayurveda","M.A.C","Forest Essentials"];
