import classNames from 'classnames';
import styles from './catering.module.scss';
import Astyles from '../../../App.module.scss'

export interface CateringProps {
    className?: string;
    bgImg?: string;
    header?: string;
}

export const Catering = ({ className, bgImg, header  }: CateringProps) => {
    return (
        <div className={classNames(styles.root, Astyles.body_section)}>
        </div>
    );
};