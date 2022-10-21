import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

 const addPost =()=>{


    return(
        <>
        <Button as={NavLink} to={'/post/add'}>Add</Button>
        </>
    )
 }

 export default addPost;