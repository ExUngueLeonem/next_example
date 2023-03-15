
import { FC } from 'react';
import Link from 'next/link';
import styles from './Heading.module.scss';

const Heading: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.nav_list}>
                <Link href={"/"}>Home</Link>
                <Link href={"/posts"}>Posts</Link>
                <Link href={"/contacts"}>Contacts</Link>
            </div>
        </div>
    );
};

export default Heading;