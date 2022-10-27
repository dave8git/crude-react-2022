import { useParams } from 'react-router';

import MaxiPost from './MaxiPost';


const List = props => {
  const {id} = useParams();

  console.log('id', id);

  

//   console.log('post', post);

   return (
      <div>
          <header>
              <h2>MaxiPost</h2>
          </header>
          <MaxiPost id={id} />
          {/* <section className={styles.columns}>
              {columns.map(column => <Column key={column.id} {...column} />)};
          </section> */}
      </div>
  );
};

export default List;