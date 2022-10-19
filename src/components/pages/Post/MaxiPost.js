import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from './MaxiPost.module.scss';
import PopUp from './PopUp.js';


const MaxiPost = props =>{
    return (
      <div>
        {/* {JSON.stringify(props)} */}
        <div className={styles.buttonsWrapper}>
            <h2>{props.title}</h2>
            <Button element={<PopUp />} variant="primary">Delete</Button>
            {/*<Button as={NavLink} to={'/post/' + props.id} variant="primary">Read More</Button> */}
        </div>
        
        <div><b>Author:</b>{props.author}</div>
        <div><b>Published:</b>{props.publishedDate}</div>
        <div>{props.content}</div>
      </div>
    );
  }
  
  export default MaxiPost;