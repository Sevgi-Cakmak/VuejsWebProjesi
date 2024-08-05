<template>
  <v-container>
    <!-- Başlık -->
    <v-row class="mt-5">
      <v-col cols="12">
        <!-- Sayfa başlığı -->
        <h1 class="headline  animate__animated animate__rotateInDownLeft">Anasayfa</h1>
      </v-col>
    </v-row>

    <!-- Resim ve metin -->

      <h1 class="baslik1">Sosyal Sorumluluk</h1>
      <v-row  class="mt-1"> <!-- Yukarıya 5 birim (varsayılan olarak 8 piksel) boşluk ekler -->
        <!-- Resim -->
        <v-col cols="12" md="6">
          <!-- Vuetify resim bileşeni -->
          <v-img
            src="../assets/gridfoto.jpg"
            aspect-ratio="1"
            contain
          ></v-img>
        </v-col>
        
        <!-- Metin -->
        <v-col cols="12" md="6">
          <!-- Metin konteyneri -->
          <div class="text-container">
            <!-- Sayfa içeriği -->
            <p class="content" style="font-size: 20px;margin-bottom: 90px;">
            <h2 class="yanbaşlik"> Nurol Şirketler Topluluğu’nun Sosyal Sorumluluk Bilincinde Gerçekleştirdiği Faaliyetler</h2>
              İşletmeler, sadece üretim ve satış yapan klasik kuruluşlar değil, halka karşı sosyal sorumluluğu olan çağdaş kuruluşlar 
              olmak durumundadırlar. Bu sosyal sorumluluğun ana hatları da doğaldır ki, içinde faaliyet gösterilen ulusların kültürlerinden
              etkilenmektedir.Türk kültürünün özellikle davranışsal boyutunda paylaşımcı ve samimi yaklaşımlar ön plana çıkar. NUROL olarak
              yıllardır çok sektörlü, geniş bir faaliyet alanında hizmette bulunduğumuzdan, toplumla aramızda sağlıklı iletişim kanalları
              oluşturmak kaçınılmaz bir olgudur. Bu iletişim kanalları da tabii ki bireylere birebir fayda sağlayabilecek alanları kapsamalıdır. 
            </p>
          </div>
        </v-col>
      </v-row>


      <!-- Öne Çıkan Projeler -->
 
      <v-row>
        <v-col cols="12">
          <div class="project-heading">
            <h2 class="subheadline">ÖNE ÇIKAN PROJELER</h2>
          </div>
        </v-col>
      </v-row>
      <!-- İlk 5 Resim -->
      <v-row style="margin-bottom: 110px; border-bottom: 2px solid  #ccc;">
        <v-col cols="12" md="3">
          <!-- Vuetify resim bileşeni -->
          <v-img src="../assets/karayolu.jpg" style="height: 20rem;"></v-img>
        </v-col>
        <v-col cols="12" md="3">
          <!-- Vuetify resim bileşeni -->
          <v-img src="../assets/izmir.jpg" style="height: 20rem;"></v-img>
        </v-col>
        <v-col cols="12" md="3">
          <!-- Vuetify resim bileşeni -->
          <v-img src="../assets/Otoyol.jpg" style="height: 20rem;"></v-img>
        </v-col>
        <v-col cols="12" md="3">
          <!-- Vuetify resim bileşeni -->
          <v-img src="../assets/Park.jpg" style="height: 20rem;"></v-img>
        </v-col>
      </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.subheadline {
  font-size: 24px; /* Alt başlık yazı boyutu */
  margin-bottom: 15px; /* Alt başlık alt boşluğu */
}
.baslik1{
  position: relative;
  top: 100px;
}
.yanbaşlik{
  color: #333;
  font-size: 25px; 
  margin-bottom: 20px; /* Başlık alt boşluğu */
}

.headline {
  font-size: 36px; /* Başlık yazı boyutu büyütülüyor */
  color: #333;
  text-align: left; /* Başlık sola hizalanıyor */
  margin-bottom: 20px; /* Başlık alt boşluğu */
  border-bottom: 2px solid #ccc; /* Altına çizgi ekleniyor */
}

.text-container {
  margin-top: 15rem; /* Metin konteyneri iç boşluğu */
  font-size: 10px; /* Metin boyutu büyütülüyor */
  text-align: justify; /* Metin içeriği yaslanmış hizalaması */
}

.content {
  color: #666;
  text-align: justify; /* Metin içeriği yaslanmış hizalaması */
}
.subheadline {
  font-size: 24px; /* Alt başlık yazı boyutu */
  margin-bottom: 15px; /* Alt başlık alt boşluğu */
  text-align: center; /* Başlık ortalanıyor */
}

.project-heading {
  text-align: center; /* Yazıyı ortalar */
  margin-bottom: 20px; /* Yazı ve altında boşluk bırakır */
  border-bottom: 2px solid #ccc; /* Yazının altına çizgi ekler */
}
.image-container{
  margin-bottom: 200px;
  border-bottom: 2px solid #ccc;
}

</style>
