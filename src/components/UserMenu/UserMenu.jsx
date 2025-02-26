import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        toast.error('Somthing went wrong');
      });
  };
  return (
    <button className={css.logoutBtn} onClick={onClick}>
      LogOut
    </button>
  );
};

export default UserMenu;
