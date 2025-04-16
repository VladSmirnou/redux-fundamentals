import { ColorSelector } from '@/features/ui/todolist/task/color-selector/color-selector';
import { multipleSelectorWrapper } from './multiple-selector/multipleSelectorWrapper';
import type { ColorFilterPannelProps } from './types';

export const ColorFilterPannel = (props: ColorFilterPannelProps) => {
    const { colorTags, ...rest } = props;
    return (
        <ColorSelector
            colorTags={colorTags}
            defaulOptionText={'None'}
            render={multipleSelectorWrapper(rest)}
        />
    );
};
