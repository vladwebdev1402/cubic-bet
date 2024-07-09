import { FC, MouseEvent, ReactNode, useEffect } from 'react';
import clsx from 'clsx';

import CrossIcon from '@/assets/decorative/cross.svg?react';

import style from './Modal.module.scss';

type ModalProps = {
  bodyClassName?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({
  bodyClassName = '',
  isOpen,
  onClose,
  children,
}) => {
  const onBodyClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (isOpen) {
      body.classList.add(style.stop_scroll);
    } else {
      body.classList.remove(style.stop_scroll);
    }
  }, [isOpen]);

  return (
    <div
      className={clsx(style.modal, {
        [style.modal_open]: isOpen,
      })}
      onClick={onClose}
    >
      <div className={clsx(style.body, bodyClassName)} onClick={onBodyClick}>
        <button className={style.close} onClick={onClose}>
          <CrossIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
