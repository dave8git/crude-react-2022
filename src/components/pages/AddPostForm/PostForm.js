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
import "react-datepicker/dist/react-datepicker.css";
import shortid from 'shortid';

 const PostForm = ({action, actionText, ...props}) => {  // oczekuje na parametry action i action text, oraz inne parametry z pól formularza
    console.log('props.date', props.date);
    let date2 = props.date; 
    if(date2) {
        date2 = new Date(props.date);
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
    console.log('PostForm props', props);
    //const dispatch = useDispatch();


    const categories = useSelector((state) => state.categories);

    console.log('categories', categories);

    return(
    <form onSubmit={validate(handleSubmit)}>
       
        Title: <input {...register("title", { required: true, minLength: 3 })} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        Content: <ReactQuill value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content cannot be empy</small>}
        Date: <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(date) => setDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">Date cannot be empty</small>}
        Author: <input {...register("title", { required: true, minLength: 3 })} type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        Category: <select {...register('category', {required: true})} as="select" value={category ? category: '1'} name="categories" >
                    <option value="">--Please choose an option--</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                </select>
        <Button type="submit">{actionText}</Button>
    </form>
    )
 }

 export default PostForm;

