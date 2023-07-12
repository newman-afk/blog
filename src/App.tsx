import { Routes, Route } from 'react-router-dom'
import Home from './scenes/Home'
import Blog from './scenes/Blog'
import Tags from './scenes/Tags'
import Projects from './scenes/Projects'
import About from './scenes/About'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <div className="container bg-background">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="tags" element={<Tags />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
