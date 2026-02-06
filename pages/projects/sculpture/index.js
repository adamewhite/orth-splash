import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const SculptureStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  .back-link {
    align-self: flex-start;
    margin-bottom: 2rem;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin-bottom: 5rem;
  }

  .project-card {
    display: flex;
    gap: 2rem;
    cursor: pointer;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }

    .image-wrapper {
      position: relative;
      width: 300px;
      height: 225px;
      flex-shrink: 0;
      overflow: hidden;
    }

    .project-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }

      .year {
        font-size: 1.125rem;
        font-style: italic;
        color: #666;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .back-link {
      margin: 0 0 1.5rem 0;
    }

    .projects-list {
      gap: 3rem;
    }

    .project-card {
      flex-direction: column;

      .image-wrapper {
        width: 100%;
        height: auto;
        aspect-ratio: 4/3;
      }
    }
  }

  @media (max-width: 475px) {
    padding: 1.5rem 0.5rem;

    .projects-list {
      gap: 2.5rem;
    }

    .project-card .project-info h2 {
      font-size: 1.25rem;
    }
  }
`;

export default function SculptureLanding() {
  const projects = [
    {
      slug: 'new-waves-of-living',
      title: 'New Waves of Living',
      year: '2024',
      heroImage: '/04_orth_new_waves_of_living_i_2024.jpg',
    },
    {
      slug: 'a-flare-tossed',
      title: 'A Flare Tossed in the Room',
      year: '2019',
      heroImage: '/09_orth_a_flare_tossed_in_the_room_i_2019.jpg',
    },
    {
      slug: 'chant-damour',
      title: 'Un Chant D\'Amour',
      year: '2020',
      heroImage: '/22_orth_chant_d_amour_2.jpg',
    },
    {
      slug: 'congress-of-beauty',
      title: 'Congress of Beauty',
      year: '2023',
      heroImage: '/03_orth_congress_of_beauty_2023.jpg',
    },
    {
      slug: 'tramp',
      title: 'Tramp',
      year: '',
      heroImage: '/39_orth_tramp_carry.jpg',
    },
  ];

  return (
    <SculptureStyles>
      <Link href="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="projects-list">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/sculpture/${project.slug}`}>
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                {project.year && <div className="year">{project.year}</div>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SculptureStyles>
  );
}
