import React from 'react';
interface IconProps {
    icon?: string;
    iconStyles?: string;
    iconLibrary?: string;
    isLink?: boolean;
    linkTo?: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export declare const Icon: React.FC<IconProps>;
export {};