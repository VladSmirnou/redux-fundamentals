import type { ReactElement } from 'react';

export type ColorSelectorProps = {
    colorTags: Array<string>;
    defaulOptionText: string;
    render: (JSXColorSelectOptions: Array<JSX.Element>) => ReactElement;
};
