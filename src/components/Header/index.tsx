import Link from 'next/link'
import useUser from 'lib/useUser'
import { useRouter } from 'next/router'
import Image from 'next/image'
import fetchJson from 'lib/fetchJson'

import styles from './Header.module.scss';

export default function Header() {
  const { user, mutateUser } = useUser()
  const router = useRouter()

  return (
    <header className={styles.header}>
      <ul className={styles.navbar}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          {user?.isLoggedIn === false && (
            <li>
              <Link href="/login" >
                Login
              </Link>
            </li>
          )}
          {user?.isLoggedIn === true && (
            <>
              <li>
                <Link href="/profile-sg" legacyBehavior>
                  <a>
                    <span
                      style={{
                        marginRight: '.3em',
                        verticalAlign: 'middle',
                        borderRadius: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={user.avatarUrl}
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    Profile (Static Generation, recommended)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile-ssr">
                  Profile (Server-side Rendering)
                </Link>
              </li>
              <li>
                <Link
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault()
                    mutateUser(
                      await fetchJson('/api/logout', { method: 'POST' }),
                      false
                    )
                    router.push('/login')
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          )}
          <li>
            <a href="https://github.com/vvo/iron-session">
              <Image
                src="/GitHub-Mark-Light-32px.png"
                width="32"
                height="32"
                alt=""
              />
            </a>
          </li>
      </ul>
    </header>
  )
}
