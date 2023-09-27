import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './style.css'; // Importa el archivo CSS

const HolaMundo: React.FC = () => (
   
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle id='titulo'>Primera aplicación con Ionic</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div id="contenido">
        <h1>Hola Mundo</h1>
        <button  id='rojo' >Rojo</button>
        <button id='azul' >Azul</button>
      </div>
    </IonContent>
  </IonPage> 

);

export default HolaMundo;
