import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FacebookEmoji from 'react-facebook-emoji';
import image from '../../Images/images.png';
import FbImageLibrary from 'react-fb-image-grid';
import '../../App.css';
import moment from "moment";





class Fb_Post extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
      type: '',
    }
  }

  emojis(type) {
    return <div className="emojis">
      <span className="emojis-info" onClick={(e) => this.setState({type: "like"} , () => console.log(this.state.type))}> <FacebookEmoji type="like" size="sm"  /></span>
      <span className="emojis-info" onClick={(e) => this.setState({type: "love"} , () => console.log(this.state.type))}>
      <FacebookEmoji type="love" size="sm" /></span>
      <span className="emojis-info" onClick={(e) => this.setState({type: "yay"} , () => console.log(this.state.type))}>
      <FacebookEmoji type="yay" size="sm" /></span>
      <span className="emojis-info" onClick={(e) => this.setState({type: "wow"} , () => console.log(this.state.type))}>
       <FacebookEmoji type="wow" size="sm" /></span>
      <span className="emojis-info" onClick={(e) => this.setState({type: "angry"} , () => console.log(this.state.type))}>
        <FacebookEmoji type="angry" size="sm" /></span>
      <span className="emojis-info" onClick={(e) => this.setState({type: "haha"} , () => console.log(this.state.type))}>
        <FacebookEmoji type="haha" size="sm" /></span>
      <span className="emojis-info" onClick={(e) => this.setState({type: "sad"} , () => console.log(this.state.type))}>
        <FacebookEmoji type="sad" size="sm" /> </span>
      {/* <FacebookEmoji type="like" size="sm"/> */}
    </div>
  }

  like(t) {
    const { type } = this.state;
    const { post } = this.props;
    this.setState({
      isLike: true,
    })
    post.likes.unshift('You')
    console.log(type)

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
    const { isLike , type } = this.state;
    let time = moment(post.createdAt).fromNow();
    console.log(time)
    return (
      <div className="App">
        {/* {this.emojis()} */}
        {/* <Navbar /> */}
        <br />
        <br />

        <div className="card-header">







          <div className="render-info">
          <img src={post.avatar}  className="profile-image" alt="profile image" />
          <div className="info">
          <span> {post.createdBy} </span><br/>
          <span> {time} </span>
          </div><br/><br/><br/><br/><br/>
          <span className="des"> {post.description} </span>
          </div>
          
          <FbImageLibrary width={100} countFrom={5} images={post.images} />

          <span>{post.likes[0]}, {`${post.likes[1]} and ${post.likes.length} others`} </span>
          <hr />





          {isLike && this.emojis()}
          {!isLike ?
            <a className="like-button" onClick={this.like.bind(this) } > Like </a>
            :
            // <a className="like-button" onClick={this.dislike.bind(this)} style={{color:"blue"}}> Like </a>
            <span className="emojis-info" onClick={this.dislike.bind(this)}> <FacebookEmoji type={type} size="sm"  /></span>
            
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