import classNames from 'classnames';
import styles from './contacts.module.scss';
import Astyles from '../../../App.module.scss';

import arrays from '../../arrays.json';

import { SubmitButton } from '../../extras/Button';

import { Link } from 'react-router-dom';

export interface ContactsProps {
    className?: string;
    bgImg?: string;
    header?: string;
}

const toKebabCase = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, '-');
};

const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
};

export const Contacts = ({ className, bgImg, header }: ContactsProps) => {

const maxLength = 150;

    

   

    return (
        <div className={classNames(styles.root, Astyles.body_section, className)}>
            <section className={styles.text_div}>
                <h6>Want to Know more</h6>
                <h1>Get in touch</h1>
                <div className={styles.inputs}>
                    <div className={styles.input_item}>
                        <label>First Name</label>
                        <input type="text" name="fName" />
                    </div>
                    <div className={styles.input_item}>
                        <label>Last Name</label>
                        <input type="text" name="lName" />
                    </div>
                    <div className={styles.input_item}>
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.input_item}>
                        <label>Phone Number</label>
                        <input type="tel" name="telNumber" />
                    </div>
                </div>
                <div className={styles.message}>
                    <label>Message</label>
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Type something here"
                    ></textarea>
                    <SubmitButton>Submit</SubmitButton>
                </div>
            </section>
            <section className={classNames(styles.card, Astyles.card_section)}>
                <h1>Why Our Shawarma</h1>
                <div className={styles.contact_div}>
                    {arrays.icons.contacts.map((contact) => (
                        <div className={styles.contact_item}>
                            <img src={'src/assets/SVG/twitter-x.svg'} alt="" />
                            <h1>{contact.name}</h1>
                            <p>{contact.paragraph}</p>
                            <span>{contact.link}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className={classNames(styles.text_div, styles.faq)}>
                <h6>Still have Questions</h6>
                <h1>Find answers to some common questions </h1>
                <div className={styles.faq_container}>
                    <hr />
                    {arrays.faqs.map((faq) => (
                        <aside>
                            <h2>{faq.heading}</h2>
                            <Link to={'/contact/faq/' + toKebabCase(faq.heading)}>
                                <span>Read More › </span>
                            </Link>
                            <p>{faq.paragraph}</p>
                            <hr />
                        </aside>
                    ))}
                </div>
            </section>
        </div>
    );
};
