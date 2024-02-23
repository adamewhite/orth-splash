import Image from 'next/image';
import styled from 'styled-components';

const EmporiumStyles = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  justify-content: center;

  iframe {
    padding: 1rem 3rem;

    /* width: 100%; */
    /* border: 5px solid red; */
    /* width: 100% !important; */
  }

  @media (max-width: 475px) {
    iframe {
      padding: 1rem;
    }
  }
`;

export default function Emporium() {
  return (
    <EmporiumStyles>
      <iframe
        title='vimeo-player'
        src='https://player.vimeo.com/video/191511657?h=e48467f469'
        width='800'
        height='450'
      ></iframe>
    </EmporiumStyles>
  );
}
