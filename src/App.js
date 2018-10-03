import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fb_Post from './Screens/Fb_Post/Fb_Post';

class App extends Component {
  constructor(){
    super()
    this.state = {
      post: {
        createdBy: 'Muhammad Sarim',
        avatar: 'https://avatars3.githubusercontent.com/u/36129452?s=400&u=91883b50e2a98b83041a144fdd254e4c4e62f4e7&v=4',
        description: "Hp eliteBook series images",
        images: ['data:image/jpeg;base64,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', 'https://st1.bgr.in/wp-content/uploads/2018/08/oppo-f9-back.jpg', 'https://www.themobileindian.com/resizer.php?src=/public/uploads/news/2018/08/23344/oppo-1.jpg&w=735&h=425', 'https://static.digit.in/product/3f50d89b928a93e38b72e7dc2f7d54c8a26d52d0.jpeg', 'https://i.gadgets360cdn.com/products/large/1534834178_635_oppo_f9_pro.jpg', 'https://propakistani.pk/price/wp-content/uploads/2018/07/ComingSoon_Pic-copy-5.jpg', 'https://i.ytimg.com/vi/SenBAVnyCyU/maxresdefault.jpg', 'https://static.toiimg.com/thumb/msid-65617343,width-640,resizemode-4/65617343.jpg'],
        createdAt: new Date().toLocaleDateString(),
        likes: ['Faraz' , 'Ali' , 'Talha' , 'Rohail'],
      }
      
    }
  }

  render() {
    const {post} = this.state;
    console.log(this.state.post.createdAt)
    return (
      <div className="App">
          <img src={post.images[2]} alt="logo" />
          <Fb_Post post={post} />
      </div>
    );
  }
}

export default App;