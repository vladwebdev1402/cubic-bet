import { FC, ReactNode } from 'react';

import { Header } from '@/components/organisms';
import { useLayout } from './useLayout';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  useLayout();

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { Layout };
