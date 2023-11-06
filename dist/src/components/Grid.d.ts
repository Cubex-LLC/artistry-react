import * as React from 'react';
export declare type GridSize = 'default' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export interface IGridProps {
    className?: string;
    id?: string;
    columns?: number;
    screenSize?: GridSize;
    fillWidth?: boolean;
    space?: boolean;
}
export default class Grid extends React.Component<IGridProps, any> {
    render(): JSX.Element;
}
export interface IGridExternalProps {
    grid?: boolean;
    gridColumns?: number;
    gridSize?: GridSize;
    gridSpace?: boolean;
}
export declare function gridConfig(classNames: string[], props: IGridExternalProps): void;
