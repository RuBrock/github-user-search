import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonAction = ({ text }: Props) => (
    <button className="btn-action">
        <span>{text}</span>
    </button>
);

export default ButtonAction;