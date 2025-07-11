<script setup>
import SectionTitle from './SectionTitle.vue';

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
</script>

<template>
  <section id="proyek" class="py-20 bg-pink">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-pink-50 rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ project.description }}
            </p>

            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >
                {{ t }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
