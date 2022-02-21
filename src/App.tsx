import { Container, Typography } from '@mui/material';
import './App.css';
import ArticlesContainer from './pages/Articles/ArticlesContainer';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ArticleInfoContainer from './pages/ArticleInfo/ArticleInfoContainer';

function App() {

  return (
    <Container maxWidth="md">
      <Typography variant='h2' align="center" gutterBottom>
        My articles
      </Typography>
      <Router>
        <Routes>
          <Route path='/' element={<ArticlesContainer/>}/>
          <Route path='/articles/:articleId' element={<ArticleInfoContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
