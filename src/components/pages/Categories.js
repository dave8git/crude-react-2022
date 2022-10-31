import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/categoriesRedux';
//import shortid from 'shortid';

const Categories = () => {
    const categories = useSelector(getCategories);
return (
    <div>
        {categories.map((category) => (
            <div key={category}>
            <Link to={'/categories/' + category}>
                <Button key={category} variant={'primary'}>
                    {category}
                </Button>
            </Link>
            </div>
        ))}
    </div>
)}
export default Categories;