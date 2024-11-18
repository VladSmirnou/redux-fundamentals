import { ReactElement } from 'react';

type Props = {
    colorTags: Array<string>;
    render: (JSXColorSelectOptions: Array<JSX.Element>) => ReactElement;
};

export const ColorSelector = (props: Props) => {
    const { colorTags, render } = props;

    const JSXColorSelectOptions = colorTags.map((colorTag) => {
        return (
            <option key={colorTag} value={colorTag}>
                {colorTag}
            </option>
        );
    });

    return render(JSXColorSelectOptions);
};
