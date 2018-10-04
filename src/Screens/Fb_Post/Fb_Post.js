import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import '../../App.css';





class Fb_Post extends Component {
constructor(){
  super();
  this.state = {
    counter: 0,
  }
}


  render() {
    const { post } = this.props;

    return (
      <div className="App">
        <Navbar />
          <br/>
        <br />
        {
        post.images.map((v , i)=>{
          console.log(v);
          return <div className="card-header" >
          <img key={i} src={v} alt="image" className="render-image" />
          <br/>
          <br/>
            <button className="like-button"> Like </button>
          


</div>
        })
      }
      </div>
    );
  }
}

export default Fb_Post;
