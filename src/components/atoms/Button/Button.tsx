import { ComponentProps, FC, MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';

import style from './Button.module.scss';

export type ButtonProps = {
  theme?: 'violet' | 'green';
  lastIcon?: ReactNode;
  isActive?: boolean;
  loading?: boolean;
} & ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({
  theme = 'violet',
  className = '',
  loading = false,
  isActive = false,
  lastIcon,
  children,
  disabled,
  ...props
}) => {
  const onIconClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(
        style.button,
        style[theme],
        {
          [style.active]: isActive,
          [style.with_icon]: lastIcon,
        },
        className,
      )}
    >
      {loading && <span className={style.loader} />}
      {!loading && (
        <>
          {children} {lastIcon && <div onClick={onIconClick}>{lastIcon}</div>}
        </>
      )}
    </button>
  );
};

export { Button };
