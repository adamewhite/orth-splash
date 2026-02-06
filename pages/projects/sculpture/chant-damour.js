import GalleryPage from '../../../components/GalleryPage';

export default function ChantDamour() {
  const images = [
    {
      src: '/25_orth_chant_d_amour_3.jpg',
      title: 'Un Chant d\'Amour III',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 24,
    },
    {
      src: '/22_orth_chant_d_amour_2.jpg',
      title: 'Un Chant d\'Amour II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 20,
    },
  ];

  return <GalleryPage images={images} backLink="/projects/sculpture" />;
}
