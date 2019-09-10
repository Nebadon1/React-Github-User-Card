import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

 const following ={
  marginLeft:"63px"
 }
 
const GithubCard = (props) => (
  
  <Card>

    <Image src={props.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.login}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.name}</span>
      </Card.Meta>
      <Card.Description>
        {props.bio}
      {console.log('props in GithubCard', props)}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <span>
        <Icon name='user' />
       {props.followers} Followers
      </span>
      <span>
        <Icon name='users' style={following}/>
       {props.following} Following
      </span>
    </Card.Content>
  </Card>
)

export default GithubCard;
