import classNames from 'classnames';
import styles from './offCanvas.module.scss';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import arrays from '../../../arrays.json';

import { toKebabCase } from '../../../constants';

import { Mbutton } from '../../../extras/Button';

export interface OffcanvasMenuProps {
    className?: string;
    children?: any;
    onClick?: any;
    visible?: boolean;
    setVisible?: any;
    handleClose?: any;
    text?: string;
}

const dropIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 30,
            stiffness: 200,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            type: 'spring',
            damping: 30,
            stiffness: 200,
        },
    },
};

export const OffcanvasMenu = ({
    className,
    children,
    onClick,
    handleClose,
    visible,
    setVisible,
}: OffcanvasMenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <motion.div
                onClick={() => setVisible(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.motion_div}
            >
                <div className={styles.offcanvas_backdrop}></div>
                <div className={styles.offcanvas} onClick={handleClose}>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className={styles.offcanvas_modal}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Offcanvas Header */}

                        <div className={styles.header}>
                            <Link to="/">
                                <h1>Shawarma</h1>
                            </Link>

                            {/* Close button */}

                            <div className={styles.close_button}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={styles.toggle_btn}
                                    onClick={() => setVisible(false)}
                                >
                                    ×
                                </motion.button>
                            </div>

                            {/* Close button */}
                        </div>

                        <div className={styles.body}>
                            <div className={styles.nav_button_links}>
                                {arrays.links.map((link) => (
                                    <>
                                        <Link to={'/' + toKebabCase(link.name)}>
                                            <Mbutton className={styles.navbar_buttons}>
                                                {link.name}
                                            </Mbutton>
                                        </Link>
                                        <hr />
                                    </>
                                ))}
                                <span className={styles.order_button}>
                                    <Mbutton>Order Now</Mbutton>
                                    <hr />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
