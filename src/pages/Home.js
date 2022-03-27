import React, { Component } from 'react'
import Navbars from '../components/navbar/Navbars'
import Corousel from '../components/Corousel/Corousel'
import Accord from '../components/info/accordion'
import Footer from '../components/footer/footer'
import Cards from '../components/card/card'
import "./pages.css"

export default class Home extends Component {
    render() {
        return (
            <div className="bg">
                <Navbars></Navbars>
                <Corousel></Corousel>
                <Cards></Cards>
                <Accord></Accord>
                <Footer></Footer>
            </div>
        )
    }

}
