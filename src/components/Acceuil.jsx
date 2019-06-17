import React, { Component } from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Acceuil.css'



export default class Acceuil extends Component {
    render() {
        return (
            <div className='textalign'>
                <h1><span>WILD</span>ESCAPE</h1>
                <div>
                    <Button color="danger">JOUER!</Button>
                </div>
            </div>
        )
    }
}
