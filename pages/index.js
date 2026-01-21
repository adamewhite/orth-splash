import Head from 'next/head';
import Image from 'next/image';
import Watermelon from '../public/johnwatermelon.jpeg';
import styled from 'styled-components';

const HomeStyles = styled.main`
  width: 100%;
  height: calc(100vh - 200px); /* Viewport height minus header space and bottom margin */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem; /* Space at the bottom */

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 160px);
    margin-bottom: 1rem;
  }

  @media (max-width: 475px) {
    height: calc(100vh - 140px);
    margin-bottom: 0.5rem;
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
