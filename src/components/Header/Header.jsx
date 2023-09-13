import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center mt-2 p-2 border-b-2 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold'>Knowladge Cafe:</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;