import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import classNames from 'classnames';
import styles from './navbar.module.scss';
import arrays from '../../arrays.json';

import { Link } from 'react-router-dom';

import { Mbutton } from '../../extras/Button';
import { OffCbutton } from '../../extras/Button';

import { toKebabCase } from '../../constants';

import { useScrollPosition } from '../../extras/scrollContext';
import { color } from 'framer-motion';

export interface NavbarProps {
    className?: string;
    backgroundColor: string;
    setBackgroundColor: any;
    setOffCVisible?: any;
    setSignupVisible?: any;
}

export const Navbar = ({
    className,
    setOffCVisible,
    backgroundColor,
    setBackgroundColor,
}: NavbarProps) => {
    // useEffect(() => {
    //     const targetElement = document.getElementById('navbar'); // Replace with the actual ID of the target element
    //     if (targetElement) {
    //         const targetElementPosition = targetElement.offsetTop;
    //         const newColor = scrollPosition >= targetElementPosition ? 'blue' : 'transparent';
    //         setBackgroundColor(newColor);
    //     }
    // }, [scrollPosition]);

    const [boxShadow, setBoxShadow] = useState<string>(' ');
    const location = useLocation();
    const [threshold, setThreshold] = useState(0);

    useEffect(() => {
        window.location;

        // if the page is the home page then 
        location.pathname == '/'
            ? setThreshold(window.innerHeight - 90)
            // else if the page is a blog (or FAQ) page then
            : location.pathname.length > 15
            ? setThreshold(-100)
            // else the page is a regular page
            : setThreshold(window.innerHeight * 0.35 - 90);

        console.log('Page changed to:', location.pathname, threshold);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // alert(threshold)

            scrollPosition > threshold
                ? (setBackgroundColor('#1C0D0D'), setBoxShadow('0 0 40px .1px #1c1c1c9e'))
                : (setBackgroundColor('transparent'), setBoxShadow('none'))
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className={classNames(styles.root, className)}>
            <div
                id={styles.navbar}
                className={styles.navbar}
                style={{ backgroundColor, boxShadow }}
            >
                <section className={styles.logo_section}>
                    <Link to="/">
                        <img src="" alt="" />
                    </Link>
                </section>
                <section className={styles.links_section}>
                    {arrays.links.map((link) => (
                        <Link to={'/' + toKebabCase(link.name)}>
                            <Mbutton>{link.name}</Mbutton>
                        </Link>
                    ))}
                    </section>
                <section className={styles.CTA_section}>
                    <Mbutton>Order Now!</Mbutton>
                    <div className={styles.offCanvas}>
                        <OffCbutton
                            onClick={onclick}
                            setOffCVisible={setOffCVisible}
                            className="OffCanvas"
                        >
                            ≡
                        </OffCbutton>
                    </div>
                </section>
            </div>
        </div>
    );
};
