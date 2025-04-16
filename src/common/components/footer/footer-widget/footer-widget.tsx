import type { FooterWidgetProps } from './types';

import cn from 'classnames';
import styles from './footer-widget.module.css';

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
