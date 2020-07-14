import React, { Component } from 'react'

export default class RenderWithState extends Component {
    // this.state là thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện .đây là thuộc tính có sẵn của components
    state ={
        isLogin: false
    }

    isLogin= true;
    userName = 'khai';
    renderContent = () =>{
        if(this.isLogin){
    return <p>hello {this.userName}</p>
    }
    return <button onClick={()=>{
        this.isLogin();
    }}>dang nhap</button>
}
login =()=>{
    this.isLogin =true;
    console.log(this.isLogin);
    this.render();
    let newState = {
        isLogin :true
    }
    this.setState(newState)
}
    render() {
        return (
            <div>
                    {/* {this.isLogin ? <p>hello {this.userName}</p> : <button>đăng nhập</button>} */}
                    {this.renderContent()}
            </div>
        )
    }
}
