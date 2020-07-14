import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick =() => {
        alert('hello fe43');
    }
    Showmessage =(mess) =>{
        alert("hello" +mess)
    }
    render() {
        return (
            <div>
                {/* cách 1 */}
                <p>cách 1 : truyền callback function xử lý sự kiện</p>
                <button onClick={this.handleClick.bind(this)}>Click me</button>
                <hr/>
                {/* cách 2 */}
                <p>dùng arrow function</p>
                <button onClick={()=>{this.handleClick();}}>Click me</button>
                <button onClick={()=>{
                    this.Showmessage('cybersoft')
                }}>Showmessage</button>
            </div>
        )
    }
}
