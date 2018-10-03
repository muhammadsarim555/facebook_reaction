import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import '../../App.css';

class Fb_Post extends Component {
  
  render() {
    const {post} = this.props;
    // console.log(post.images[0]);
    return (
      <div className="App">
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      {
        post.images.map((v , i)=>{
          console.log(v);
          <img src={v} alt="logo" />

        })
      }
      </div>
    );
  }
}

export default Fb_Post;
