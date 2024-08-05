<template>
  <v-conteiner>
    <v-row class="mt-5">
      <v-col cols="10">
        <!-- Hakkımızda başlığı -->
        <h1 class="headline animate__animated animate__rotateInDownLeft">Hakkımızda</h1>
      </v-col>
    </v-row>
  </v-conteiner>
  <v-container>
    <div class="about-container">
      <div class="about-content">
        <div class="about-image">
          <!-- Hakkımızda içeriği -->
          <v-row align="center" class="mt-1">
              <v-col cols="12" md="6">
              <img src="../assets/About.jpg" alt="İnşaat Firması" class="company-image">
              </v-col> 
          

                <v-col>
              <div class="about-text">
              <p>
                İnşaat Firması, sektörde uzun yıllardır hizmet vermektedir. 
                Müşteri odaklı yaklaşımımız ve kaliteli işçiliğimizle tanınırız.
                Hedefimiz, müşterilerimize güvenilir ve kaliteli hizmet sunmaktır.
              </p>
              <router-link to="/company" class="submenu-item">Şirket Tanıtımı</router-link>
              <router-link to="/values" class="submenu-item">Değerlerimiz</router-link>
              <router-link to="/product" class="submenu-item">Ürünlerimiz</router-link>
              </div>
                </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
/* Hakkımızda sayfasının stil tanımlamaları */
.about-container {
  padding: 20px;
  margin-bottom: 20px;
  font-size: 36px; /* Başlık yazı boyutu büyütülüyor */
  color: #333;
  text-align: left;
}

.headline {
  font-size: 36px; /* Başlık yazı boyutu büyütülüyor */
  color: #333;
  margin-left: 15rem; /* Başlık sola hizalanıyor */
  margin-top: 1rem; /* Başlık alt boşluğu */
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image {
  flex: 1;
}

.company-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 200px;
  border-bottom: 2px solid #ccc;
}


.about-text {
  flex: 2;
}

.about-text p {
  font-size: 18px;
  color: #666;
  line-height: 1.5;
}

</style>
