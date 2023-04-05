import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Header from './components/Header';
import BlogForm from './components/Blogform';
import Blogs from './components/Blogs';

function App() {
  return (
    <>
      <Header/>
      <div className='container p-4'>
        <BlogForm/>
        <Blogs/>

      </div>
    </>
  );
}

export default App;
