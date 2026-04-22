import { Song } from '../models/music.models';

export const SONGS: Song[] = [
  {
    id: 1,
    title: 'Autant que de larmes',
    url: 'https://wiseband.lnk.to/JODOCK-Autant-Que-De-Larmes',
    releaseDate: new Date('2026-04-17'),
    image: 'assets/images/cover_autant-que-de-larmes.jpeg',
    isFeatured: true,
    description: "Disponible sur toutes les plateformes de streaming",
  },
  {
    id: 2,
    title: "S'en aller",
    url: 'https://wiseband.lnk.to/JODOCK-sen-aller',
    releaseDate: new Date('2025-07-04'),
    image: 'assets/images/cover_sen-aller.jpeg',
    isFeatured: false,
  },
];
