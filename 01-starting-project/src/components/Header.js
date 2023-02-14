import { useDispatch, useSelector } from 'react-redux';
import { authActionTypes } from '../store/auth/authReduser';
import classes from './Header.module.css';

const Header = () => {

const dispatch = useDispatch()

  const isAuthorised = useSelector((state) => state.auth.isAuthorised)


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorised && 
      (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch({type: authActionTypes.LOG_OUT})}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
