import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const GithubFollowers = (props) => (

  <Card>
   <Card.Content>
      
    </Card.Content>
    <Card.Content>
    {console.log("GithubFollowers",props)}
      <Feed>
        <Feed.Event>
          <Feed.Label image={props.gitfollowers.avatar_url} />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a href = {props.gitfollowers.html_url}>{props.gitfollowers.login}</a> to your Github group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default GithubFollowers
