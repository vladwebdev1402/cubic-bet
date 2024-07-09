import { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';

import style from './Input.module.scss';

type InputProps = {
  error?: string;
  containerClassName?: string;
} & ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, required, containerClassName, className, ...props }, ref) => {
    return (
      <label className={containerClassName}>
        <input
          {...props}
          ref={ref}
          required={required}
          className={clsx(
            style.input,
            { [style.input_error]: error },
            className,
          )}
        />
        {error && <p className={style.error}>{error}</p>}
      </label>
    );
  },
);

export { Input };
