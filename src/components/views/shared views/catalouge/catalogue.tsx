import classNames from 'classnames';
import styles from './catalouge.module.scss';

import arrays from '../../../arrays.json'

import { BottomfadeIn } from '../../../extras/FX';

export interface CatalogueProps {
    className?: string;
    setSignUpVisible?: any;
}

export const Catalogue = ({ className, setSignUpVisible }: CatalogueProps) => {
    return (
        <div className={classNames(styles.catalogue, className)}>
            <section>
                <h1>Our Catalogue</h1>
            </section>
            <section className={styles.row}>
                {arrays.catalogue.map((catalogueItem) => (
                    <BottomfadeIn>
                    <div className={styles.images}>
                        <img src="src/assets/shawarma1.png" alt={catalogueItem.name} />
                        <span>{catalogueItem.name}</span>
                    </div>
                    </BottomfadeIn>
                ))}
            </section>
        </div>
    );
};
