import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const GalleryStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .back-link {
    align-self: flex-start;
    margin: 2rem 3rem;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding: 2rem 3rem;
    padding-bottom: 5rem;
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
    max-height: calc(var(--vh, 1svh) * 80);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 200ms;

    &.clickable {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    img {
      max-height: calc(var(--vh, 1svh) * 80);
      max-width: 100%;
      min-width: 500px;
      width: auto !important;
      height: auto !important;
      object-fit: contain;
      opacity: 0;
      animation: fadeIn 0.6s ease-in forwards;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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

  .caption-line {
    display: block;
  }

  @media (max-width: 768px) {
    .back-link {
      margin: 1.5rem 1rem;
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

      img {
        min-width: unset;
      }
    }
  }

  @media (max-width: 480px) {
    .back-link {
      margin: 1rem 0.5rem;
    }

    .images-container {
      padding: 2rem 0;
      gap: 5rem;
      width: 100%;
    }

    .image-wrapper {
      img {
        min-width: unset;
      }
    }

    figcaption {
      font-size: 1.1rem;
    }
  }
`;

const LightboxStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(var(--vh, 1svh) * 100);
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;

  .lightbox-content {
    position: relative;
    max-width: 70vw;
    max-height: calc(var(--vh, 1svh) * 90);
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-image {
    max-width: 70vw;
    max-height: calc(var(--vh, 1svh) * 90);
    width: auto !important;
    height: auto !important;
    object-fit: contain;
    opacity: 0;
    animation: fadeIn 0.6s ease-in forwards;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function GalleryPage({ images, backLink = '/projects' }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length,
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <>
      <GalleryStyles>
        <Link href={backLink} className="back-link">
          ← Back to Projects
        </Link>

        <div className='images-container'>
          {images.map((image, index) => (
            <figure
              key={index}
              className='image-item'
            >
              <div
                className={`image-wrapper ${!isMobile ? 'clickable' : ''}`}
                onClick={!isMobile ? () => openLightbox(index) : undefined}
              >
                <Image
                  src={image.src}
                  alt={`${image.refNumber}. ${image.title}${image.year ? ' ' + image.year : ''}`}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <figcaption>
                <span className="caption-line">{image.refNumber}. {image.title}{image.year && <span className='year'> | {image.year}</span>}</span>
                {image.medium && <span className="caption-line">{image.medium}</span>}
                {image.dimensions && <span className="caption-line">{image.dimensions}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </GalleryStyles>

      {lightboxOpen && (
        <LightboxStyles onClick={closeLightbox}>
          <button
            className='close-button'
            onClick={closeLightbox}
          >
            ×
          </button>
          <button
            className='nav-button prev'
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className='nav-button next'
            onClick={nextImage}
          >
            ›
          </button>
          <div
            className='lightbox-content'
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={`${images[currentImageIndex].refNumber}. ${images[currentImageIndex].title}${images[currentImageIndex].year ? ' ' + images[currentImageIndex].year : ''}`}
              className='lightbox-image'
            />
          </div>
        </LightboxStyles>
      )}
    </>
  );
}
