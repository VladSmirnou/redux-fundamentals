import { PropsWithChildren } from 'react';
import s from './container.module.css';

export const Container = ({ children }: PropsWithChildren) => {
    return <div className={s.container}>{children}</div>;
};
