import classNames from 'classnames';
import styles from './sub_hero.module.scss';

export interface SubHeroProps {
    className?: string;
    bgImg?: any;
    header?: any;
}

export const SubHero = ({ className, bgImg, header }: SubHeroProps) => {
    return (
        <>
            <div className={classNames(styles.hero, className)}>
                <section className={styles.hero_bg_image_div}>
                    <div className={styles.filter} />
                    <img src={bgImg} alt="" />
                </section>
                <section className={styles.text_section}>
                    <h1>{header}</h1>
                </section>
            </div>
            <div className={styles.transparent_top} />
        </>
    );
};
