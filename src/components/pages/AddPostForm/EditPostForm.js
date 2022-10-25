import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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

    const {id} = useParams();

    console.log(id);
    const post = useSelector((state) => getPostsById(state, id));

    console.log('post', post);

    const handleSubmit = (post) => {
        dispatch(editPost({...post, id}));
        navigate('/');
      };
    const edit = 'edit';
    return(
        <>
            <PostForm action={handleSubmit} actionText={edit} title={post.title} shortDescription={post.shortDescription} date={post.publishedDate} content={post.content} author={post.author} />
        </>
    );
};

export default EditPostForm;

