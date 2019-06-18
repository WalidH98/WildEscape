import React from 'react'
import { withRouter } from 'react-router-dom';
import './Acceuil.css'
import MyButton from '../MyButton/MyButton';


function Acceuil() {
    return (
        <div className='textalign'>
            <h1><span>WILD</span>ESCAPE</h1>
                <MyButton url='/signup' text='JOUER !'/>
        </div>
    )
}

export default withRouter(Acceuil);