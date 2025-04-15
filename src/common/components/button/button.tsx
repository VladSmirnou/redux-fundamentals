import cn from 'classnames';
import type { ButtonProps } from './types';

import styles from './button.module.css';

export const Button = (props: ButtonProps) => {
    const { className, ...rest } = props;
    return <button className={cn(styles.button, className)} {...rest} />;
};
