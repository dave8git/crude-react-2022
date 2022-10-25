import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import shortid from 'shortid';

 const PostForm = ({action, actionText, ...props}) => {  // oczekuje na parametry action i action text, oraz inne parametry z pól formularza
    const [title, setTitle] = useState(props.title || '');
    const [description, setDescription] = useState(props.description ||'');
    const [content, setContent] = useState(props.content ||'');
    const [date, setDate] = useState(props.date || '');
    const [author, setAuthor] = useState(props.author || '');
    let navigate = useNavigate();

    console.log('PostForm props', props.props);
    const id = useParams();

    const handleSubmit = e => {
        e.preventDefault();
            action({id: id, title: title, description: description, content: content, publishedDate: date.toLocaleDateString("pl-PL").replaceAll('.', '-'), author: author }); // wywołanie akcji
            setTitle('');
            setDescription('');
            setContent('');
            setDate('');
            setAuthor('');
            navigate('/');
    }
    
    console.log('props', props);
    //const dispatch = useDispatch();

    return(
    <form onSubmit={handleSubmit}>
        Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        Content: <input type="text" value={content} onChange={e => setContent(e.target.value)} />
        Date: <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(date) => setDate(date)} />
        Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />

        <Button type="submit">{props.actionText}</Button>
    </form>
    )
 }

 export default PostForm;