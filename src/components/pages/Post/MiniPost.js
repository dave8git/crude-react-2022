import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const MiniPost = props =>{

    return (
      <div>
        {/* {JSON.stringify(props)} */}
        <Card className="m-5">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <div><b>Author: </b>{props.author}</div>
                <div><b>Published: </b>{props.publishedDate}</div>
                <div><b>Category:</b>{props.category}</div>
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