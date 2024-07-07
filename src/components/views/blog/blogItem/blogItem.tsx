import styles from './blogItem.module.scss';
import Astyles from '../../../../App.module.scss';
import classNames from 'classnames';

export interface BlogItemProps {
    className?: string;
    blogItem?: any;
}

export const BlogItem = ({ blogItem }: BlogItemProps) => {
    return (
        <div className={classNames(Astyles.body_section, styles.blog)}>
            <section>
                <div className={styles.head_div}>
                <h1>{blogItem.heading}</h1>
                <h6>{blogItem.catergory}</h6>
                </div>
                <p>{blogItem.paragraph}</p>
                {blogItem.item.map((item: any) => (
                    <>
                        <p>{item.innerParagraph}</p>
                        <div className={styles.image}>
                            <img src={`/${item.image.slice(0)}`} alt="" />
                        </div>
                        {/* <img src="/assets/shawarma1.png" alt="" /> */}
                    </>
                ))}
            </section>
        </div>
    );
};
