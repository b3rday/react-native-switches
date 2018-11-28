/// <reference types="react" />
import * as React from 'react';
export declare type IProps = {
    animationDuration?: number;
    borderColor?: string;
    borderWidth?: number;
    buttonColor?: string;
    buttonSize?: number;
    buttonOffsetLeft?: number;
    buttonOffsetRight?: number;
    colorSwitchOff?: string;
    colorSwitchOn?: string;
    colorTextOff?: string;
    colorTextOn?: string;
    disabled?: boolean;
    easingFunction?: () => void;
    icon?: any;
    onChange: () => void;
    shape: string;
    showText?: boolean;
    sliderHeight?: number;
    sliderWidth?: number;
    spaceBetween?: number;
    testID?: string;
    textFont?: string;
    textOff?: string;
    textOn?: string;
    textSize?: number;
    value: boolean;
};
export declare type IState = {};
declare class Switches extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    handleSwitch: () => void;
    renderLineSwitch: () => JSX.Element;
    renderPillSwitch: () => JSX.Element;
    renderSwitches: () => JSX.Element | null;
    render(): JSX.Element;
}
export default Switches;
