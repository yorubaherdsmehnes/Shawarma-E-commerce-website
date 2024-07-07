import classNames from 'classnames';
import styles from './footer.module.scss';

import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import arrays from '../../arrays.json';

import { ReactComponent as Facebook } from '../../../assets/SVG/facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/SVG/instagram.svg';
import { ReactComponent as TwitterX } from '../../../assets/SVG/twitter-x.svg';
import { ReactComponent as LinkedIn } from '../../../assets/SVG/linked-in.svg';
import { ReactComponent as YouTube } from '../../../assets/SVG/youtube.svg';

import styled from 'styled-components';

import { Mbutton } from '../../extras/Button';
import { Link } from 'react-router-dom';

export interface FooterProps {
    className?: string;
}

interface ButtonProps {
    color?: any;
}

const currentYear = new Date().getFullYear();

const footerStyle = {
    position: '',
    backgroundColor: 'blue'
}

export const Footer = ({ className }: FooterProps) => {
    const location = useLocation();

    const Button = styled.button<ButtonProps>`
        background-color: ${(props) => props.color};
    `;

    useEffect(() => {
        window.location;
        const pageHeight = document.body.offsetHeight
        console.log(`The page height is ${document.body.offsetHeight}`);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // scrollPosition > (pageHeight - 30) ? footerStyle.positon = 'fixed' : footerStyle.positon = 'inherent' ;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const components = [<Facebook />, <Instagram />, <TwitterX />, <LinkedIn />, <YouTube />];

    return (
        <>
            <div className={classNames(styles.footer, className)}>
                <section className={styles.logo_section}>
                    <h1>Shawarma Joint</h1>
                    <h6>
                        Savor the flavors of our mouthwatering shawarma, prepared and served hot.{' '}
                    </h6>
                </section>
                <section className={styles.links_section}>
                    <div className={styles.buttons}>
                        <Mbutton className={styles.orderButton}>Order Now</Mbutton>
                        <Mbutton>Menu</Mbutton>
                        <Mbutton>Locations</Mbutton>
                        <Mbutton>Contacts</Mbutton>
                    </div>
                </section>
                <section className={styles.icons_section}>
                    {arrays.icons.footerSVGs.map((svg) => (
                        <>
                            <Link to={'https://www.' + svg.name + '.com'} className={styles.icons}>
                                <Mbutton>
                                    <button color="blue">{components[svg.id - 1]}</button>
                                    <h6>{svg.name}</h6>
                                </Mbutton>
                            </Link>
                        </>
                    ))}
                </section>
                <hr />
                <section className={styles.copyright_section}>
                    <h6>© {currentYear} Shawarma Delight. All rights reserved.</h6>
                    {/* © yorubaherdsmehnes */}
                </section>
            </div>
        </>
    );
};
