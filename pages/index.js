import Head from 'next/head';
import Image from 'next/image';
import Watermelon from '../public/johnwatermelon.jpeg';
import styled from 'styled-components';

const HomeStyles = styled.main`
  width: 100%;
  height: calc(100vh - 14rem); /* Viewport height minus header, body margins, and spacing */
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
    height: calc(100vh - 13rem); /* Account for smaller body margins */
  }

  @media (max-width: 475px) {
    height: calc(100vh - 11rem); /* Account for smallest body margins */
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
