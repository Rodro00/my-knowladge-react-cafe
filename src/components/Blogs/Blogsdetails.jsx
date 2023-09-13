import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogsdetails = ({haldleAddToBookmark,haldeMarkAsRead}) => {
      const [blogs, setBlogs] = useState([]);

      useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
      },[])

  return (
    <div className="md:w-2/3">
      <h1>Blogs:{blogs.length}</h1>
      {
        blogs.map(blog =><Blog 
          key={blog.id} 
          blog={blog}
          haldleAddToBookmark={haldleAddToBookmark}
          haldeMarkAsRead={haldeMarkAsRead}
          ></Blog>)
      }
    </div>
  );
};

Blogsdetails.propTypes = {
  haldleAddToBookmark:PropTypes.func,
  haldeMarkAsRead : PropTypes.func
}

export default Blogsdetails;