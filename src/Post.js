import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { Link } from "react-router-dom";

import {
  createFragmentContainer
} from 'react-relay'

class Post extends Component {
  render() {
    return (
      <div>
        <Link to="/post/12312321" >post</Link>
        <h1>{ this.props.post.description } </h1>
        <h1>{ this.props.post.id } </h1>
        <img src={ this.props.post.imageUrl } alt={this.props.post.description}/>
      </div>
    )
  }
}

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    description 
    imageUrl
  }
`)