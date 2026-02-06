import GalleryPage from '../../../components/GalleryPage';

export default function AFlareTossed() {
  const images = [
    {
      src: '/07_orth_the_orangerie_i_2019.jpg',
      title: 'The Orangerie I',
      year: '2019',
      medium: '',
      dimensions: '',
      refNumber: 4,
    },
    {
      src: '/08_orth_the_orangerie_ii_2019.jpg',
      title: 'The Orangerie II',
      year: '2019',
      medium: '',
      dimensions: '',
      refNumber: 5,
    },
    {
      src: '/09_orth_a_flare_tossed_in_the_room_i_2019.jpg',
      title: 'A Flare Tossed in the Room I',
      year: '2019',
      medium: '',
      dimensions: '',
      refNumber: 6,
    },
    {
      src: '/21_orth_flame_tossed_2.jpg',
      title: 'Flame Tossed II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 19,
    },
    {
      src: '/24_orth_orange_boy.jpg',
      title: 'Orange Boy',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 23,
    },
  ];

  return <GalleryPage images={images} backLink="/projects/sculpture" />;
}
