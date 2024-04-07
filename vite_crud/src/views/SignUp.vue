<template>
    <div class="container">
        <h1>Sign up</h1>
        <br><br>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <input type="email" v-model="formData.email" class="form-control" placeholder="email"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" v-model="formData.password" class="form-control" placeholder="password"/>
                <br> 
                <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
            </div>
            <div class="col-lg-3"/>
        </div>
    </div>
</template>
<script>
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
export default {
    name: 'SignUp',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        }
    },
    methods: {
        signUp() {
            this.errorMessage = ""
            this.successMessage = ""
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, this.formData.email, this.formData.password)
            .then(user =>{
              this.$router.replace('/users')
              this.successMessage = "Success"
              this.xhrRequest = false
            })
            .catch((error)=>{
              alert(error.message)
              this.successMessage = error.message
              this.xhrRequest = false
            })
        }
    },
}
</script>