import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import NotFound from './components/pages/NotFound/NotFound';
import Add from './components/pages/Post/Add/Add';
import Edit from './components/pages/Post/Edit/Edit';
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
      <Route path="/post/add" element={<Add />} />
      <Route path="/post/edit/:id" element={<Edit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Container>
  <Footer />
    </>

  );
}

export default App;
