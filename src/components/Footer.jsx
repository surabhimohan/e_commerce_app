import React from 'react';
export default function Footer() {
    return (
        <div>
            <div className="w3-row w3-light-grey" style={{ "padding": "5px 150px" }}><br />
                <div className="w3-col m2 w3-margin">
                    <h6 className='w3-small'>ONLINE SHOPPING</h6><br />
                    {
                        shopping.map((item, index) => {
                            return (
                                <div><a href="#" className='text-decoration-none w3-text-grey'>{item}</a><br /></div>
                            )
                        })
                    }
                    <a href="#" className='text-decoration-none w3-text-grey'>Myntra Insider</a>
                    <button className="btn">New</button>
                </div>

                <div className="w3-col m2 w3-margin">
                    <h6 className='w3-small'>USEFUL LINKS</h6><br />
                    {
                        links.map((item, index) => {
                            return (
                                <div><a href="#" className='text-decoration-none w3-text-grey'>{item}</a><br /></div>
                            )
                        })
                    }

                </div>

                <div className="w3-col m3 w3-margin">
                    <h6 className='w3-small'>EXPERIENCE MYNTRA APP ON MOBILE</h6><br />
                    <div className='child-margin-4'>
                        <img src="img/google_play.png" alt="google" style={{ "width": "130px" }} />
                        <img src="img/apple_store.png" alt="apple" style={{ "width": "120px" }} /><br /><br />
                    </div>
                    <h6 className='w3-small'>KEEP IN TOUCH</h6>
                    <div className='child-margin-4'>
                        <img src="img/fb.png" alt="fb" style={{ "width": "20px" }} />
                        <img src="img/twitter.png" alt="twitter" style={{ "width": "20px" }} />
                        <img src="img/yt.png" alt="yt" style={{ "width": "20px" }} />
                        <img src="img/insta.png" alt="insta" style={{ "width": "20px" }} />
                    </div>

                </div>

                <div className="w3-col m3 w3-margin">
                    <div className="w3-row">
                        <div className="w3-col m3">
                            <img src="img/original.png" alt="original" style={{ "width": "50px" }} />
                        </div>
                        <div className="w3-col m9">
                            <strong>100% ORIGINAL</strong> guarantee <br /> for all products at myntra.com
                        </div>
                    </div>
                </div>
                <div className="w3-col m3 w3-margin">
                    <div className="w3-row">
                        <div className="w3-col m3">
                            <img src="img/30days.png" alt="days" style={{ "width": "45px" }} />
                        </div>
                        <div className="w3-col m9">
                            <strong>Return within 30days</strong> of <br /> recieving your order
                        </div>
                    </div>
                </div>

                <div className='w3-row'>
                    <h6 className='w3-small'>POPULAR SEARCHES <hr /></h6>
                    <div>
                        {
                            popular.map((each, index) => {
                                if (index == popular.length - 1) {
                                    return <a className='text-decoration-none w3-text-grey' href="#">{each}</a>
                                }
                                else {
                                    return <a className='text-decoration-none w3-text-grey' href="#">{each} | </a>
                                }
                            })
                        }
                    </div> <br />
                    <p className='w3-text-grey'>In case of any concern,<a className='text-decoration-none'><strong> Contact Us</strong></a>
                        <p className='w3-right w3-text-grey'>@2022 www.myntra.com. All rights reserved</p>
                    </p>
                </div> <hr /> <br />
                <div className='w3-row'>
                    <h6 className='w3-small '>REGISTERED OFFICE ADDRESS</h6> <br />
                    <div className='w3-row w3-text-grey'>
                        <p>
                            <p className='w3-left w3-col m3'>
                                Buildings Alyssa,
                                Begonia and Clover situated in Embassy Tech Village,
                                Outer Ring Road,
                                Devarabeesanahalli Village,
                                Varthur Hobli,
                                Bengaluru – 560103, India
                            </p>
                            <p className='w3-right w3-col m3'> <br /><br />
                                CIN: U72300KA2007PTC041799 <br />
                                Telephone:<a href="" className='text-decoration-none'> <strong> +91-80-61561999</strong> </a>
                            </p>
                        </p>
                    </div>
                </div> <hr /><br />
                <div className='w3-row'>
                    <h6>ONLINE SHOPPING MADE EASY AT MYNTRA</h6>
                    <p className='w3-text-grey'>
                        If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
                    </p><br />
                    <h6>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h6>
                    <p className='w3-text-grey'>
                        Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions. <br /><br />
                        <ol>
                            <li><span className='w3-text-black'>Smart men’s clothing -</span> At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</li>
                            <br />
                            <li><span className='w3-text-black'>Trendy women’s clothing -</span> Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</li>
                            <br />
                            <li><span className='w3-text-black'>Fashionable footwear -</span> While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</li>
                            <br />
                            <li><span className='w3-text-black'>Stylish accessories -</span> Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</li>
                            <br />
                            <li><span className='w3-text-black'>Fun and frolic -</span> Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</li>
                            <br />
                            <li><span className='w3-text-black'>Beauty begins here -</span> You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</li>
                        </ol>
                    </p> <br />
                    <p className='w3-text-grey'>Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p> <br />
                    <h6>AFFORDABLE FASHION AT YOUR FINGERTIPS</h6>
                    <p className='w3-text-grey'>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p> <br />
                    <h6>MYNTRA INSIDER</h6>
                    <p className='w3-text-grey'>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.

                        There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</p>
                    <h6>Insider</h6>
                    <ul className='w3-text-grey'>
                        <li>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</li>
                        <li>Curated collections from celeb stylists.</li>
                    </ul>
                    <h6>Elite</h6>
                    <ul className='w3-text-grey'>
                        <li>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
                        <li>Exclusive early access to Limited Edition products.</li>
                    </ul>
                    <h6>Icon</h6>
                    <ul className='w3-text-grey'>
                        <li>Chance to get on guest lists for special events.</li>
                    </ul> <br />
                    <h6>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h6>
                    <p className='w3-text-grey w3-padding'>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
                        Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.
                        Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.
                        If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life. <br /> <br />
                        <ol>
                            <li><h6  className='w3-text-black'>Keep Up With What Your Favourite Fashion Icons Are Upto</h6></li>
                            <p>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.
                                <br /> <br />
                                Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</p>
                            <li><h6 className='w3-text-black'>Quick Fashion Tip And Tricks</h6></li>
                            <p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</p>
                            <li><h6 className='w3-text-black'>Updates on What Is Trending and New Product Launches</h6></li>
                            <p>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.
                                <br /> <br />
                                Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</p>
                            <li><h6 className='w3-text-black'>Explicit Step-By-Step Beauty Routines From Experts</h6></li>
                            <p>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</p>
                            <li><h6 className='w3-text-black'>Celebrity Confessions And A Look Into Their Lives</h6></li>
                            <p>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.
                                <br /> <br />
                                If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</p>
                        </ol>
                    </p> <br />
                    <h6>MYNTRA APP</h6>
                    <p className='w3-text-grey'>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</p>
                    <br />
                    <h6>HISTORY OF MYNTRA</h6>
                    <p className='w3-text-grey'>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
                        <br /> <br />
                        The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
                    <br />
                    <h6>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h6>
                    <p className='w3-text-grey'>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
                        <br /> <br />
                        Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p> <br /> <br />
                </div>
            </div>
        </div>
    )
}
const shopping = ["Men", "Women", "Kids", "Home&Living", "Beauty", "Gift Cards"];
const links = ["Contact Us", "FAQ", "T&C", "Terms of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Whitehat", "Blogs", "Career", "Privacy Policy", "Site Map"];
const popular = ["Chinos", "Dresses For Girls", "T-Shirts", "Sandals", "Headphones", "Babydolls", "Blazers For Men", "Handbags", "Ladies Watches", "Bags", "Sport Shoes", "Gowns", "Forever 21",
    "Myntra Fashion Show", "Boxers", "Wallets", "Tops", "Earrings", "Fastrack Watches", "Kurtis", "Nike", "Smart Watches", "Designer Blouse", "Lipstick", "Saree", "Dresses", "Lehenga", "Goggles", "Bras",
    "Jewellery", "Suit", "Photo Frames", "Eye Makeup", "Earrings", "Fastrack Watches", "Kurtis", "Nike", "Smart Watches", "Designer Blouse", "Lipstick", "Saree", "Dresses", "Lehenga", "Goggles", "Bras",
    "Jewellery", "Suit", "Photo Frames", "Eye Makeup", "Lipstick", "Saree", "Dresses", "Lehenga", "Goggles", "Bras",
    "Jewellery", "Suit", "Photo Frames", "Eye Makeup"];









