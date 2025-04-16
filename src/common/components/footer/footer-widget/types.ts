import type { PropsWithChildren } from 'react';

export type FooterWidgetProps = PropsWithChildren & {
    title: string;
    modifierClasses?: {
        content?: string;
    };
};
