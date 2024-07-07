import classNames from 'classnames';
import styles from './about_us.module.scss';
import Astyles from '../../../App.module.scss';

export interface AboutUsProps {
    className?: string;
    bgImg?: string;
    header?: string;
}

export const AboutUs = ({ className, bgImg, header }: AboutUsProps) => {
    return (
        <div className={classNames(styles.root, Astyles.body_section, className)}>
            <section className={styles.text_div}>
                <h6>Delicious</h6>
                <h1>Our Shawarma Story: A Journey of Flavor</h1>
                <p>
                    At our shawarma company, we are passionate about delivering the most flavorful
                    and authentic shawarma experience. Our mission is to satisfy your cravings with
                    every bite, while our vision is to become the go-to destination for shawarma
                    lovers everywhere. At our shawarma company, we are passionate about delivering
                    the most flavorful and authentic shawarma experience. Our mission is to satisfy
                    your cravings with every bite, while our vision is to become the go-to
                    destination for shawarma lovers everywhere. At our shawarma company, we are
                    passionate about delivering the most flavorful and authentic shawarma
                    experience. Our mission is to satisfy your cravings with every bite, while our
                    vision is to become the go-to destination for shawarma lovers everywhere. At our
                    shawarma company, we are passionate about delivering the most flavorful and
                    authentic shawarma experience. Our mission is to satisfy your cravings with
                    every bite, while our vision is to become the go-to destination for shawarma
                    lovers everywhere.
                </p>
            </section>
            <section className={classNames(styles.card, Astyles.card_section)}>
                <div className={styles.card_image}>
                    <h1>Experience the Best Shawarma in Town</h1>
                    <img src="src/assets/shawarma1.png" alt="" />
                </div>
                <div className={styles.card_text}>
                    <h1>
                        Our shawarma is made with the finest ingredients and prepared using a
                        traditional method that ensures maximum flavor and tenderness.
                    </h1>
                    <div>
                        <h6>Freshness Guaranteed</h6>
                        <img src="" alt="" className={styles.icon} />
                        <p>
                            We source our ingredients locally to ensure the highest quality and
                            freshness.
                        </p>
                    </div>
                    <div>
                        <h6>Customizable Options</h6>
                        <img src="" alt="" className={styles.icon} />
                        <p>
                            Choose from a variety of toppings and sauces to personalize your
                            shawarma.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
