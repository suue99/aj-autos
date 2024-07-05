import React from "react";
import Cars from '../../Images/car_views.png'
import '../Homepage/section3.css'

export default function Section3 () {
        return(
            <div className="section">
                <div className="container-items">
                    <span className="first-header">
                        All Types
                    </span>
                    <span className="second-header">
                        Domestic vehicles
                    </span>
                    <span className="paragraph-one">
                    We take pride in our excellent reputation and continuously strive <br/> 
                    to enhance our vehicle selection and service offerings.
                    </span>

                    <span>
                        <img src={Cars} alt="car views"/> 
                    </span>


                </div>
            </div>
        )



}