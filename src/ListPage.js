import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import {
  createFragmentContainer
} from 'react-relay'
import styled from 'styled-components'

import Post from './Post'

const StyledListPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px 15px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

class ListPage extends Component {
  render() {
    return (
      <StyledListPage>
        {this.props.viewer.allPosts.edges.map(({node}) => 
          <Post key={node.__id} post={node} /> 
        )}
      </StyledListPage>
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