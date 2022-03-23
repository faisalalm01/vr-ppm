import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <Jumbotron className='text-center'>
                <Container>
                    <div>
                        <div className='col-md-12 my-5'>

                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        </div>
                        <div className='col-md-12 pt-5 my-5'>
                        <p>
                            <Link to={'./panel'}><Button className='' variant="primary">Go Visit Tour</Button>
                            </Link>
                        </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}