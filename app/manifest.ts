import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akhmad Aldo Portfolio',
    short_name: 'Aldodevv',
    description: 'Portfolio of Akhmad Aldo (Aldo / Ahmad Aldo), Mobile & Web Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
