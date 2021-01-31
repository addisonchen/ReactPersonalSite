import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

export default function AboutMe() {
    return (
        <div>
            <Row justify='center' align='middle'>
                <Col xs={12} sm={6} className="about mainContainer left">
                </Col>
                <Col xs={12} sm={6} className="about mainContainer right">
                </Col>
            </Row>
        </div>
    )
}
