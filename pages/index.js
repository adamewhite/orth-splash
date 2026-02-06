import Head from 'next/head';
import Image from 'next/image';
import Watermelon from '../public/johnwatermelon.jpeg';
import styled from 'styled-components';

const HomeStyles = styled.main`
  width: 100%;
  height: calc(var(--vh, 1svh) * 100 - 11rem); /* Use JS-calculated viewport height, fallback to svh */
  display: flex;
  justify-content: center;
  align-items: center; /* Center the image vertically */
  overflow: hidden; /* Prevent any overflow */

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fadeIn 0.6s ease-in forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: calc(var(--vh, 1svh) * 100 - 9rem); /* Account for smaller body margins and header on tablet */
  }

  @media (max-width: 475px) {
    height: calc(var(--vh, 1svh) * 100 - 13rem); /* Account for smallest body margins and header on mobile */
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
