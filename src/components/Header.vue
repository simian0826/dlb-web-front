<template>
  <v-container >
    <v-layout row wrap class="py-3" style="height:160px;">
      <v-flex md8 sm12 offset-md2 >
        <v-layout row wrap fill-height>
        <v-flex md4 class="hidden-md-and-down " fill-height>
          <img src="../assets/imgs/test.png" width="100%" height="100%"/>
        </v-flex>
        <v-flex md4 sm12 fill-height>
          <v-text-field
            v-model="search"
            outline
            clearable
            type="text"
            style="height:60px;"
          >
            <template v-slot:prepend-inner>
              <v-select
                v-model="location"
                :items="states"
                dense
                solo
                menu-props="auto"
                label="Select"
                hide-details
                single-line
                style="width: 120px;"
              ></v-select>
            </template>
          </v-text-field>
        </v-flex>
        <v-flex md4 class="hidden-md-and-down" fill-height>
        </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        search:"",
        location:"",
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
  }
  };
</script>

<style scoped>

</style>
