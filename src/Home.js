import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Environment } from './relay';
import Loading from './Loading'

import ListPage from './ListPage'

class Home extends Component {
  render() {
    return (
      <QueryRenderer 
      environment={Environment}
      query={HomeQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <ListPage viewer={props.viewer} />
        }
        return <Loading />
      }}/>
    )
  }
}

const HomeQuery = graphql`
  query HomeQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`

export default Home