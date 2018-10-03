import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from '../../Components/Navbar/Navbar';
import '../../App.css';

class Fb_Post extends Component {
constructor(){
  super();
  this.state = {
    counter: 0,
  }
}

  // getImages(){
  //   let counter = this.state ;
  //   let post = this.props;
  //   var a ;
  //   for(counter=0 ;counter <= 8 ; counter++){      
  //     a = counter;
  //   }
  //   console.log(a)
  // }

  render() {
    const { post } = this.props;
    // let counter = this.state ;
    // var a ;
    // let img = document.getElementById('img');
    // for(counter=0 ;counter <= 8 ; counter++){      
    //   a = counter;
    //   console.log(img);
    // }
    // console.log(post.images[0]);
    return (
      <div className="App">
        <Navbar />
        <br />
        <img src={post.images[0]} alt="logo" id="img" />
        {
        post.images.map((v , i)=>{
          console.log(v);
          return <img src={v} alt="image"  />
        })
      }
      </div>
    );
  }
}

export default Fb_Post;
