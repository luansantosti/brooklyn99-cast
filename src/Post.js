import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { Link } from "react-router-dom";
import {
  createFragmentContainer
} from 'react-relay'
import styled from 'styled-components'

const ListItem = styled.div`
  background: #26262d;
  display: flex;
  flex-direction: column;
  div {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    h2 {
      color: #ffdd46;
      margin-bottom: 0px;
    }
    p {
      color: #797979;
      font-size: 0.9rem;
    }
    a {
      border-top: 1px solid #383838;
      text-align: center;
      padding: 10px;
      margin-bottom: 5px;
      text-decoration: none;
      color: #9c9c9c;
      margin-top: auto;
      -webkit-transition: all 300ms ease;
      -moz-transition: all 300ms ease;
      -ms-transition: all 300ms ease;
      -o-transition: all 300ms ease;
      transition: all 300ms ease;
      &:hover {
        color: #ffdd46;
      }
    }
  }
`

class Post extends Component {
  render() {
    return (
      <ListItem>
        <img src={ this.props.post.imageUrl } alt={this.props.post.title}/>
        <div>
          <h2>{ this.props.post.title } </h2>
          <p>{ this.props.post.shortDescription } </p>
          <Link to={`/post/${this.props.post.id}`} >Read more</Link>
        </div>
      </ListItem>
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