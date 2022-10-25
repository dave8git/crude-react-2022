import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './MaxiPost.module.scss';
import PopUp from './PopUp.js';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../redux/postsRedux.js';
import { useParams} from 'react-router'
import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MaxiPost = props => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const post = useSelector((state) => getPostsById(state, props.id));

  console.log(post);

  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    console.log('id', props.id);
    dispatch(deletePost(props.id));
    handleClose();
  }

  if(!post) return <Navigate to="/" /> 
  else
  return (
    <div>
      {/* {JSON.stringify(props)} */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

  
    <div className={styles.wrapContent}>
      <div className={styles.redText}>
        <h2>{post.title}</h2>
      </div>
      <div className={styles.buttonFlex}>
      <div>
        <Link to={`/post/edit/${props.id}`} props={post}>
          <Button variant="outline-info">
            Edit
          </Button>
        </Link>
        </div>
      <div>
        <Button variant="outline-danger" onClick={handleShow}>
          Delete
        </Button>
      </div>
      </div>
      
    </div>
      <div><b>Author:</b>{post.author}</div>
      <div><b>Published:</b>{post.publishedDate}</div>
      <div>{post.content}</div>
    </div>
  );
}

export default MaxiPost;