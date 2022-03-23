import React, { Component } from 'react'
import Navbars from '../components/navbar/Navbars'
import Carousel from '../components/carosel/Carousel'
import "./pages.css"

export default class Home extends Component {
    render() {
        return (
            <div className="bg">
                <Navbars></Navbars>
                <Carousel></Carousel>
                {/* <Product></Product> */}
            </div>
        )
    }

}
