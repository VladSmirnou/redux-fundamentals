import { Container } from '../container/container';

import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <h1 className={styles.title}>Redux Fundamentals Example</h1>
            </Container>
        </header>
    );
};
