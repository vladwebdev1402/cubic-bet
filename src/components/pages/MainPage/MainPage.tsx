import { useState } from 'react';

import { Button, Modal, Typography } from '@/components/atoms';

import style from './MainPage.module.scss';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.page}>
      <Button onClick={() => setIsOpen(true)}>показать модалку</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>Модалка</Typography>
      </Modal>
    </div>
  );
};

export { MainPage };
