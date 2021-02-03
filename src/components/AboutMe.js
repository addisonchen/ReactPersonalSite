import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

export default function AboutMe() {
    return (
        <div>
            <Row justify='center' align='middle'>
                <Col xs={{span: 12, order: 2}} sm={{span: 6, order: 1}} className="gridContainer">

                </Col>
                <Col xs={{span: 12, order: 1}} sm={{span: 6, order: 2}} className="gridContainer light">
                    <div className="textBoxContainer">
                        <div className="textBox right">
                            <h1 className="red sectionHeader">Student</h1>
                            <p className="darkGrey bodyText">School: Northeastern University</p>
                            <p className="darkGrey bodyText">Major: Computer Science</p>
                            <p className="darkGrey bodyText">Class: 2022</p>
                            <br></br>
                            <p className="darkGrey bodyText">Courses: WebDev, OOD, Algo, Networks, Systems, Database Design, Graphic Design</p>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
