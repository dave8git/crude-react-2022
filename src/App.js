import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import NotFound from './components/pages/NotFound/NotFound';
import AddPostForm from './components/pages/AddPostForm/AddPostForm';
import EditPostForm from './components/pages/AddPostForm/EditPostForm';
import Categories from './components/pages/Categories';
import CategoryView from './components/pages/CategoryView';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { Container} from 'react-bootstrap';



function App() {
  return (
    <>
       <Header />
        <Container>
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/add" element={<AddPostForm />} />
      <Route path="/post/edit/:id" element={<EditPostForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:postCategory" element={<CategoryView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Container>
  <Footer />
    </>

  );
}

export default App;
