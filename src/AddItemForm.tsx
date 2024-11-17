import { ChangeEvent, memo, useState } from 'react';

type Props = {
    onAddItem: (value: string) => void;
};

export const AddItemForm = memo(function AddItemForm(props: Props) {
    const { onAddItem } = props;

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
        <div>
            <input type="text" value={inputText} onChange={handleChange} />
            {errorText && <p>ti dolbaeb</p>}
            <button disabled={!!errorText} onClick={handleAdditem}>
                add
            </button>
        </div>
    );
});
