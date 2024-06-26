import { Link } from 'react-router-dom';
import LogOutIcon from '../../icons/logout-icon';

export default function UserOpts() {
  return (
    <section
      className='flex flex-col border-t-2 border-white/10
      rounded-tr-3xl pt-3 items-center'
    >
      <ul
        className='flex flex-col font-gabarito-medium text-lg 
        text-white w-full pr-4'
      >
        <Link
          to={'/session'}
          className='rounded-lg flex flex-row items-center w-full py-2 hover:bg-white hover:text-black transition duration-100'
        >
          <LogOutIcon /> Log out
        </Link>
      </ul>
    </section>
  );
}
