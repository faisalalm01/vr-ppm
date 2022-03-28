import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Cards extends Component {
  render() {
    return (
        <Card className="text-center my-5 container border-0">
       
        <Card.Body>
          <Card.Title>Klik tombol untuk kunjungi tour :</Card.Title>
          <Card.Text>
           
          </Card.Text>
            <Link to={'./panel'}><Button variant='primary'>Go to Visit Tour</Button></Link>
        </Card.Body>
      </Card>
    )
  }
}
