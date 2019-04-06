import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import {
  createFragmentContainer
} from 'react-relay'

import Post from './Post'

class ListPage extends Component {
  render() {
    return (
      <div>
        {this.props.viewer.allPosts.edges.map(({node}) => 
          <Post key={node.id} post={node} />
        )}
      </div>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    allPosts(last: 100, orderBy: createdAt_ASC) @connection(key: "ListPage_allPosts", filters: []) {
      edges {
        node {
          ...Post_post 
        }
      }
    }
  }
`)