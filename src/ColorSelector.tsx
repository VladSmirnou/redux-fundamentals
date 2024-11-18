import { ChangeEvent } from 'react';

type Props = {
    colors: Array<string>;
    selectedColorTag?: string;
    selectedColorTags?: Array<string>;
    onSetColorTag?: (colorTag: string) => void;
    onSetColorTags?: (colorTags: Array<string>) => void;
};

export const ColorSelector = (props: Props) => {
    const {
        colors,
        selectedColorTag,
        selectedColorTags,
        onSetColorTag,
        onSetColorTags,
    } = props;

    const JSXColorSelectOptions: Array<JSX.Element> = [
        <option key={'default'} value={'default'} disabled>
            color tag
        </option>,
    ];

    colors.forEach((color) => {
        JSXColorSelectOptions.push(
            <option key={color} value={color}>
                {color}
            </option>,
        );
    });

    const multiple = !!selectedColorTags;

    const handleSetColorTag = (e: ChangeEvent<HTMLSelectElement>) => {
        onSetColorTag?.(e.target.value);
    };

    const handleSetColorTags = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedColorTags = Array.from(
            e.target.selectedOptions,
            (option) => option.value,
        );
        onSetColorTags?.(selectedColorTags);
    };

    return (
        <select
            multiple={multiple}
            value={
                multiple ? selectedColorTags : (selectedColorTag ?? 'default')
            }
            onChange={onSetColorTags ? handleSetColorTags : handleSetColorTag}
        >
            {JSXColorSelectOptions}
        </select>
    );
};
