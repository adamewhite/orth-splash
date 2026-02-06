import GalleryPage from '../../../components/GalleryPage';

export default function Tramp() {
  const images = [
    {
      src: '/39_orth_tramp_carry.jpg',
      title: 'Tramp Carry',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 38,
    },
    {
      src: '/45_orth_tramp_3.jpg',
      title: 'Tramp III',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 45,
    },
  ];

  return <GalleryPage images={images} backLink="/projects/sculpture" />;
}
