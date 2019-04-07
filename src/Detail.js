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
          return <Info props={props.viewer.Post}/>
        }
        return <div>Loading</div>
      }}/>
    )
  }
}

const Info = ({props}) => (
  <div>
    {props.title}
    {props.description}
    <img src={ props.imageUrl } alt={props.title}/>
    { props.occupation && <SubSection title='Occupation' props={props.occupation} /> }
    { props.nickname && <SubSection title='Nickname(s)' props={props.nickname} /> }
  </div>
)

const SubSection = ({ title, props}) => (
  <div>
    { title } <br/>
    { props }
  </div>
)

const DetailQuery = graphql`
  query DetailQuery($idTest: ID!) {
    viewer {
      Post(id: $idTest) {
        title
        imageUrl
        description
        nickname
        occupation
      }
    }
  }
`

export default Detail