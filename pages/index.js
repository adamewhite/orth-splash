import Head from 'next/head';
import Image from 'next/image';
import Watermelon from '../public/johnwatermelon.jpeg';
import styled from 'styled-components';

const HomeStyles = styled.main`
  /* width: 500px; */
  display: flex;
  justify-content: center;

  div {
    width: 400px;
  }

  @media (max-width: 475px) {
    div {
      width: 90%;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <div>
        <Image
          src={Watermelon}
          alt='Watermelon Installation'
          layout='responsive'
          placeholder='blur'
        />
      </div>
    </HomeStyles>
  );
}
