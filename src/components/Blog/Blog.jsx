import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,haldleAddToBookmark,haldeMarkAsRead}) => {
  const {title,cover, author,author_img,reading_time,posted_date,hash_tags} = blog;
 console.log(blog)
  return (
    <div className='mb-10'>
      <img className='w-full mb-4' src={cover} alt="" />
      <div className='flex justify-between'>
        <div  className='flex gap-2 mb-4'>
            <img className='w-10 rounded-full' src={author_img} alt="" />
            <div>
              <h3 className='text-medium'>{author}</h3>
              <p>{posted_date}</p>
            </div>
        </div>
        <div >
            <span className='mr-4'>{reading_time} min read</span>
            <button 
            onClick={()=>haldleAddToBookmark(blog)}
            className='text-red-600'><FaBookmark></FaBookmark
            ></button>
        </div>
      </div>
      <h2>title:{title}</h2>
      <p>
        {
          hash_tags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
      <button
      onClick={()=>haldeMarkAsRead(reading_time)}
       className='text-purple-400 font-bold underline'>Mark As Read</button>
    </div>
  );
};

Blog.propTypes ={
  blog:PropTypes.object.isRequired,
  haldleAddToBookmark: PropTypes.func
}
export default Blog;