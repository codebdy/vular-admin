<template>
  <div>
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar v-if="user && user.avatar" size="30px">
            <img :src="user.avatar" :alt="user.name" />
          </v-avatar>
          <v-icon v-else>mdi-account-outline</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon >mdi-account-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{$t('account.profile')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="changePasswordDlg = true">
          <v-list-item-icon>
            <v-icon >mdi-lock-open-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{$t('account.change-password')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="onLogout">
          <v-list-item-icon>
            <v-icon >mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{$t('account.logout')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="changePasswordDlg" scrollable max-width="500px">
      <v-card>
        <v-card-title primary-title>
          {{$t('account.change-password')}}
        </v-card-title>
        <v-card-text style="max-height: 100vh;" class="pa-5">
          <ValidationObserver ref="observer" v-slot="{ validate, reset }">
            <v-form>
              <ValidationProvider v-slot="{ errors }" 
                :name="$t('account.old-password')" 
                rules="required"
              >
                <v-text-field
                  outlined
                  dense
                  type="password"
                  :label="$t('account.old-password')"
                  :error-messages="errors"
                  v-model="model.oldPassword"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" 
                :name="$t('account.new-password')" 
                rules="required"
              >
                <v-text-field
                  outlined
                  dense
                  type="password"
                  :label="$t('account.new-password')"
                  :error-messages="errors"
                  v-model="model.newPassword"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" 
                :name="$t('account.re-new-password')" 
                rules="required"
              >
                <v-text-field
                  outlined
                  dense
                  type="password"
                  :label="$t('account.re-new-password')"
                  :error-messages="errors"
                  v-model="model.reNewPassword"
                ></v-text-field>
              </ValidationProvider>
            </v-form>
          </ValidationObserver>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            outlined
            text
            @click="onClose"
          >
            {{$t('base.cancel')}}
          </v-btn>
          <v-btn
            color="primary"
            dark
            rounded
            class="mr-5"
            @click="onChangePassword"
          >
            {{$t('base.save')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    

  </div>
</template>

<script>
  import { ValidationObserver, ValidationProvider} from 'vee-validate'
  export default {
    name: 'vular-appbar-account',
    components: {
      ValidationObserver,
      ValidationProvider
    },
    props: {
      user:{default:null},
    },
    data: () => ({
      changePasswordDlg:false,
      model:{
      }
    }),

    methods: {
      onLogout(){
        this.$store.commit('logout')
      },
      onChangePassword(){
        this.$refs.observer.validate()
      },

      onClose(){
        this.$refs.observer.reset()
        this.model = {}
        this.changePasswordDlg = false
      },
    },
  }
</script>

<style>
</style>