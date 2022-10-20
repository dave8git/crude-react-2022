import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import MaxiPost from './MaxiPost';


const List = props => {
  const {id} = useParams();

  console.log('id', id);

  const post = useSelector((state) => getPostsById(state, id));

  console.log(post);
  //console.log('columns', columns);
    
  //const listData = useSelector((state) => getListById(state, listId));

  //console.log('listData', listData);

  //if(!listData) return <Navigate to="/" />

  return (
      <div>
          <header>
              <h2>MaxiPost</h2>
          </header>
          <MaxiPost {...post} post={post} />
          {/* <section className={styles.columns}>
              {columns.map(column => <Column key={column.id} {...column} />)};
          </section> */}
      </div>
  );
};

export default List;