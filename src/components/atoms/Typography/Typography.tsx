import { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

import style from './Typography.module.scss';

type TypographyVariants = 'paragraph_16' | 'paragraph_14' | 'title';

type TypographyTags = 'h1' | 'h2' | 'h3' | 'div' | 'p' | 'span';

type TypographyProps<Tag extends TypographyTags> = ComponentProps<Tag> & {
  variant?: TypographyVariants;
  tag?: TypographyTags;
  children: ReactNode;
};

const Typography = <Tag extends TypographyTags = 'div'>({
  className = '',
  variant = 'paragraph_16',
  tag: Tag = 'div',
  children,
}: TypographyProps<Tag>) => (
  <Tag className={clsx(style[variant], className)}>{children}</Tag>
);

export { Typography };
