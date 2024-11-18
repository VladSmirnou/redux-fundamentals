import { ColorSelector } from './ColorSelector';
import { FilterColorTagValue } from './types';

type Props = {
    filterByColorTagValues: FilterColorTagValue;
    setFilterByColorTagValuesHandler: (filterValueTags: Array<string>) => void;
};

export const ColorFilterPannel = (props: Props) => {
    const { filterByColorTagValues, setFilterByColorTagValuesHandler } = props;
    const colors = Object.keys(filterByColorTagValues);

    const selectedColorTags = Object.entries(filterByColorTagValues).reduce(
        (colorTags, [colorTag, { selected }]) => {
            if (selected) {
                colorTags.push(colorTag);
            }
            return colorTags;
        },
        [] as Array<string>,
    );

    return (
        <div>
            <span>Select color tags to filer tasks:</span>
            <ColorSelector
                colors={colors}
                selectedColorTags={selectedColorTags}
                onSetColorTags={setFilterByColorTagValuesHandler}
            />
        </div>
    );
};
