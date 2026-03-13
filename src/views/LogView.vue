<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Log</ion-title>
        <template v-slot:end>
          <ion-buttons>
            <ion-button @click="saveLog">Save Log</ion-button>
          </ion-buttons>
        </template>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Log</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-textarea v-model="logContent" placeholder="Log content will appear here..." readonly
          :auto-grow="true"></ion-textarea>
        <ion-button expand="block" @click="uploadLog">Upload Log</ion-button>
        <router-link to="/upload"><ion-button expand="block" fill="outline">Back to Upload</ion-button></router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonTextarea } from '@ionic/vue'

const logContent = ref('Sample log content...\nThis is where the log will be displayed.')

const saveLog = () => {
  // TODO: Implement save log logic
  console.log('Saving log...')
  const blob = new Blob([logContent.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'log.txt'
  a.click()
  URL.revokeObjectURL(url)
}

const uploadLog = () => {
  // TODO: Implement upload log logic
  console.log('Uploading log...')
}

import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();


</script>

<style scoped>
#container {
  padding: 20px;
}

ion-textarea {
  width: 100%;
  min-height: 300px;
}
</style>
