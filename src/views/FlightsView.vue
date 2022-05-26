<template>
  <div class="container about">
    <h2 class="text-center fw-bold mb-3">Available Flights</h2>
    <hr class="my-3">
    <div class="card-t mx-0 my-5" v-for="(flight, i) in flights" :key="i">
      <div class="row card-body py-3">
        <div
          class="col-12 col-lg-8 col-md-8 col-sm-12 left-side d-flex flex-column justify-content-center align-items-center px-2">

          <span class="date fw-lighter">{{ flight.departure }}</span>
          <h4 class="">
            <span class="fw-bold mx-1 badge-sm">{{ flight.departureTime }} </span><span class="mx-1 fs-4">{{
                flight.from_city
            }}</span><span class="mx-1 fs-4">{{
    flight.from_airport
}}</span>
          </h4>
          <h5 class="card-subtitle mb-2 text-muted"><span class="badge-sm fw-bold mx-1">{{ flight.estimation }}</span>
            <span class="fs-6 fw-bold mx-1">{{
                flight.airline.toUpperCase()
            }}</span> <span class="fw-bold badge-sm mx-1">{{ flight.flight }}</span>
          </h5>
          <h4 class="">
            <span class="fw-bold mx-1 badge-sm">{{ flight.arrivalTime }}</span><span class="mx-1 fs-4">{{
                flight.to_city
            }}</span><span class="mx-1 fs-4">{{
    flight.to_airport
}}</span>
          </h4>
          <span class="date">{{ flight.arrival }}</span>
        </div>
        <div
          class="col-12 col-lg-4 col-md-4 col-sm-12 details d-flex flex-column justify-content-center align-items-center px-2">
          <div>
            <h3 class="fw-bold">${{ flight.price }}</h3>
          </div>
          <button class="btn btn-primary w-full"><i class="fal fa-ticket"></i> Buy</button>
        </div>
      </div>
      <div class="buy px-5 py-3">
        <h6 class="text-sm-start badge mx-3">{{ flight.class.toUpperCase() }}</h6>
        <h6 class="text-sm-start badge mx-3">{{ flight.weight.toUpperCase() }}</h6>
        <h6 class="text-sm-start badge mx-3">{{ flight.type.toUpperCase() }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flights: null,
    }
  },
  created() {
    this.flights = this.$store.getters.getFlights
  }
}
</script>
<style lang="scss" scoped>
.card-t {
  border: 1px solid #eee;
  border-radius: 5px;

  .badge {
    background: #DDD;
    border-radius: 15px;
    color: #000;
    padding: 8px 15px;
  }

  .badge-sm {
    background: rgba(184, 242, 250, 0.682);
    border: 1px solid rgba(131, 227, 240, 0.682);
    border-radius: 15px;
    color: #000;
    padding: 5px 10px;
    font-size: 0.8rem;
  }

  .card-body {
    min-height: 180px;
    border-bottom: 1px solid #eee;

    .left-side {
      position: relative;
    }

    .details {
      border-left: 1px solid #eee;

      @media screen and (max-width: 767px) {
        border-left: 0 !important;
        border-top: 1px solid #eee;
      }
    }
  }

}
</style>