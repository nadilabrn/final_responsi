// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika',
  },
  {
    id: 2,
    period: '2021-2023',
    institution: 'SMA Negeri 1 Wedi',
    major: 'MIPA',
  },
];

const skills = [
  { name: 'CapCut', level: 'Mahir' },
  { name: 'Canva', level: 'Mahir' },
  { name: 'Adobe Premiere Pro', level: 'Menengah' },
  { name: 'Adobe Illustrator', level: 'Menengah' },
  { name: 'Adobe InDesign', level: 'Menengah' },
  { name: 'Adobe Photoshop', level: 'Menengah' },
  { name: 'Visual Studio Code', level: 'Mahir' },
  { name: 'Figma', level: 'Mahir' },
];

const projects = [
  {
    title: 'Video MV Hey Soul Sister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT315eRgTIa5ofRllf6N9DF6m_AITTPXmXr2w&s',
    description: 'Video musik kreatif yang dibuat sebagai bagian dari proyek multimedia, menggabungkan visual menarik dan sinkronisasi audio.',
    tech: ['CapCut', 'Adobe Premiere', 'Audio Sync'],
    link: 'https://drive.google.com/file/d/1ehpARDebBWr7luAmCHCm3COgJHcwNaPv/view?usp=drivesdk',
  },
  {
    title: 'Profile Dokter Vinance',
    image: 'https://dokterfinance.com/wp-content/uploads/2023/06/02.-FLYER-ASLI-200623-1024x1024.jpg',
    description: 'Video Profile detail Dokter Vinance.',
    tech: ['CapCut'],
    link: 'https://drive.google.com/file/d/1MdKiCsh8vdSw4iktq4RpPoyU1JlqBdZ2/view?usp=drive_link',
  },
  {
    title: 'Majalah Beauty of Yogyakarta',
    image: 'https://tse4.mm.bing.net/th/id/OIP.Lim80gHHaAS157WhSzWkLAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Majalah digital yang menampilkan keindahan budaya, alam, dan destinasi wisata di Yogyakarta, disusun dalam bentuk visual yang menarik.',
    tech: ['Adobe Photoshop', 'InDesign', 'Canva'],
    link: 'https://drive.google.com/drive/u/1/folders/1IaIetT9zsV9YVBVJ52G1_89knvrZ-2RM',
  },
  {
    title: 'Fotografi Produk',
    image: 'https://cdn.linkumkm.id/library/3/2/2/0/8/32208_840x576.jpg',
    description: 'Proyek fotografi produk yang menampilkan pencahayaan, komposisi, dan editing untuk meningkatkan nilai visual produk secara profesional.',
    tech: ['DSLR Camera', 'Lightroom', 'Photoshop'],
    link: 'https://drive.google.com/file/d/1G_Nwp7mnS5ekCcP69HOwUwEVXvv3GRd-/view?usp=drivesdk',
  },
];
module.exports = { educationHistory, skills, projects };