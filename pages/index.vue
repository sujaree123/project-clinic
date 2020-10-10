<template>
  <div>
    <v-container>
      <v-form ref="form">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="namein"
              :counter="20"
              label="Name"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastnamein"
              :counter="20"
              label="Lastname"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="datein"
              :counter="10"
              label="Date (dd/mm/yyyy)"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="phonenumberin"
              :counter="20"
              label="PhoneNumber"
              required
            />
          </v-col>
        </v-row>
      </v-form>
    </v-container>

    <v-btn
      color="light-blue lighten-1"
      class="mr-4"
      @click="validate"
    >
      submit
    </v-btn>
    <v-btn
      color="red lighten-3"
      class="mr-4"
      @click="reset"
    >
      Reset
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      namein: '',
      lastnamein: '',
      datein: '',
      phonenumberin: ''
    }
  },
  computed: {
    ...mapGetters([
      'data'
    ])
  },
  methods: {
    validate () {
      const name = this.namein
      const lastname = this.lastnamein
      const date = this.datein
      const phonenumber = this.phonenumberin
      if (name || lastname || date || phonenumber) {
        this.$store.commit('input', { name, lastname, date, phonenumber })
        this.$refs.form.reset()
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
