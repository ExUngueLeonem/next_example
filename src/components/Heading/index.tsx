
import { FC } from 'react';
import Link from 'next/link';
import styles from './Heading.module.scss';
import { useRouter } from 'next/router';

const Heading: FC = () => {
    const router = useRouter();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Posts", href: "/posts" },
        { name: "Contacts", href: "/contacts" },
    ]

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Logo
                {router.pathname}
            </div>
            <div className={styles.nav_list}>
                {navLinks.map(item => {
                    let activeClass
                    if (router.pathname === item.href) activeClass = styles.active
                    return <Link className={activeClass} key={item.name} href={item.href}>{item.name}</Link>
                })}
            </div>
        </div>
    );
};

export default Heading;