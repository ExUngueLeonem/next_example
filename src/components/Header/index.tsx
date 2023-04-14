
import { FC, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Header: FC = () => {
    const { data: session, status } = useSession();

    const router = useRouter();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Posts", href: "/posts" },
        { name: "Contacts", href: "/contacts" },
    ]

    console.log("status", status)

    useEffect(() => {
        console.log("session", session)
    })



    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Logo
                {router.pathname}
                {session ?
                    <>
                        {session.user.image &&
                            <Image src={session.user.image} width={80} alt="avatar" height={80} />
                        }
                        Signed in as {session.user?.email} <br />
                        <button onClick={() => signOut()}>Sign out</button>
                    </>
                    :
                    <>
                        Not signed in <br />
                        <button onClick={() => signIn()}>Sign in</button>
                    </>
                }

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

export default Header;