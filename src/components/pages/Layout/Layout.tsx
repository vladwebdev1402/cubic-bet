import { FC, ReactNode } from 'react';

import { Header } from '@/components/organisms';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { Layout };
