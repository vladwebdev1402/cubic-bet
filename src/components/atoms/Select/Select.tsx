import { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import ArrowIcon from '@/assets/decorative/arrow.svg?react';

import { SelectValue } from './type';
import style from './Select.module.scss';

type SelectProps = {
  cureentValue: SelectValue;
  values: SelectValue[];
  disabled?: boolean;
  onSelect: (value: SelectValue) => void;
};

const Select: FC<SelectProps> = ({
  cureentValue,
  values,
  disabled,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleSelectClick = (value: SelectValue) => {
    setIsOpen(false);
    onSelect(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={style.container} ref={ref}>
      <button
        className={clsx(style.select, { [style.select_open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {cureentValue.title}
        <div className={style.icon}>
          <ArrowIcon />
        </div>
      </button>
      {isOpen && (
        <div className={style.body}>
          {values.map((value) => (
            <button
              key={value.value}
              className={style.option}
              onClick={() => handleSelectClick(value)}
            >
              {value.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
