import { FilterColorTagValue } from './types';

type Props = {
    filterByColorTagValues: FilterColorTagValue;
};

export const ColorFilterPannel = (props: Props) => {
    const { filterByColorTagValues } = props;

    return (
        <div>
            <span>Select color tags to filer tasks:</span>
            <select name="" id="">
                <option value="">color</option>
            </select>
        </div>
    );
};
