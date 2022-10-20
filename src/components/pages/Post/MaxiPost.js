import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './MaxiPost.module.scss';
import PopUp from './PopUp.js';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../redux/postsRedux.js';
import { useParams} from 'react-router'
import { Navigate } from 'react-router-dom';

const MaxiPost = props => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const {id} = useParams();
  const handleDelete = (e) => {
    e.preventDefault();
    console.log('id', id);
    dispatch(deletePost(id));
    handleClose();
  }

  if(!props.post) return <Navigate to="/" /> 
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
        <h2>{props.title}</h2>
      </div>
      <div className={styles.buttonFlex}>
      <div>
        <Button variant="outline-info" onClick={handleShow}>
          Edit
        </Button></div>
      <div>
        <Button variant="outline-danger" onClick={handleShow}>
          Delete
        </Button>
      </div>
      </div>
      
    </div>
      <div><b>Author:</b>{props.author}</div>
      <div><b>Published:</b>{props.publishedDate}</div>
      <div>{props.content}</div>
    </div>
  );
}

export default MaxiPost;