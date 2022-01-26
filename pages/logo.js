import Head from "next/head";
import Image from "next/image";
import Logo from "../public/martinlogo.png";
import styled from "styled-components";

const HomeStyles = styled.main`
  /* width: 500px; */
  display: flex;
  justify-content: center;

  div {
    width: 1000px;
    min-width: 500px;
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <div>
        <Image
          src={Logo}
          alt="Martin Logo"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </HomeStyles>
  );
}
