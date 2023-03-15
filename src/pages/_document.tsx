import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'

const Document: FC = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
      </Head>
      <body className='main-container'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;