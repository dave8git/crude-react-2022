import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import shortid from 'shortid';

 const AddPostForm = props => {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [content, setContent] = useState('');
    // const [date, setDate] = useState('');
    // const [author, setAuthor] = useState('');
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
            dispatch(addPost(post)); // wywołanie akcji
            navigate('/');
    }
    
    return(
        <>
            <PostForm action={handleSubmit} actionText="Add post" />
        </>
    )
 }

 export default AddPostForm;