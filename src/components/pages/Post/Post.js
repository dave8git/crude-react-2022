import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import MaxiPost from './MaxiPost';
import { Navigate } from 'react-router-dom';

const List = props => {
  const {id} = useParams();

  console.log('id', id);

  const post = useSelector((state) => getPostsById(state, id));

  console.log('post', post);

  if(!post) return <Navigate to="/" /> 
  else return (
      <div>
          <header>
              <h2>MaxiPost</h2>
          </header>
          <MaxiPost {...post} />
          {/* <section className={styles.columns}>
              {columns.map(column => <Column key={column.id} {...column} />)};
          </section> */}
      </div>
  );
};

export default List;