import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postsReducer, { getPostByCategory } from '../../redux/postsRedux';
import Post from './Post/Post.js';

const CategoryView = () => {
    const { postCategory } = useParams(); 
    const posts = useSelector((state) => getPostByCategory(state, postCategory)); 
    console.log(posts);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Post {...post} />
                </div>
                
            ))}
        </div>
    )

}
export default CategoryView;