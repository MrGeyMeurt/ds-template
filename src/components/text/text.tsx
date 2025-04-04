import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './text.module.css';

export interface TextProps extends ComponentPropsWithoutRef<'hr'> {
  content?: string;
  type?: string;
}

export const Text = ({ content, type, ...props }: TextProps) => {
  return <p className={clsx(classes['ds-text'], classes[`ds-text-${type}`])} {...props}>{content}</p>;
};