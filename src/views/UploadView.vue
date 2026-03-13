<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Upload File</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Upload File</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <p>Select a file to upload:</p>
        <input type="file" @change="handleFileUpload" ref="fileInput" />
        <ion-button expand="block" @click="uploadFile" :disabled="!selectedFile">Upload</ion-button>
        <router-link to="/log"><ion-button expand="block" fill="outline">View Log</ion-button></router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue'

const fileInput = ref<HTMLInputElement>()
const selectedFile = ref<File | null>(null)

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
  }
}

const uploadFile = () => {
  if (selectedFile.value) {
    // TODO: Implement file upload logic
    console.log('Uploading file:', selectedFile.value.name)
    // For now, just navigate to log
    // router.push('/log')
  }
}
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

</script>

<style scoped>
#container {
  text-align: center;
  padding: 20px;
}

input[type="file"] {
  margin: 20px 0;
}
</style>
