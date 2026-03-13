<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Welcome</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <ion-title size="large">Welcome</ion-title>
        </IonToolbar>
      </IonHeader>

      <div id="container">
        <strong>Welcome to SP2Obsidian!</strong>
        <p>This app helps you convert your data to Obsidian format.</p>
        <router-link to="/upload"><ion-button expand="block">Get Started</ion-button></router-link>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, useIonRouter } from '@ionic/vue'
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
