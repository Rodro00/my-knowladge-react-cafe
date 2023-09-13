import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,reading}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 rounded-xl">
      <div className='text-center mb-4 mt-2 bg-green-400 rounded-lg p-2'>
        <h3>Reading time:{reading}</h3>
      </div>
      <h2 className='text-center '>Bookmarks:{bookmarks.length} </h2>
      {
        bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  reading: PropTypes.number

}

export default Bookmarks;