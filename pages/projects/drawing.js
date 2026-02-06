import GalleryPage from '../../components/GalleryPage';

export default function Drawing() {
  const images = [
    {
      src: '/14_orth_drawing_2.jpg',
      title: 'Drawing II',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 12,
    },
    {
      src: '/13_orth_drawing_1.jpg',
      title: 'Drawing I',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 11,
    },
    {
      src: '/15_orth_drawing_3.jpg',
      title: 'Drawing III',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 13,
    },
    {
      src: '/16_orth_drawing_4.jpg',
      title: 'Drawing IV',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 14,
    },
    {
      src: '/17_orth_drawing_5.jpg',
      title: 'Drawing V',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 15,
    },
    {
      src: '/18_orth_drawing_6.jpg',
      title: 'Drawing VI',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 16,
    },
    {
      src: '/19_orth_drawing_7.jpg',
      title: 'Drawing VII',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 17,
    },
    {
      src: '/20_orth_drawing_8.jpg',
      title: 'Drawing VIII',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 18,
    },
    {
      src: '/11_orth_shell_painting.jpg',
      title: 'Shell Painting',
      year: '',
      medium: '',
      dimensions: '',
      refNumber: 8,
    },
  ];

  return <GalleryPage images={images} />;
}
