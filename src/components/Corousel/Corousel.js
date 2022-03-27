import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import '../style.css'

export default class Corousel extends Component {
    render() {
        return (
            <Carousel fade className='banner mt-5'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='banner1.png'
                alt="First slide"
              />
              <Carousel.Caption> 
                <h1>SELAMAT DATANG DI HALAMAN VIRTUAL TOUR</h1>
                <h2>SMAN 1 KOTA TEGAL</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='banner2.png'
                alt="Second slide"
              />     
              <Carousel.Caption>
              <h1>SELAMAT DATANG DI HALAMAN VIRTUAL TOUR</h1>
                <h2>SMAN 1 KOTA TEGAL</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
