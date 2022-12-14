import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import shortid from 'shortid';

 const PostForm = ({action, actionText, ...props}) => {  // oczekuje na parametry action i action text, oraz inne parametry z pól formularza
    console.log('props.date', props.date);
    let date2 = props.publishedDate; 
    if(date2) {
        date2 = new Date(props.publishedDate);
    } 

    // const date1 = props.date.toLocaleDateString("pl-PL").replaceAll('.', '-');
    
    const [title, setTitle] = useState(props.title || '');
    const [description, setDescription] = useState(props.shortDescription ||'');
    const [content, setContent] = useState(props.content ||'');
    const [date, setDate] = useState(date2 || '');
    const [author, setAuthor] = useState(props.author || '');
    const [category, setCategory] = useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    let navigate = useNavigate();

    console.log('PostForm props', props.props);
    const id = useParams();

    const handleSubmit = () => {
        //e.preventDefault();
            setContentError(!content);
            setDateError(!date)
            if(content && date){
                const date3 = date.toLocaleDateString("pl-PL").replaceAll('.', '-');
                action({id: id, title: title, shortDescription: description, content: content, publishedDate: date3, author: author, actionText: actionText, category: category }); // wywołanie akcji
                setTitle('');
                setDescription('');
                setContent('');
                setDate('');
                setAuthor('');
                navigate('/');
            }
    }
    console.log('category', category);
    //const dispatch = useDispatch();


    const categories = useSelector((state) => state.categories);

    console.log('categories', categories);

    return(
    <form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Title: </Form.Label>
            <input {...register("title", { required: true, minLength: 3 })} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Description: </Form.Label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Description: </Form.Label>
            <ReactQuill value={content} onChange={setContent} />
            {contentError && <small className="d-block form-text text-danger mt-2">Content cannot be empy</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Date: </Form.Label>
             <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(date) => setDate(date)} />
            {dateError && <small className="d-block form-text text-danger mt-2">Date cannot be empty</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Author: </Form.Label>
            <input {...register("author", { required: true, minLength: 3 })} type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Category: </Form.Label>
                 <select {...register('category', {required: true})} as="select" value={category ? category: ''} name="category" onChange={(e) => {setCategory(e.target.value); console.log('setCategory', e.target.value)}}>
                    <option value="">--Please choose an option--</option>
                        {categories.map((cat, index) => (
                            <option selected={cat === category} key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                </select>
                {errors.category && <small className="d-block form-text text-danger mt-2">Category is required</small>}
        </Form.Group>
        <Button type="submit">{actionText}</Button>
    </form>
    )
 }

 export default PostForm;

