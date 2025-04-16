import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './footer-widget.module.css';

type FooterWidgetProps = PropsWithChildren & {
    title: string;
    modifierClasses?: {
        content?: string;
    };
};

export const FooterWidget = (props: FooterWidgetProps) => {
    const { title, children, modifierClasses } = props;

    const { content } = modifierClasses || {};

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>{title}</h3>
            <div className={cn(styles.content, content)}>{children}</div>
        </div>
    );
};
