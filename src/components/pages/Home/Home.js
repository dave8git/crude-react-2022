import MiniPost from '../Post/MiniPost';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import  styles  from './Home.module.scss';

function Home() {

  const posts = useSelector((state) => getAllPosts(state));
  console.log('posts', posts);
    return (
      <div className={styles.cardFlex}>
        {posts.map((post) => <MiniPost key={post.id} {...post} />)}
      </div>
    );
  }
  
  export default Home;