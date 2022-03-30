import React from 'react';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Living from './Living';
import Beauty from './Beauty';
import Studio from './Studio';

export default function Header() {
    return (
        <div style={{ "marginBottom": "5%" }}>
            <div className="w3-top ">
                <div className="w3-bar w3-card-4 w3-padding w3-large w3-white">
                    <a href='#' className="w3-bar-item w3-button"><img src="myntra-logo.png" style={{"width":"55px"},{"height":"40px"}} alt="" /></a>
                    <div style={{ "marginTop": "5px", "marginLeft": "10%" }}>

                        <div class="w3-dropdown-hover">
                            <button className="w3-button w3-white">Men</button>
                            <div className="w3-dropdown-content w3-bar-block w3-white">
                                <Men/>
                            </div>
                        </div>

                        <div class="w3-dropdown-hover">
                            <button className="w3-button w3-white">Women</button>
                            <div className="w3-dropdown-content w3-bar-block w3-white">
                                <Women/>
                            </div>
                        </div>

                        <div class="w3-dropdown-hover">
                            <button className="w3-button w3-white">Kids</button>
                            <div className="w3-dropdown-content w3-bar-block w3-white">
                                <Kids/>
                            </div>
                        </div>

                        <div class="w3-dropdown-hover">
                            <button className="w3-button w3-white">Home&Living</button>
                            <div className="w3-dropdown-content w3-bar-block w3-white">
                                <Living/>
                            </div>
                        </div>

                        <div class="w3-dropdown-hover">
                            <button className="w3-button w3-white">Beauty</button>
                            <div className="w3-dropdown-content w3-bar-block w3-white">
                                <Beauty/>
                            </div>
                        </div>

                        <div class="w3-dropdown-hover">
                            <button className="w3-button w3-white">Studio</button>
                            <div className="w3-dropdown-content w3-bar-block w3-white w3-margin-top">
                                <Studio/>
                            </div>
                        </div>

                        <div className='w3-right'>
                        <input type="text" className="w3-bar-item w3-input w3-light-gray " style={{ "width": "600px" }} placeholder="Search.."></input>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-search"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-heart"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-shopping-bag"></i></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
