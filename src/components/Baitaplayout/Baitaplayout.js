import React, { Component } from 'react'
import BTHeader from './BTHeader'
import Carousel from './Carousel'
import Bestseller from './Bestseller'
import Bestlaptop from './Bestlaptop'
import Promotion from './Promotion'

export default class Baitaplayout extends Component {
//nội dung react components chứa phương thức render

    render() {
        return (
            <div>
                <BTHeader/>
                <Carousel/>
                <Bestseller/>
                <Bestlaptop/>
                <Promotion/>
            </div>
        )
    }
}
