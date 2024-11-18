import { ColorSelector } from './ColorSelector';
import { multipleSelectorWrapper } from './multipleSelectorWrapper';

type Props = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

export const ColorFilterPannel = (props: Props) => {
    const { colorTags, ...rest } = props;
    return (
        <div>
            <span>Select color tags to filter tasks:</span>
            <ColorSelector
                colorTags={colorTags}
                render={multipleSelectorWrapper(rest)}
            />
        </div>
    );
};
