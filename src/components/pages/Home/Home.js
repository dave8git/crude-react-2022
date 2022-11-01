import MiniPost from '../Post/MiniPost';
import PostAdd from '../PostAdd/PostAdd';
import { Col, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import styles from './Home.module.scss';

function Home() {

  const posts = useSelector((state) => getAllPosts(state));
  console.log('posts', posts);
  return (
    <Row>
       <Col className="d-flex flex-wrap me-5">
       
          {posts.map((post) => <MiniPost key={post.id} {...post} />)}
          <PostAdd />
     
    </Col>
    </Row>
   
   
  );
}

export default Home;