import { FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/atoms';

import style from './AuthForm.module.scss';

export type AuthData = {
  login: string;
  password: string;
};

type AuthFormProps = {
  onSubmit: (value: AuthData) => void;
  children?: ReactNode;
};

const AuthForm: FC<AuthFormProps> = ({ onSubmit, children }) => {
  const { register, formState, handleSubmit } = useForm<AuthData>();

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={formState.errors.login?.message}
        {...register('login', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
          validate: (value) => {
            if (/[а-яА-Я]/g.test(value))
              return 'Для ввода используйте символы латинского алфавита';
          },
        })}
      />
      <Input
        error={formState.errors.password?.message}
        type="password"
        {...register('password', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
          validate: (value) => {
            if (/[а-яА-Я]/g.test(value))
              return 'Для ввода используйте символы латинского алфавита';
          },
        })}
      />
      {children && <div>{children}</div>}
    </form>
  );
};

export { AuthForm };
