import React, { Component } from 'react'
import BT2Header from './BT2Header'
import BT2Banner from './BT2Banner'
import BT2Footer from './BT2Footer'

export default class Baitaplayout2 extends Component {
    render() {
        return (
            <div>
                <BT2Header/>
                <BT2Banner/>
                <BT2Footer/>
            </div>
        )
    }
}
