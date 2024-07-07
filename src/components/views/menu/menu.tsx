import classNames from 'classnames';
import styles from './menu.module.scss';
import Astyles from '../../../App.module.scss';

import arrays from '../../arrays.json';

export interface MenuProps {
    className?: string;
}

export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, Astyles.body_section)}>
            <section className={styles.text_div}>
                <h6>Delicious</h6>
                <h1>Take a look at our mouth water selection </h1>
            </section>
            <section className={styles.menu}>
                {arrays.shawarmaOptions.map((menuItem) => (
                    <div className={classNames(styles.menu_card, Astyles.card_section)}>
                        <img src={menuItem.imgURL} alt="" />
                        <div>
                            <h1>{menuItem.name}</h1>
                            <p>{menuItem.paragraph}</p>
                            <span>{menuItem.price}</span>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
