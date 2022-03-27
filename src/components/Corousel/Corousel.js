import React, { Component } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css'

export default class Corousel extends Component {
    render() {
        return (
            <Carousel fade className='banner'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='banner1.png'
                alt="First slide"
              />
              <Carousel.Caption> 
                <h1>SELAMAT DATANG DI HALAMAN VIRTUAL TOUR</h1>
                <h2>di SMAN 1 Kota Tegal</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Link to={'./panel'}><Button>Go to Visit Tour</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />     
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to={'./panel'}><Button>Go to Visit Tour</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
