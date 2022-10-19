import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const MiniPost = props =>{

    return (
      <div>
        {/* {JSON.stringify(props)} */}
        <Card xs>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <div><b>Author: </b>{props.author}</div>
                <div><b>Published: </b>{props.publishedDate}</div>
                <Card.Text>
                    {props.shortDescription}
                </Card.Text>
                <Button as={NavLink} to={'/post/' + props.id} variant="primary">Read More</Button>
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default MiniPost;