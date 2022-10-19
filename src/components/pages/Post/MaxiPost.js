import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './MaxiPost.module.scss';
import PopUp from './PopUp.js';


const MaxiPost = props =>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        {/* {JSON.stringify(props)} */}
        <div className={styles.buttonsWrapper}>
            <h2>{props.title}</h2>
            <Button variant="primary" onClick={handleShow}>
                Delete <PopUp show={show}/>
            </Button>
        </div>
       
        <div><b>Author:</b>{props.author}</div>
        <div><b>Published:</b>{props.publishedDate}</div>
        <div>{props.content}</div>
      </div>
    );
  }
  
  export default MaxiPost;