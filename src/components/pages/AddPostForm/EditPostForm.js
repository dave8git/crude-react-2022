import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost, getPostsById } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import shortid from 'shortid';

 const EditPostForm = props => {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [content, setContent] = useState('');
    // const [date, setDate] = useState('');
    // const [author, setAuthor] = useState('');
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const id = props.postId;

    const post = useSelector((state) => getPostsById(state, id));

    const handleSubmit = (post) => {
            dispatch(editPost({...post, id})); // wywołanie akcji
            navigate('/');
    }
    


    return(
        <>
            <PostForm action={handleSubmit} actionText="Edit post" />
        </>
    )
 }

 export default EditPostForm;