import { ISocials } from "models/socials";
import { FC } from "react";

import styles from './Socials.module.scss';

interface IProps {
    socials: ISocials[]
}

const Socials: FC<IProps> = ({ socials }) => {
    return (
        <div className={styles.container}>
            {socials && socials.map(item => (
                <div key={item.id} className={styles.socials_item}>
                    <a href={item.path}>
                        <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Socials;