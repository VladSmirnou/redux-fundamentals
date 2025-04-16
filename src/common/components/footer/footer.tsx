import { ActiveTasksCount } from './active-task-count/active-tasks-count';
import { ColorFilterPannel } from './filter-options/color-filter-pannel/color-filter-pannel';
import { FilterOptions } from './filter-options/filter-options';
import { FooterWidget } from './footer-widget/footer-widget';
import { TasksActions } from './tasks-actions/tasks-actions';
import type { FooterProps, FooterWidgetData } from './types';

import styles from './footer.module.css';

export const Footer = (props: FooterProps) => {
    const {
        filterByStatusValue,
        onSetFilterByStatusValue,
        onSetFilterByColorTagValues,
        colorTags,
        selectedColorTags,
    } = props;

    const footerWidgets: Array<FooterWidgetData> = [
        {
            title: 'Remaining todos',
            content: <ActiveTasksCount />,
            modifierClasses: {
                content: styles.active_task_count,
            },
        },
        {
            title: 'Actions',
            content: <TasksActions />,
        },
        {
            title: 'Filer by task status:',
            content: (
                <FilterOptions
                    filterByStatusValue={filterByStatusValue}
                    onSetFilterByStatusValue={onSetFilterByStatusValue}
                />
            ),
        },
        {
            title: 'Select color tags to filter tasks:',
            content: (
                <ColorFilterPannel
                    colorTags={colorTags}
                    selectedColorTags={selectedColorTags}
                    onSetFilterByColorTagValues={onSetFilterByColorTagValues}
                />
            ),
        },
    ];

    return (
        <div className={styles.footer}>
            {footerWidgets.map(({ title, content, modifierClasses }) => {
                return (
                    <FooterWidget
                        modifierClasses={modifierClasses}
                        key={title}
                        title={title}
                    >
                        {content}
                    </FooterWidget>
                );
            })}
        </div>
    );
};
