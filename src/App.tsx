import { useState, useEffect } from 'react';

// Importing of React Routing
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Importing styles from App module
import styles from './App.module.scss';

// Importing Array from JSON
import arrays from './components/arrays.json';

// Page Imports

// Importing Navbar
import { Navbar } from './components/partial/navbar/navbar';

// Importing Individual Pages
import { Home } from './components/views/home/home';
import { AboutUs } from './components/views/about us/about_us';
import { OurAdvantage } from './components/views/our_advantage/our_advantage';
import { Catering } from './components/views/catering/catering';
import { Menu } from './components/views/menu/menu';
import { Blog } from './components/views/blog/blog';
import { Contacts } from './components/views/contacts/contacts';

// Importing Footer
import { Footer } from './components/partial/footer/footer';

// Importing Extra Page Components
import { Hero } from './components/views/home/Hero/hero';
import { SubHero } from './components/views/shared views/sub hero/sub_hero';
import { Catalogue } from './components/views/shared views/catalouge/catalogue';
import { BlogItem } from './components/views/blog/blogItem/blogItem';

import { PageChangeComponent } from './components/extras/PageChangeComponent';

import { OffcanvasMenu } from './components/views/shared views/offCanvas/offCanvas';

// Importing Font Casing
import { toCoolCase, toKebabCase } from './components/constants';
import React from 'react';

// Function for converting string to Component
// function toComponentCase(str: string): string {
//     return str.replace('"', '"');
// }

function App() {
    const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
    const bodySection = document.querySelector(`.${styles.body_section}`);

    // UseState hook for Offcanvas toggling
    const [OCvisible, setOffCVisible] = useState(false);
    const [SUvisible, setSignUpVisible] = useState(false);
    const [scrollThreshold, setScrollThreshold] = useState<number>(0);

    const $black = '#1C0D0D';

    const pageURL = window.location.pathname;
    console.log(`page url: ${pageURL}`);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            arrays.links.map((key: any) => {
                for (let i = 0; pageURL === `/${toKebabCase(arrays.links[i].name)}`; i++) {
                    const arrayPageUrl = `/${toKebabCase(arrays.links[i].name)}`;
                }
            });
        };

    }, []);


    

    const components = [<AboutUs />, <OurAdvantage />, <Menu />, <Blog />, <Contacts />];
    return (
        <div className={styles.App}>
            <Router>

                {OCvisible && <OffcanvasMenu visible={OCvisible} setVisible={setOffCVisible}/>}
                
                
                <Navbar
                    setBackgroundColor={setBackgroundColor}
                    backgroundColor={backgroundColor}
                    setOffCVisible={setOffCVisible}
                    setSignupVisible={setSignUpVisible}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />

                    {arrays.links.map((link) => (
                        <Route
                            path={'/' + toKebabCase(link.name)}
                            element={
                                <>
                                    <SubHero bgImg={link.imgURL} header={link.name} />
                                    {components[link.id - 1]}
                                    <Catalogue />
                                </>
                            }
                        />
                    ))}
                    {arrays.blog.map((blogItem) => (
                        <Route
                            path={'/blog/' + toKebabCase(blogItem.heading)}
                            element={<BlogItem blogItem={blogItem} />}
                        />
                    ))}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
