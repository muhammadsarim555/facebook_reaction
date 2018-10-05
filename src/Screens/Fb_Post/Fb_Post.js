import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FacebookEmoji from 'react-facebook-emoji';
import image from '../../Images/images.png';
import FbImageLibrary from 'react-fb-image-grid';
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

  like() {
    const { post } = this.props;
    this.setState({
      isLike: true,
    })
    post.likes.unshift('You')

  }

  dislike() {
    const { post } = this.props;
    this.setState({
      isLike: false,
    })
    post.likes.shift()

  }

  render() {
    const { post } = this.props;
    const { isLike } = this.state;
    console.log(post.createdAt)
    return (
      <div className="App">
        {/* {this.emojis()} */}
        {/* <Navbar /> */}
        <br />
        <br />

        <div className="card-header">
          <div className="render-data">
          <img src={post.avatar} id="profile-image" alt='profile image' />
            <h4> {post.description} </h4>
    <p> {post.createdAt} </p>
          <br/>
          </div>
        <FbImageLibrary width={100} height={100} countFrom={5} images={post.images}/>
       <span>{post.likes[0]} and {`${post.likes[1]}  ${post.likes.length} others`} </span> 
      <br />
      {isLike && this.emojis()}
      {!isLike ?
        <button className="like-button" onClick={this.like.bind(this)}> Like </button>
        :
        <button className="like-button" onClick={this.dislike.bind(this)}> Dislike </button>
      }
      </div>
      </div>
    );
  }
}

export default Fb_Post;

// {
//   post.images.map((v, i) => {
//     // console.log(v);
//     return <div className="card-header" >
//       <img key={i} src={v} alt="image" className="render-image" />
//       <br />
//       {/* likes total are showing */}

//       <span>{post.likes[0]} and {`${post.likes[1]}  ${post.likes.length} others`} </span>
//       <br />
//       {/* show emojis */}

      // {isLike && this.emojis()}

//       {/* use toggle button */}

      // {!isLike ?
      //   <button className="like-button" onClick={this.like.bind(this)}> Like </button>
      //   :
      //   <button className="like-button" onClick={this.dislike.bind(this)}> Dislike </button>
      // }


//     </div>
//   })
// }