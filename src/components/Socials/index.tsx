import { ISocials } from "@/models/socials";

import styles from './Socials.module.scss';

const Socials = ({ socials }: { socials: ISocials[] }) => {
    return (
        <div className={styles.container}>
            {socials && socials.map(item => (
                <div key={item.id} className={styles.socials_item}>
                    <a href={item.path}>
                       <i className={`fab fa-${item.icon}`} aria-hidden="true"/>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Socials;