<template>
  <div class="container home">
    <div class="card mt-5">
      <div class="card-body">
        <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <label for=""></label>
            <div class="mx-2">
              <input class="mx-1" type="radio" value="oneway" name="type" id="oneway" title="Oneway"
                v-model="flight_book.type">
              <label for="oneway">Oneway </label>
            </div>
            <div class="mx-2">
              <input class="mx-1" type="radio" value="roundtrip" name="type" id="roundtrip" title="Round Trip"
                v-model="flight_book.type">
              <label for="roundtrip">Round Trip </label>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-6 col-sm-12">
            <label for="from">From: </label>
            <select name="airports" id="airports" class="form-select list1" v-model="flight_book.from"
              @change="onChange($event.target.value)">
              <option selected disabled>Select Option</option>
              <option v-for="air in list1" :key="air.id" :value="air.code">
                {{ air.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-lg-6 col-md-6 col-sm-12">
            <label for="from">To: </label>
            <select name="airports" id="airports" class="form-select list2" v-model="flight_book.to"
              @change="onChange($event.target.value)">
              <option selected disabled>Select Option</option>
              <option v-for="air in list2" :key="air.id" :value="air.code">
                {{ air.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-lg-6 col-md-6 col-sm-12">
            <label for="from">Departure Date: </label>
            <input type="date" class="form-select" v-model="flight_book.departure">
          </div>
          <div class="col-12 col-lg-6 col-md-6 col-sm-12" v-if="flight_book.type != 'oneway'">
            <label for="from">Return Date: </label>
            <input type="date" class="form-select" v-model="flight_book.return">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <label for="from">Adults: </label>
            <input type="number" class="form-select" placeholder="Adult(s)" min="0" max="20"
              v-model="flight_book.adults">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <label for="from">Children: </label>
            <input type="number" class="form-select" placeholder="Child(ren)" min="0" max="20"
              v-model="flight_book.children">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <label for="from">Infants: </label>
            <input type="number" class="form-select" placeholder="Infant(s)" min="0" max="20"
              v-model="flight_book.infants">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <label for="from">Class: </label>
            <select class="form-select" v-model="flight_book.class">
              <option value="economy" selected>Economy</option>
              <option value="fclass">First Class</option>
            </select>
          </div>
          <div class="col-12 mt-2 px-5">
            <button class="btn btn-success" @click="bookFlight">Search</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import airports from '@/assets/data/airports.json'
import bookings from '@/assets/data/bookings.json'
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
      list1: airports,
      list2: airports,
      flights: bookings,
      filteredFlights: null,
      isLoading: false,
      flight_book: {
        from: null,
        to: null,
        departure: null,
        return: null,
        type: 'oneway',
        adults: 0,
        children: 0,
        infants: 0,
        class: 'economy',
      }
    }
  },
  methods: {
    bookFlight() {
      if (this.flight_book.type == 'oneway') {
        this.filteredFlights = this.flights.filter(flight => flight.from == this.flight_book.from
          && flight.to == this.flight_book.to
          && flight.class == this.flight_book.class
          && flight.departure == this.flight_book.departure
          && flight.return == this.flight_book.return
          && flight.type == this.flight_book.type)
      }
      else if (this.flight_book.type == 'roundtrip') {
        this.filteredFlights = this.flights.filter(flight => flight.from == this.flight_book.from
          && flight.to == this.flight_book.to
          && flight.class == this.flight_book.class
          && flight.departure == this.flight_book.departure
          && flight.return == this.flight_book.return
          && flight.type == this.flight_book.type)
      }
      console.log('filter: ', this.filteredFlights);
      console.log('sent: ', this.flight_book);
    },
    onChange() {
      if (this.flight_book.from == this.flight_book.to) {
        alert('Cannot choose the same destination')
        this.flight_book.to = ""
      }
    }
  },
}
</script>
