import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postsReducer, { getPostByCategory } from '../../redux/postsRedux';
import MiniPost from './Post/MiniPost.js';

const CategoryView = () => {
    const { postCategory } = useParams(); 
    console.log('postCategory', postCategory);
    const posts = useSelector((state) => getPostByCategory(state, postCategory)); 
    console.log('posts', posts);

    return (
        <div>
            {posts.map((post) => (
                
                <div key={post.id}>
                    <MiniPost {...post} />
                </div>
                
            ))}
        </div>
    )

}
export default CategoryView;