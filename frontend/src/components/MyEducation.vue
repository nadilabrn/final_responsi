<script setup>
import SectionTitle from './SectionTitle.vue';

// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika',
  },
  {
    id: 2,
    period: '2021-2023',
    institution: 'SMA Negeri 1 Wedi',
    major: 'MIPA',
  },
];
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%;"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <!-- Bagian kiri (even index) -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-pink-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-pink-600 rounded-full z-10"></div>
            </div>
          </div>

          <!-- Bagian kanan (odd index) -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-pink-600 rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-pink-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
