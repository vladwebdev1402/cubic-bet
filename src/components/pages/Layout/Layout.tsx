import { FC, ReactNode } from 'react';

import { Header } from '@/components/organisms';

import { useLayout } from './useLayout';
import style from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  useLayout();

  return (
    <div className={style.layout}>
      <Header />
      <main className={style.page_wrapper}>{children}</main>
    </div>
  );
};

export { Layout };
