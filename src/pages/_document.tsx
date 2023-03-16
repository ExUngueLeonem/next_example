import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'

const Document: FC = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" />
      </Head>
      <body className='main-container'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;