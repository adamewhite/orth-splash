import GalleryPage from '../../../components/GalleryPage';

export default function NewWavesOfLiving() {
  const images = [
    {
      src: '/04_orth_new_waves_of_living_i_2024.jpg',
      title: 'New Waves of Living I',
      year: '2024',
      medium: '',
      dimensions: '',
      refNumber: 2,
    },
    {
      src: '/05_orth_new_waves_of_living_ii_2024.jpg.jpg',
      title: 'New Waves of Living II',
      year: '2024',
      medium: '',
      dimensions: '',
      refNumber: 3,
    },
  ];

  return <GalleryPage images={images} backLink="/projects/sculpture" />;
}
