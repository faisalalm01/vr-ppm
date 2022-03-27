import React, { Component } from 'react'
import Navbars from '../components/navbar/Navbars'
import "./pages.css"
// import Banner from '../components/Jumbotron/Jumbotron'
import Corousel from '../components/Corousel/Corousel'
import Accord from '../components/info/accordion'
import Footer from '../components/footer/footer'

export default class Home extends Component {
    render() {
        return (
            <div className="bg">
                <Navbars></Navbars>
                {/* <Banner></Banner> */}
                <Corousel></Corousel>
                <Accord></Accord>
                <Footer></Footer>
            </div>
        )
    }

}
