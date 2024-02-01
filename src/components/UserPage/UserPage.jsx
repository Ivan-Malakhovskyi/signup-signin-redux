import { Container, Topic } from 'components/AuthNavMenu/AuthNavMenu.styled';
import { signOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { useAuthUser } from 'hooks/useAuthUser';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { userName } = useAuthUser();

  return (
    <Container>
      <Topic>
        Welcome,{' '}
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          {userName}
        </span>
      </Topic>
      <Button
        colorScheme="orange"
        variant="outline"
        type="button"
        onClick={() => dispatch(signOut())}
      >
        SignOut
      </Button>
    </Container>
  );
};
