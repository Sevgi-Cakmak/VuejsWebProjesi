<template>
  <header style="-webkit-box-shadow: 0px 10px 5px 0px rgba(194,190,194,1);
-moz-box-shadow: 0px 10px 5px 0px rgba(194,190,194,1);
box-shadow: 0px 10px 5px 0px rgba(194,190,194,1);">
    <img src="../assets/logo.jpg" alt="bina" style="width: 320px; height: 170px; position: relative; left: -35%; top:1rem;">
    <!-- Header içeriği -->
    <div style="position: relative; top: -9rem;">
      <div class="logo">
    Günay İnşaat Firması
    </div>
      <div class="page-titles">
        <!-- Router-linkler ile sayfa bağlantılarını tanımlıyoruz -->
        <router-link to="/" class="title">Anasayfa</router-link>
        <router-link class="title" to="/about" @mouseover="openSubmenu">Hakkımızda</router-link>
        <router-link to="/contact" class="title">İletişim</router-link> <!-- İletişim linki eklendi -->
      </div>
      <!-- Alt menü -->
      <div v-if="isSubmenuOpen" class="submenu" >
        <router-link to="/company" @click="CloseSubmenu" style="color: white;" class="submenu-item">Şirket Tanıtımı</router-link>
        <router-link to="/values" @click="CloseSubmenu" style="color: white;" class="submenu-item">Değerlerimiz</router-link>
        <router-link to="/product" @click="CloseSubmenu" style="color: white;" class="submenu-item">Ürünlerimiz</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSubmenuOpen: false // Alt menünün başlangıçta kapalı olduğunu belirten bir değişken ekleyin
    }
  },
  methods: {
    openSubmenu() {
      this.isSubmenuOpen = true; // Alt menüyü aç
    },
    CloseSubmenu() {
      this.isSubmenuOpen = false; // Alt menüyü aç
    }
  }
}
</script>
<style scoped>
header {
  background-color: black; /* Header arka plan rengi - koyu mavi tonu */
  color: #fff; /* Yazı rengi - beyaz */
  padding: 10px; /* İç boşluk */
  text-align: center; /* Metni ortala */
  height: 200px;
}

.logo {
  font-size: 52px; /* Logo boyutu */
  font-weight: bold; /* Kalın font */
}

.page-titles {
  display: flex; /* Başlıkları yatay olarak hizalamak için flex kullan */
  justify-content: center; /* Başlıkları yatayda merkezle */
  margin-top: 10px; /* Başlıkların üst boşluğu */
}

.title {
  margin: 0 15px; /* Başlık kenar boşlukları */
  font-size: 28px; /* Başlık font boyutu */
  color: 	#fff8dc; /* Başlık rengi - turuncu */
  text-decoration: none; /* Altçizgiyi kaldır */
}

.title:hover {
  text-decoration: underline; /* Mouse üzerine gelindiğinde altçizgi eklenir */
}

nav ul {
  list-style: none; /* Navigasyon menüsünde madde işaretlerini kaldır */
  padding: 0; /* Kenar boşluğu */
}

nav ul li {
  display: inline-block; /* Bağlantıları yan yana göster */
  margin-right: 20px; /* Bağlantılar arası boşluk */
}

nav ul li a {
  color: #fff; /* Bağlantı rengi - beyaz */
  text-decoration: none; /* Altçizgiyi kaldır */
}

nav ul li a:hover {
  color: #FF5733; /* Mouse üzerine gelindiğinde bağlantı rengi - turuncu */
}

.submenu{
  background-color: black;
  position: absolute;
  left: 57rem;
  border-radius: 0rem 0rem 1rem 1rem;
  width: 200px;
  padding: 1rem;

}
.submenu > a{
  display: block;
  color: #fff8dc;
  text-decoration: none;

}

</style>
