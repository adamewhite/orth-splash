import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const EmporiumStyles = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .video-container {
    padding: 1rem 3rem;
    padding-top: 3rem;
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

  .images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding: 2rem 3rem;
    max-width: 800px;
    width: 100%;
  }

  .image-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .image-wrapper {
    width: 100%;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }

    img {
      max-height: 80vh;
      max-width: 100%;
      width: auto !important;
      height: auto !important;
      object-fit: contain;
    }
  }

  figcaption {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    text-align: center;
    font-style: italic;
  }

  .year {
    font-style: normal;
  }

  @media (max-width: 768px) {
    .video-container {
      margin-bottom: 8rem;
    }

    iframe {
      height: 400px;
    }

    .images-container {
      padding: 2rem 0;
      width: 100%;
      margin: 0 auto;
    }

    .image-item {
      width: 100%;
      margin: 0 auto;
    }

    .image-wrapper {
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .video-container {
      padding: 0;
      width: 100%;
      margin-bottom: 5rem;
    }

    iframe {
      height: auto;
      aspect-ratio: 16/9;
    }

    .images-container {
      padding: 2rem 0;
      gap: 5rem;
      width: 100%;
    }

    figcaption {
      font-size: 0.8rem;
    }
  }
`;

const LightboxStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;

  .lightbox-content {
    position: relative;
    max-width: 80vw;
    max-height: 90vh;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-image {
    max-width: 80vw;
    max-height: 90vh;
    width: auto !important;
    height: auto !important;
    object-fit: contain;
  }

  .close-button {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    padding: 0.5rem;
    line-height: 1;
    z-index: 10000;
  }

  .nav-button {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    padding: 1rem;
    line-height: 1;
    transition: background 200ms;
    z-index: 10000;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    &.prev {
      left: 2rem;
    }

    &.next {
      right: 2rem;
    }
  }

  @media (max-width: 768px) {
    .nav-button {
      font-size: 2rem;
      padding: 0.5rem;

      &.prev {
        left: 0.5rem;
      }

      &.next {
        right: 0.5rem;
      }
    }

    .close-button {
      font-size: 2rem;
      top: 1rem;
      right: 1rem;
    }
  }
`;

export default function Emporium() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      src: '/03_orth_congress_of_beauty_2023.jpg',
      title: 'Congress of Beauty',
      year: '2023',
    },
    {
      src: '/04_orth_new_waves_of_living_i_2024.jpg',
      title: 'New Waves of Living I',
      year: '2024',
    },
    {
      src: '/05_orth_new_waves_of_living_ii_2024.jpg.jpg',
      title: 'New Waves of Living II',
      year: '2024',
    },
    {
      src: '/07_orth_the_orangerie_i_2019.jpg',
      title: 'The Orangerie I',
      year: '2019',
    },
    {
      src: '/08_orth_the_orangerie_ii_2019.jpg',
      title: 'The Orangerie II',
      year: '2019',
    },
    {
      src: '/09_orth_a_flare_tossed_in_the_room_i_2019.jpg',
      title: 'A Flare Tossed in the Room I',
      year: '2019',
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <>
      <EmporiumStyles>
        <figure className="video-container">
          <iframe
            title='vimeo-player'
            src='https://player.vimeo.com/video/215871418'
            width='800'
            height='450'
          ></iframe>
          <figcaption>
            Emporium, <span className="year">2019</span>
          </figcaption>
        </figure>

        <div className="images-container">
          {projects.map((project, index) => (
            <figure key={index} className="image-item">
              <div
                className="image-wrapper"
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={project.src}
                  alt={`${project.title} ${project.year}`}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <figcaption>
                {project.title}, <span className="year">{project.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </EmporiumStyles>

      {lightboxOpen && (
        <LightboxStyles onClick={closeLightbox}>
          <button className="close-button" onClick={closeLightbox}>×</button>
          <button className="nav-button prev" onClick={prevImage}>‹</button>
          <button className="nav-button next" onClick={nextImage}>›</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[currentImageIndex].src}
              alt={`${projects[currentImageIndex].title} ${projects[currentImageIndex].year}`}
              className="lightbox-image"
            />
          </div>
        </LightboxStyles>
      )}
    </>
  );
}
