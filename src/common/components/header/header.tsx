import { Container } from '../container/container';
import s from './header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <h1 className={s.title}>Redux Fundamentals Example</h1>
            </Container>
        </header>
    );
};
