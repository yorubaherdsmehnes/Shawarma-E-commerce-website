import classNames from 'classnames';
import styles from './blog.module.scss';
import Astyles from '../../../App.module.scss';

import arrays from '../../arrays.json';

import { Link } from 'react-router-dom';

import { toKebabCase } from '../../constants';
import { shortenText } from '../../constants';

export interface BlogProps {
    className?: string;
    bgImg?: string;
    header?: string;
}

export const Blog = ({ className, bgImg, header }: BlogProps) => {
    const maxLength = 150;

    return (
        <div className={classNames(styles.root, Astyles.body_section)}>
            <section className={styles.text_div}>
                <h6>Delicious</h6>
                <h1>Explore our blog for delicious shawarma recipes and more</h1>
            </section>
            <section className={styles.blog}>
                {arrays.blog.map((blogItem) => (
                    <div className={styles.blog_card}>
                        <img src={blogItem.item[0].image} alt="" />
                        <div className={styles.blog_text}>
                            <h6>{blogItem.catergory}</h6>
                            <h1>{blogItem.heading}</h1>
                            <p>{shortenText(blogItem.paragraph, maxLength)}</p>
                            <Link to={'/blog/' + toKebabCase(blogItem.heading)}>
                                <span>Read More › </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
