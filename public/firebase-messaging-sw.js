/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
   
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyBps402s0l_ogUoq75Q1me1LEqeHXciBQE",
    authDomain: "taxi-booking-a4d2d.firebaseapp.com",
    projectId: "taxi-booking-a4d2d",
    storageBucket: "taxi-booking-a4d2d.appspot.com",
    messagingSenderId: "17048759430",
    appId: "1:17048759430:web:9904e6f7c2577d95973507",
    measurementId: "G-6LDHKQ9FLY"
    });
  
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});