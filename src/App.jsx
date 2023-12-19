import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filter from './components/Filter'
import BlogList from './components/BlogList'

function App() {
  return (
      <div className="App bg-primary">
        <div className="max-w-[1920px] mx-auto border py-2">
          <Navbar />
          <Hero />
          <Filter />
          <BlogList />
          
        </div>
      </div>
  )
}

export default App
