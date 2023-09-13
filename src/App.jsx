
import { useState } from 'react'
import './App.css'
import Blogsdetails from './components/Blogs/Blogsdetails'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [reading, setReading] = useState(0)

  const haldleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const haldeMarkAsRead =time=>{
       setReading(reading + time)
  }

  return (
    <>  
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogsdetails haldleAddToBookmark={haldleAddToBookmark}
      haldeMarkAsRead={haldeMarkAsRead}
     ></Blogsdetails>
     <Bookmarks 
      reading={reading}     
     bookmarks = {bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
