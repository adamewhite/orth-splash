import GalleryPage from '../../../components/GalleryPage';

export default function CongressOfBeauty() {
  const images = [
    {
      src: '/03_orth_congress_of_beauty_2023.jpg',
      title: 'Congress of Beauty I',
      year: '2023',
      medium: '',
      dimensions: '',
      refNumber: 1,
    },
    {
      src: '/43_orth_shadow_spear_2.jpg',
      title: 'Shadow Spear II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 42,
    },
    {
      src: '/46_orth_hoooked_spear_2.jpg',
      title: 'Hooked Spear II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 46,
    },
  ];

  return <GalleryPage images={images} backLink="/projects/sculpture" />;
}
