import { Container, Topic } from 'components/AuthNavMenu/AuthNavMenu.styled';
import { logOut } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';

export const UserPage = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  // const email = useSelector(authSelectors.getUserEmail);

  return (
    <Container>
      <Topic>
        Welcome{' '}
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          {name}
        </span>
      </Topic>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </Container>
  );
};
