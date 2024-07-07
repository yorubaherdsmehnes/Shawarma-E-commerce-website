import classNames from 'classnames';
import styles from './hero.module.scss';

import { Link } from 'react-router-dom';

import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import { Mbutton } from '../../../extras/Button';

import arrays from '../../../arrays.json'

export interface HeroProps {
    className?: string;
    setSignUpVisible?: any;
}

export const Hero = ({ className, setSignUpVisible }: HeroProps) => {

    return (
        <div className={classNames(styles.hero, className)}>
            <section className={styles.hero_bg_image_div}>
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        pauseOnMouseEnter: true,
                    }}
                    effect="fade"
                    grabCursor={true}
                    speed={2000}
                    modules={[Autoplay, EffectFade]}
                    className={styles.swiper}
                    style={{flex: 'none'}}
                >
                    {/* image looping */}
                    {arrays.shawarmaOptions.map((image) => (
                        <SwiperSlide key={image.id}>
                            {/* image itself */}
                            <Link to='/order'>
                                <img
                                    className={styles.heroBG}
                                    src={image.imgURL}
                                    alt={image.name}
                                />
                            </Link>
                            {/* image itself */}
                        </SwiperSlide>
                    ))}
                    {/* image looping */}
                </Swiper>
            </section>
            <section className={styles.text_section}>
                <h1><span>Indulge Yourself in Shawarma,</span> Made Just for You</h1>
                <h2>Savor the flavors of our mouthwatering shawarma, prepared and served hot. </h2>
                <Mbutton>Explore our Menu</Mbutton>
            </section>
        </div>
    );
};
