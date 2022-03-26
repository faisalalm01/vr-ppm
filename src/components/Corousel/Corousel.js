import React, { Component } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css'

export default class Corousel extends Component {
    render() {
        return (
            <Carousel showControl={false} showIndicator={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='logo512.png'
                        alt="Corousel"
                    />
                    <Carousel.Caption>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <Link to={'./panel'}><Button className='' variant="primary">Go Visit Tour</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
