import { ReactElement } from 'react';
import { DEFAULT_OPTION_VALUE } from './constants';

type Props = {
    colorTags: Array<string>;
    defaulOptionText: string;
    render: (JSXColorSelectOptions: Array<JSX.Element>) => ReactElement;
};

export const ColorSelector = (props: Props) => {
    const { colorTags, render, defaulOptionText } = props;

    const JSXColorSelectOptions: Array<JSX.Element> = [];

    const defaultOption = (
        <option key={DEFAULT_OPTION_VALUE} value={DEFAULT_OPTION_VALUE}>
            {defaulOptionText}
        </option>
    );

    JSXColorSelectOptions.push(defaultOption);

    colorTags.forEach((colorTag) => {
        JSXColorSelectOptions.push(
            <option key={colorTag} value={colorTag}>
                {colorTag}
            </option>,
        );
    });

    return render(JSXColorSelectOptions);
};
