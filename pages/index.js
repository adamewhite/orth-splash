import Head from 'next/head';
import Image from 'next/image';
import Watermelon from '../public/johnwatermelon.jpeg';
import styled from 'styled-components';

const HomeStyles = styled.main`
  width: 100%;
  height: calc(100vh - 11rem); /* Viewport height minus header and body margins */
  max-height: 70vh; /* Limit image height */
  display: flex;
  justify-content: center;
  align-items: center; /* Center the image vertically */
  overflow: hidden; /* Prevent any overflow */

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 70vh;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 9rem); /* Account for smaller body margins and header on tablet */
    max-height: 65vh; /* Slightly smaller on tablet */

    .image-container {
      max-height: 65vh;
    }
  }

  @media (max-width: 475px) {
    height: calc(100vh - 8rem); /* Account for smallest body margins and header on mobile */
    max-height: 70vh;

    .image-container {
      max-height: 70vh;
    }
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
