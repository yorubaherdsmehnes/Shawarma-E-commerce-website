import React from 'react';
import { motion } from 'framer-motion';

export interface buttonProps {
    className?: string;
    setOffCVisible?: any;
    setSignupVisible?: any;
    children?: any;
    onClick?: any;
    type?: string;
}
const Button = {
    active: {
        scale: 0.9,
        boxShadow: '0 0 5px 0.5px #00000051',
    },
    hover: {
        scale: 1.1,
        boxShadow: '0 0 5px 0.5px #00000051',
    },
};

export const OffCbutton = ({ setOffCVisible, children }: buttonProps) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <motion.button
                variants={Button}
                whileHover="hover"
                whileTap="active"
                onClick={() => setOffCVisible(true)}
            >
                {children}
            </motion.button>
        </div>
    );
};

export const Mbutton = ({ setSignupVisible, children }: buttonProps) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <motion.button
                variants={Button}
                whileHover="hover"
                whileTap="active"
                onClick={() => setSignupVisible(true)}
            >
                {children}
            </motion.button>
        </div>
    );
};

export const SignUpButton = ({ setSignupVisible, children }: buttonProps) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <motion.button
                variants={Button}
                whileHover="hover"
                whileTap="active"
                onClick={() => setSignupVisible(true)}
            >
                {children}
            </motion.button>
        </div>
    );
};

export const SubmitButton = ({ type, children }: buttonProps) => {
    return (
        <div style={{ display: 'inline-block' }}>
        <motion.button
            variants={Button}
            whileHover="hover"
            whileTap="active"
            type='submit'
        >
            {children}
        </motion.button>
        </div>
    );
};
