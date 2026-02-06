import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const ProjectsLandingStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
    justify-self: center;
  }

  .category-card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 4/3;
      overflow: hidden;
    }

    .category-title {
      padding: 1rem 0;
      font-size: 1.5rem;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .categories-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .category-card .category-title {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 475px) {
    padding: 2rem 0.5rem;

    .categories-grid {
      gap: 1.5rem;
    }

    .category-card .category-title {
      font-size: 1.125rem;
    }
  }
`;

export default function ProjectsLanding() {
  const categories = [
    {
      name: 'Video',
      slug: 'video',
      heroImage: '/03_orth_congress_of_beauty_2023.jpg',
    },
    {
      name: 'Sculpture & Installation',
      slug: 'sculpture',
      heroImage: '/04_orth_new_waves_of_living_i_2024.jpg',
    },
    {
      name: 'Drawing & Painting',
      slug: 'drawing',
      heroImage: '/14_orth_drawing_2.jpg',
    },
    {
      name: 'Photo',
      slug: 'photo',
      heroImage: '/36_orth_orange_bag_2.jpg',
    },
  ];

  return (
    <ProjectsLandingStyles>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link key={category.slug} href={`/projects/${category.slug}`}>
            <div className="category-card">
              <div className="image-wrapper">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="category-title">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </ProjectsLandingStyles>
  );
}
