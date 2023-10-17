import { Container, Topic } from 'components/AuthNavMenu/AuthNavMenu.styled';
import { logOut } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';

export const UserPage = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

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
      <Button
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Container>
  );
};
