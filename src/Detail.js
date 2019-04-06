import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Environment } from './relay';

class Detail extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <QueryRenderer 
      environment={Environment}
      query={DetailQuery}
      variables={{idTest: this.props.match.params.id}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          console.log(props)
          return <Info post={props}/>
        }
        return <div>Loading</div>
      }}/>
    )
  }
}

const Info = ({post}) => (
  <div>
    {post.viewer.Post.title}
    <img src={ post.viewer.Post.imageUrl } alt={post.viewer.Post.title}/>
  </div>
)

const DetailQuery = graphql`
  query DetailQuery($idTest: ID!) {
    viewer {
      Post(id: $idTest) {
        title
        imageUrl
        description
      }
    }
  }
`

export default Detail