<template>
  <div class="home">
    <button @click="oneWayGet" v-if="!isLoading">Get One Way</button>
    <button disabled v-else>Loading ...</button>
    <ul class="airports" v-if="items">
      <li>Airports: </li>
      <li v-for="(item, i) in items.airports" :key="i">
        {{ item.name }} ({{ item.code }})
        <!-- <div>
          <ul>
            <li v-for="(subitem, i) in item" :key="i">
              {{ subitem }}
            </li>
          </ul>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'HomeView',
  data() {
    return {
      flight_details: {
        api_key: null || '628caeb63b0f7fc382468bf7',
        flightType: null || 'onewaytrip',
        departure_location: null || 'LHR',
        arrival_location: null || 'LAX',
        date_of_departure: null || '2022-05-30',
        number_of_adults: null || 1,
        number_of_children: null || 0,
        number_of_infants: null || 0,
        cabin_class: null || 'Economy',
        currency: null || 'USD',
        url: `https://api.flightapi.io`,
      },
      items: {},
      isLoading: false,
    }
  },
  methods: {
    oneWayGet() {
      this.isLoading = true
      axios.get(`${this.flight_details.url}/${this.flight_details.flightType}/${this.flight_details.api_key}/${this.flight_details.departure_location}/${this.flight_details.arrival_location}/${this.flight_details.date_of_departure}/${this.flight_details.number_of_adults}/${this.flight_details.number_of_children}/${this.flight_details.number_of_infants}/${this.flight_details.cabin_class}/${this.flight_details.currency}`)
        .then(res => {
          console.log(res.data.airports);
          this.isLoading = false
          this.items = res.data
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false
        })
    }
  }
}
</script>
