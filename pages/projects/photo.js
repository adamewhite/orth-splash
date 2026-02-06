import GalleryPage from '../../components/GalleryPage';

export default function Photo() {
  const images = [
    {
      src: '/37_orth_mirror_landscape.jpg',
      title: 'Mirror Landscape',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 36,
    },
    {
      src: '/30_orth_orange_head_2.jpg',
      title: 'Orange Head II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 29,
    },
    {
      src: '/33_orth_orange_shells_2.jpg',
      title: 'Orange Shells II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 32,
    },
    {
      src: '/36_orth_orange_bag_2.jpg',
      title: 'Orange Bag II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 35,
    },
    {
      src: '/35_orth_orange_ledge_2.jpg',
      title: 'Orange Ledge II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 34,
    },
    {
      src: '/31_orth_orange_ledge_1.jpg',
      title: 'Orange Ledge I',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 30,
    },
    {
      src: '/29_orth_cypress_balls.jpg',
      title: 'Cypress Balls',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 28,
    },
    {
      src: '/28_orth_orange_head_1.jpg',
      title: 'Orange Head I',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 27,
    },
    {
      src: '/44_orth_gold_mirror_1.jpg',
      title: 'Gold Mirror I',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 44,
    },
  ];

  return <GalleryPage images={images} />;
}
