export type ColorFilterPannelProps = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};
