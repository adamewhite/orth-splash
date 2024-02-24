import Link from 'next/link';
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
