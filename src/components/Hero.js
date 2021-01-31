import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

export default function Hero() {
    return (
        <div>
            <Row justify='center' align='middle'>
                <Col xs={12} sm={6} className="hero mainContainer left">
                    <div className="nameContainer">
                        <h1 className="yellow addison">ADDISON</h1>
                        <h1 className="yellow addison">CHEN</h1>
                        <p className="lightGrey dit">Developer in training.</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} className="hero mainContainer right">
                    <div className="heroPictureContainer">
                        <img id="heroPicture" src={"/images/profilepicture.jpg"} alt="Addison Chen"/>
                        <div className="heroPictureBg"></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
