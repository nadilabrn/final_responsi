<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-pink-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />

      <p class="text-xl text-gray-300 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
        href="mailto:nadilafebriana20@gmail.com"
        class="bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>

      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <div class="flex space-x-4">
  <a
    href="https://www.instagram.com/fenadila"
    target="_blank"
    class="text-gray-400 hover:text-white transition-colors duration-300"
  >
    Instagram
  </a>
  <a
    href="https://www.tiktok.com/@justworld"
    target="_blank"
    class="text-gray-400 hover:text-white transition-colors duration-300"
  >
    TikTok
  </a>

</div>

      </div>

      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }} Nadila Febriana❤️
      </p>
    </div>
  </footer>
</template>
