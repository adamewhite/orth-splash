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
    padding-top: 4rem;
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
    transition: opacity 200ms;

    &.clickable {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    img {
      max-height: 80vh;
      max-width: 100%;
      min-width: 500px;
      width: auto !important;
      height: auto !important;
      object-fit: contain;
    }
  }

  figcaption {
    margin-top: 1.5rem;
    font-size: 1.125rem; /* 25% bigger */
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

      img {
        min-width: unset;
      }
    }
  }

  @media (max-width: 480px) {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const projects = [
    {
      src: '/03_orth_congress_of_beauty_2023.jpg',
      title: 'Congress of Beauty I',
      year: '2023',
      refNumber: 1,
    },
    {
      src: '/04_orth_new_waves_of_living_i_2024.jpg',
      title: 'New Waves of Living I',
      year: '2024',
      refNumber: 2,
    },
    {
      src: '/05_orth_new_waves_of_living_ii_2024.jpg.jpg',
      title: 'New Waves of Living II',
      year: '2024',
      refNumber: 3,
    },
    {
      src: '/07_orth_the_orangerie_i_2019.jpg',
      title: 'The Orangerie I',
      year: '2019',
      refNumber: 4,
    },
    {
      src: '/08_orth_the_orangerie_ii_2019.jpg',
      title: 'The Orangerie II',
      year: '2019',
      refNumber: 5,
    },
    {
      src: '/09_orth_a_flare_tossed_in_the_room_i_2019.jpg',
      title: 'A Flare Tossed in the Room I',
      year: '2019',
      refNumber: 6,
    },
    {
      src: '/10_orth_chant_d\'amour_2020.jpg',
      title: 'Chant d\'Amour I',
      year: '2020',
      refNumber: 7,
    },
    {
      src: '/11_orth_shell_painting.jpg',
      title: 'Shell Painting',
      year: '',
      refNumber: 8,
    },
    {
      src: '/12_orth_tramp_1.jpg',
      title: 'Tramp I',
      year: '',
      refNumber: 9,
    },
    {
      src: '/12_orth_tramp_2.jpg',
      title: 'Tramp II',
      year: '',
      refNumber: 10,
    },
    {
      src: '/13_orth_drawing_1.jpg',
      title: 'Drawing I',
      year: '',
      refNumber: 11,
    },
    {
      src: '/14_orth_drawing_2.jpg',
      title: 'Drawing II',
      year: '',
      refNumber: 12,
    },
    {
      src: '/15_orth_drawing_3.jpg',
      title: 'Drawing III',
      year: '',
      refNumber: 13,
    },
    {
      src: '/16_orth_drawing_4.jpg',
      title: 'Drawing IV',
      year: '',
      refNumber: 14,
    },
    {
      src: '/17_orth_drawing_5.jpg',
      title: 'Drawing V',
      year: '',
      refNumber: 15,
    },
    {
      src: '/18_orth_drawing_6.jpg',
      title: 'Drawing VI',
      year: '',
      refNumber: 16,
    },
    {
      src: '/19_orth_drawing_7.jpg',
      title: 'Drawing VII',
      year: '',
      refNumber: 17,
    },
    {
      src: '/20_orth_drawing_8.jpg',
      title: 'Drawing VIII',
      year: '',
      refNumber: 18,
    },
    {
      src: '/21_orth_flame_tossed_2.jpg',
      title: 'Flame Tossed II',
      year: '',
      refNumber: 19,
    },
    {
      src: '/22_orth_chant_d_amour_2.jpg',
      title: 'Chant d\'Amour II',
      year: '',
      refNumber: 20,
    },
    {
      src: '/23_orth_flame_tossed_3.jpg',
      title: 'Flame Tossed III',
      year: '',
      refNumber: 21,
    },
    {
      src: '/24_orth_flame_tossed_4.jpg',
      title: 'Flame Tossed IV',
      year: '',
      refNumber: 22,
    },
    {
      src: '/24_orth_orange_boy.jpg',
      title: 'Orange Boy',
      year: '',
      refNumber: 23,
    },
    {
      src: '/25_orth_chant_d_amour_3.jpg',
      title: 'Chant d\'Amour III',
      year: '',
      refNumber: 24,
    },
    {
      src: '/26_orth_tramp_3.jpg',
      title: 'Tramp III',
      year: '',
      refNumber: 25,
    },
    {
      src: '/27_orth_congress_of_beauty_2.jpg',
      title: 'Congress of Beauty II',
      year: '',
      refNumber: 26,
    },
    {
      src: '/28_orth_orange_head_1.jpg',
      title: 'Orange Head I',
      year: '',
      refNumber: 27,
    },
    {
      src: '/29_orth_cypress_balls.jpg',
      title: 'Cypress Balls',
      year: '',
      refNumber: 28,
    },
    {
      src: '/30_orth_orange_head_2.jpg',
      title: 'Orange Head II',
      year: '',
      refNumber: 29,
    },
    {
      src: '/31_orth_orange_ledge_1.jpg',
      title: 'Orange Ledge I',
      year: '',
      refNumber: 30,
    },
    {
      src: '/32_orth_orange_shells_1.jpg',
      title: 'Orange Shells I',
      year: '',
      refNumber: 31,
    },
    {
      src: '/33_orth_orange_shells_2.jpg',
      title: 'Orange Shells II',
      year: '',
      refNumber: 32,
    },
    {
      src: '/34_orth_orange_bag_1.jpg',
      title: 'Orange Bag I',
      year: '',
      refNumber: 33,
    },
    {
      src: '/35_orth_orange_ledge_2.jpg',
      title: 'Orange Ledge II',
      year: '',
      refNumber: 34,
    },
    {
      src: '/36_orth_orange_bag_2.jpg',
      title: 'Orange Bag II',
      year: '',
      refNumber: 35,
    },
    {
      src: '/37_orth_mirror_landscape.jpg',
      title: 'Mirror Landscape',
      year: '',
      refNumber: 36,
    },
    {
      src: '/38_orth_shadow_spear.jpg',
      title: 'Shadow Spear I',
      year: '',
      refNumber: 37,
    },
    {
      src: '/39_orth_tramp_carry.jpg',
      title: 'Tramp Carry',
      year: '',
      refNumber: 38,
    },
    {
      src: '/40_orth_treadmill_1.jpg',
      title: 'Treadmill I',
      year: '',
      refNumber: 39,
    },
    {
      src: '/41_orth_treadmill_2.jpg',
      title: 'Treadmill II',
      year: '',
      refNumber: 40,
    },
    {
      src: '/42_orth_treadmill_3.jpg',
      title: 'Treadmill III',
      year: '',
      refNumber: 41,
    },
    {
      src: '/43_orth_shadow_spear_2.jpg',
      title: 'Shadow Spear II',
      year: '',
      refNumber: 42,
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
    setCurrentImageIndex(
      (prev) => (prev - 1 + projects.length) % projects.length,
    );
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex(
          (prev) => (prev - 1 + projects.length) % projects.length,
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % projects.length);
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, projects.length]);

  return (
    <>
      <EmporiumStyles>
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

        <div className='images-container'>
          {projects.map((project, index) => (
            <figure
              key={index}
              className='image-item'
            >
              <div
                className={`image-wrapper ${!isMobile ? 'clickable' : ''}`}
                onClick={!isMobile ? () => openLightbox(index) : undefined}
              >
                <Image
                  src={project.src}
                  alt={`${project.refNumber}. ${project.title}${project.year ? ' ' + project.year : ''}`}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <figcaption>
                {project.refNumber}. {project.title}{project.year && <span className='year'> | {project.year}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </EmporiumStyles>

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
              src={projects[currentImageIndex].src}
              alt={`${projects[currentImageIndex].refNumber}. ${projects[currentImageIndex].title}${projects[currentImageIndex].year ? ' ' + projects[currentImageIndex].year : ''}`}
              className='lightbox-image'
            />
          </div>
        </LightboxStyles>
      )}
    </>
  );
}
