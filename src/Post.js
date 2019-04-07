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
        <img src={ this.props.post.imageUrl } alt={this.props.post.title}/>
        <h2>{ this.props.post.title } </h2>
        <p>{ this.props.post.shortDescription } </p>
        <Link to={`/post/${this.props.post.id}`} >Read more</Link>
      </div>
    )
  }
}



export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    imageUrl
    title
    shortDescription
  }
`)