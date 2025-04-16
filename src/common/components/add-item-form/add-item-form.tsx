import { Button } from '../button/button';
import { ChangeEvent, memo, useState } from 'react';
import type { AddItemFormProps } from './types';

import cn from 'classnames';
import styles from './add-item-form.module.css';

export const AddItemForm = memo(function AddItemForm(props: AddItemFormProps) {
    const { onAddItem, className } = props;

    const [inputText, setInputText] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nextInputText = e.target.value;
        if (nextInputText.length > 20) {
            setErrorText('Title cannot be larger than 20 characters');
        } else {
            if (errorText) {
                setErrorText('');
            }
            setInputText(nextInputText);
        }
    };

    const handleAdditem = () => {
        if (!inputText) {
            setErrorText('Title cannot be empty');
            return;
        }
        onAddItem(inputText);
        setInputText('');
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="What needs to be done?"
                className={styles.input}
            />
            {errorText && <p className={styles.error}>{errorText}</p>}
            <Button
                className={styles.button}
                disabled={!!errorText}
                onClick={handleAdditem}
            >
                add
            </Button>
        </div>
    );
});
