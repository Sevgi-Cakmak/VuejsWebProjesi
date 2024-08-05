<template>
  <v-container>
    <v-card>
        <v-card-title>
            Ürünlerimiz
            <br/>
            <v-btn color="teal" @click="dialog = true">Ekle</v-btn>
        </v-card-title>s
    </v-card>
    <v-row class="mt-5">
      <v-col cols="10">
        <!-- Hakkımızda başlığı -->
        <h1 class="headline animate__animated animate__rotateInDownLeft">Ürünlerimiz</h1>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog
      v-model="dialog"
      max-width="400"
      persistent
    >

      <v-card
        prepend-icon="mdi-map-marker"
        text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        title="Use Google's location service?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn @click="dialog = false">
            Agree
          </v-btn>
        </template>
      </v-card>
    </v-dialog>

</template>
dialog
<script>
export default {
    data () {
      return {
        dialog: false,
      }
    }
  }

</script>
