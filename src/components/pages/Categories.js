import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/categoriesRedux';

const Categories = () => {
    const categories = useSelector(getCategories);


return (
    <div>
        {categories.map((category) => (
            <Link to={'/categories/' + category}>
                <Button variant={'primary'}>
                    {category}
                </Button>
            </Link>
        ))}
    </div>
)}
export default Categories;