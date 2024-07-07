import classNames from 'classnames';
import styles from './our_advantage.module.scss';
import Astyles from '../../../App.module.scss';

import arrays from '../../arrays.json'

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';

export interface OurAdvantageProps {
    className?: string;
    bgImg?: string;
    header?: string;
}

export const OurAdvantage = ({ className, bgImg, header }: OurAdvantageProps) => {
    return (
        <div className={classNames(styles.root, Astyles.body_section, className)}>
            <section className={styles.text_div}>
                <h6>Delicious</h6>
                <h1>Why Choose Us for Your Shawarma Cravings</h1>
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
                <h1>Why Our Shawarma</h1>
                <div className={styles.features_div}>
                    {arrays.icons.features.map((feature) => (
                        <div className={styles.feature_item}>
                            <img src="src/assets/SVG/facebook.svg" alt="" />
                            <h1>{feature.heading}</h1>
                            <p>{feature.paragraph}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.testimonial}>
                <h6>Still in doubt</h6>
                <h1>Listen to what Our Satisfied Customers Have to Say </h1>
                <Swiper
                    spaceBetween={100}
                    loop={true}
                    slidesPerView={3}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                    }}
                    grabCursor={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    speed={2000}
                    modules={[Autoplay, Pagination]}
                    className={styles.swiper}
                    style={
                        {
                            '--swiper-pagination-color': '#1C0D0D',
                            '--swiper-pagination-bullet-inactive-opacity': '.2',
                        } as React.CSSProperties
                    }
                >
                    {/* image looping */}
                    {arrays.testimonial.map((testimonialItem) => (
                        <SwiperSlide key={testimonialItem.id}>
                            <div className={styles.testimonial_card}>
                                <div className={styles.top}>
                                    <img
                                        className={styles.icon}
                                        src="src/assets/mock_image.png"
                                        alt={'Picture of ' + testimonialItem.name}
                                    />
                                    <h2>{testimonialItem.name}</h2>
                                </div>
                                <div className={styles.paragraph}>
                                    <p>{testimonialItem.testimonial}</p>
                                </div>
                                <hr />
                                <div className={styles.rating}>
                                    {Array.from({ length: testimonialItem.rating }).map(
                                        (_, index) => (
                                            <img key={index} src="src/assets/PNG/star.png" />
                                        )
                                    )}
                                </div>
                            </div>
                            <img className={styles.bgImg} src="src/assets/SVG/quotes-svgrepo-com.svg" alt="" />
                        </SwiperSlide>
                    ))}
                    {/* image looping */}
                </Swiper>
            </section>
        </div>
    );
};
