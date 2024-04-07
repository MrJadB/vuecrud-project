import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { initializeApp } from 'firebase/app'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

let app
let auth

const firebaseConfig = {

};

// Initialize Firebase
initializeApp(firebaseConfig);
auth = getAuth()

onAuthStateChanged(auth, (user)=> {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})









