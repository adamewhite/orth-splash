import Head from 'next/head';
import Image from 'next/image';
import Watermelon from '../public/johnwatermelon.jpeg';
import styled from 'styled-components';

const HomeStyles = styled.main`
  width: 100%;
  height: calc(100dvh - 11rem); /* Dynamic viewport height minus header and body margins */
  display: flex;
  justify-content: center;
  align-items: center; /* Center the image vertically */
  overflow: hidden; /* Prevent any overflow */

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: calc(100dvh - 9rem); /* Account for smaller body margins and header on tablet */
  }

  @media (max-width: 475px) {
    height: calc(100dvh - 8rem); /* Account for smallest body margins and header on mobile */
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <div className="image-container">
        <Image
          src={Watermelon}
          alt='Watermelon Installation'
          fill
          style={{ objectFit: 'contain' }}
          placeholder='blur'
          priority
        />
      </div>
    </HomeStyles>
  );
}
