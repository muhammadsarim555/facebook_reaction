import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FacebookEmoji from 'react-facebook-emoji';
import image from '../../Images/images.png'
import '../../App.css';





class Fb_Post extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
    }
  }

  emojis() {
    return <div>
      <FacebookEmoji type="like" size="sm" />
      <FacebookEmoji type="love" size="sm" />
      <FacebookEmoji type="yay" size="sm" />
      <FacebookEmoji type="wow" size="sm" />
      <FacebookEmoji type="angry" size="sm" />
      <FacebookEmoji type="haha" size="sm" />
      <FacebookEmoji type="sad" size="sm" />
      {/* <FacebookEmoji type="like" size="sm"/> */}
    </div>
  }

like(){
  const {post} = this.props;  
  this.setState({
      isLike: true,
    })
    post.likes.unshift('You')

  }

  dislike(){
  const {post} = this.props;  
    this.setState({
      isLike: false,
    })
    post.likes.shift()
    
  }

  render() {
    const { post } = this.props;
    const {isLike} = this.state;
    console.log(post.likes)
    return (
      <div className="App">
        {/* {this.emojis()} */}
        <Navbar />
        <br />
        <br />
        {
          post.images.map((v, i) => {
            // console.log(v);
            return <div className="card-header" >
              <img key={i} src={v} alt="image" className="render-image" />
              <br />
              <span>
                {/* <img src={image} className="logo" /> */}
                {post.likes[0]} and {`${post.likes[1]}  ${post.likes.length} others`} </span>
              <br />
              {isLike && this.emojis() }
              { !isLike ? 
              <button className="like-button" onClick={this.like.bind(this)}> Like </button>
                :
              <button className="like-button" onClick={this.dislike.bind(this)}> Dislike </button>
                

            }


            </div>
          })
        }
      </div>
    );
  }
}

export default Fb_Post;
