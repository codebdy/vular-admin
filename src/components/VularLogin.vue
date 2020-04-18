<template>
  <div class="vular-login">
      <div  
        class="login-image"
      >
          <div class="login-image-mask">
          </div>
      </div>

      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat class="pa-12" dark color="rgba(255,255,255,0.0)">
              <h1 class="welcome-title">
                <img 
                  :src="'/images/logo.png'" 
                  :alt="$store.state.vularApp.logo.alt" 
                />
                Vular
              </h1>
              <v-card-text>
                <v-form>
                  <v-text-field
                    :label="$t('login.email')"
                    name="login-id"
                    prepend-inner-icon="mdi-email-outline"
                    outlined
                    type="text"
                  />

                  <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock-outline"
                    outlined
                    name="password"
                    :label="$t('login.password')"
                    value="wqfasds"
                    class="input-group--focused"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>

                  <div class="forgot-pwd">
                    <v-btn text dark style="text-transform:capitalize;">{{$t('login.forgot')}}</v-btn>
                  </div>

                  <v-btn color="primary" class="mt-5" x-large to="dashboard" style="text-transform:capitalize;width: 100%;">{{$t('login.login')}}</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
  export default {
    name: "vular-login",
    components: {
    },
    props: {
    },

    data: () => ({
      showPassword:false,
    }),

    methods: {
    }
  }
</script>

<style>
  .vular-login{
    position:fixed; 
    height: 100%; 
    width: 100%; 
    z-index: 100000;
    display: flex;
    background: #fff;
  }

  .welcome-title{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    font-size: 50px;
  }

  .welcome-title img{
    margin-right: 20px;
    width: 80px;
  }

  .login-btn{
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-self: center;
    padding: 18px;
  }

  .forgot-pwd{
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
  }

  .login-image{
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    position:fixed;
    top:-10%;
    left:-10%;
    width: 120%;
    height: 120%; 
    background: url(/images/login-bg.jpg) no-repeat; 
    background-size: 100% center;    
  }
  .login-image-mask{
    width: 120%;
    height: 100%; 
    opacity: 0; 
    background-image: linear-gradient(257deg,#7f7679,#79abb5 71%,#b9b1aa);
  }
</style>
