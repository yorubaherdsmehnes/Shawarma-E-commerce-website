import classNames from 'classnames';
import styles from './home.module.scss';
import Astyles from '../../../App.module.scss'

import { Hero } from './Hero/hero';
import { Catalogue } from '../shared views/catalouge/catalogue';
import { ScrollProvider } from '../../extras/scrollContext';

export interface HomeProps {
    className?: string;
    setSignUpVisible?: any;
}

export const Home = ({ className, setSignUpVisible }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Hero />
            <div className={styles.transparent_top}/>
            <Catalogue />
        </div>
    );
};
