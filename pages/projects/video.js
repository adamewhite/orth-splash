import styled from 'styled-components';
import Link from 'next/link';

const VideoStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .back-link {
    align-self: flex-start;
    margin: 2rem 3rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .video-container {
    padding: 1rem 3rem;
    padding-top: 2rem;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8rem;
  }

  iframe {
    width: 100%;
    max-width: 800px;
    height: 450px;
  }

  figcaption {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    text-align: center;
    font-style: italic;
  }

  .year {
    font-style: normal;
  }

  @media (max-width: 768px) {
    .back-link {
      margin: 1.5rem 1rem;
    }

    .video-container {
      margin-bottom: 8rem;
    }

    iframe {
      height: 400px;
    }
  }

  @media (max-width: 475px) {
    .back-link {
      margin: 1rem 0.5rem;
    }

    .video-container {
      padding: 0;
      padding-top: 2rem;
      width: 100%;
      margin-bottom: 5rem;
    }

    iframe {
      height: auto;
      aspect-ratio: 16/9;
    }

    figcaption {
      font-size: 1.1rem;
    }
  }
`;

export default function Video() {
  return (
    <VideoStyles>
      <Link href="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <figure className='video-container'>
        <iframe
          title='vimeo-player'
          src='https://player.vimeo.com/video/215871418'
          width='800'
          height='450'
        ></iframe>
        <figcaption>
          Emporium <span className='year'> | 2019</span>
        </figcaption>
      </figure>
    </VideoStyles>
  );
}
