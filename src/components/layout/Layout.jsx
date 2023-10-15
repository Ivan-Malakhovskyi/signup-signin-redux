import { Suspense } from 'react';
import { BaseContainer } from './Layout.styled';

import { Outlet } from 'react-router-dom';
import { AppHeader } from 'components/AppHeader/AppHeader';

export const Layout = () => {
  return (
    <BaseContainer>
      <AppHeader />
      <main>
        <Suspense fallback={<div>Loading...👌</div>}>
          <Outlet />
        </Suspense>
      </main>
    </BaseContainer>
  );
};
