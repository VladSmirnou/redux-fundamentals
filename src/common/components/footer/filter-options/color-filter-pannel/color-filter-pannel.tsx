import { ColorSelector } from '../../../../../features/ui/todolist/tasks/task/color-selector/color-selector';
import { multipleSelectorWrapper } from './multiple-selector/multipleSelectorWrapper';

type Props = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

export const ColorFilterPannel = (props: Props) => {
    const { colorTags, ...rest } = props;
    return (
        <div>
            <h3>Select color tags to filter tasks:</h3>
            <ColorSelector
                colorTags={colorTags}
                defaulOptionText={'None'}
                render={multipleSelectorWrapper(rest)}
            />
        </div>
    );
};
