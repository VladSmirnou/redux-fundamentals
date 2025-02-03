import { ChangeEvent, memo, useState } from 'react';
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
            setErrorText('title cannot be larger than 20 characters');
        } else {
            if (errorText) {
                setErrorText('');
            }
            setInputText(nextInputText);
        }
    };

    const handleAdditem = () => {
        onAddItem(inputText);
        setInputText('');
    };

    return (
        <div className={s.wrapper + ' ' + className}>
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="What needs to be done?"
                className={s.input}
            />
            {errorText && <p>{errorText}</p>}
            <button
                className={s.button}
                disabled={!!errorText}
                onClick={handleAdditem}
            >
                add
            </button>
        </div>
    );
});
