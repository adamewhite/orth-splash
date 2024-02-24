import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  padding-bottom: 1rem;
  /* background: yellow; */

  h1 {
    font-size: 1.4rem;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;

    li {
      font-size: 0.8rem;
      padding: 1rem 3rem;
    }
  }

  @media (max-width: 475px) {
    ul {
      li {
        font-size: 0.8rem;
        padding: 1rem;
      }
    }
  }
`;

export default function Header({ children }) {
  return (
    <>
      <Head>
        <title>JOHN ORTH</title>
        <meta
          property='og:title'
          content='John Orth'
        />
        <meta
          property='og:type'
          content='video.movie'
        />
        <meta
          property='og:url'
          content='johnorth.com'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dixi5g16o/image/upload/v1708803648/13_pxrefk.jpg'
        />
      </Head>
      <HeaderStyles>
        <h1>
          <Link href='/'>JOHN ORTH</Link>
        </h1>
        <ul>
          <li>
            <Link href='/emporium'>PROJECTS</Link>
          </li>

          <li>
            <Link href='/cv'>CV</Link>
          </li>

          <li>
            <Link href='/contact'>CONTACT</Link>
          </li>
        </ul>
      </HeaderStyles>
      {children}
    </>
  );
}
