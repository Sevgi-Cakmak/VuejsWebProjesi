<template>
  <div id="app">
    <!-- Başlık ve navigasyon menüsü -->
    <Header></Header>
    <div id="main-content">
    <!-- Router görünümü, anasayfa veya hakkımızda sayfasını gösterecek -->
    <router-view/>
    </div>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  display: flex; /* Flexbox kullanarak düzeni belirle */
  flex-direction: column; /* Dikey sıralama */
  min-height: 100vh; /* Ekran yüksekliği kadar alanı kapla */
}

#main-content {
  flex: 1; /* Footer'ı altta sabit tutmak için içeriği genişlet */
}
</style>