import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  padding-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  /* background: yellow; */

  h1 {
    font-size: 2.625rem; /* 50% bigger for desktop */
    margin: 0;
    margin-bottom: 0.5rem;
  }

  ul {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 1.5rem; /* 50% bigger for desktop */
      padding: 1rem 3rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.65rem;
    }

    ul {
      li {
        font-size: 1rem;
        padding: 1rem 1rem;
      }
    }
  }

  @media (max-width: 475px) {
    h1 {
      font-size: 1.75rem;
    }

    ul {
      li {
        font-size: 1.125rem;
        padding: 0.8rem 0.8rem;
      }
    }
  }
`;

export default function Header({ children }) {
  return (
    <>
      <HeaderStyles>
        <h1>
          <Link href='/'>JOHN ORTH</Link>
        </h1>
        <ul>
          <li>
            <Link href='/projects'>PROJECTS</Link>
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
