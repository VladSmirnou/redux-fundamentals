import { Button } from '../button/button';
import { ChangeEvent, memo, useState } from 'react';
import cn from 'classnames';
import s from './add-item-form.module.css';

type Props = {
    onAddItem: (value: string) => void;
    className?: string;
};

export const AddItemForm = memo(function AddItemForm(props: Props) {
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
        <div className={cn(s.wrapper, className)}>
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="What needs to be done?"
                className={s.input}
            />
            {errorText && <p className={s.error}>{errorText}</p>}
            <Button
                className={s.button}
                disabled={!!errorText}
                onClick={handleAdditem}
            >
                add
            </Button>
        </div>
    );
});
