<template>
  <div class="container about">
    <h2 class="text-center fw-bold mb-3">Available Flights</h2>
    <router-link to="/">Search again</router-link>
    <hr class="my-3" />
    <div v-if="flights">
      <div class="card-t mx-0 my-5" v-for="(flight, i) in flights" :key="i">
        <div class="row card-body py-3 m-0">
          <div
            class="col-12 col-lg-8 col-md-8 col-sm-12 left-side d-flex flex-column justify-content-center align-items-center px-2"
          >
            <span class="date fw-lighter">{{ flight.departure }}</span>
            <h4 class="">
              <span class="fw-bold mx-1 badge-sm"
                >{{ flight.departureTime }} </span
              ><span class="mx-1 fs-4">{{ flight.from_city }}</span
              ><span class="mx-1 fs-4">{{ flight.from_airport }}</span>
            </h4>
            <h5 class="card-subtitle mb-2 text-muted">
              <span class="badge-sm fw-bold mx-1">{{ flight.estimation }}</span>
              <span class="fs-6 fw-bold mx-1">{{
                flight.airline.toUpperCase()
              }}</span>
              <span class="fw-bold badge-sm mx-1">{{ flight.flight }}</span>
            </h5>
            <h4 class="">
              <span class="fw-bold mx-1 badge-sm">{{ flight.arrivalTime }}</span
              ><span class="mx-1 fs-4">{{ flight.to_city }}</span
              ><span class="mx-1 fs-4">{{ flight.to_airport }}</span>
            </h4>
            <span class="date">{{ flight.arrival }}</span>
          </div>
          <div
            class="col-12 col-lg-4 col-md-4 col-sm-12 details d-flex flex-column justify-content-center align-items-center px-2"
          >
            <div>
              <h3 class="fw-bold">${{ flight.price }}</h3>
            </div>
            <button
              class="btn btn-primary w-full"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fal fa-ticket"></i> Buy
            </button>
          </div>
        </div>
        <div class="buy px-5 py-3">
          <h6 class="text-sm-start badge mx-3">
            {{ flight.class.toUpperCase() }}
          </h6>
          <h6 class="text-sm-start badge mx-3">
            {{ flight.weight.toUpperCase() }}
          </h6>
          <h6 class="text-sm-start badge mx-3">
            {{ flight.type.toUpperCase() }}
          </h6>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="card">
        <div class="card-body">
          <div class="card-title fs-1 fw-bold text-uppercase">
            No Flights with this information.
          </div>
          <div class="card-subtitle text-muted text-uppercase">
            Add this flight to the moked data
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Buyer Information
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div v-if="!success">
              <div>
                <label for="">Title:</label>
                <select
                  v-model="$v.buyer.title.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.title),
                    'form-select': true,
                  }"
                >
                  <option value="mr">Mr</option>
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                </select>
                <div v-if="!$v.buyer.title.required" class="invalid-feedback">
                  This field is required.
                </div>
              </div>
              <div>
                <label for="">Firstname:</label>
                <input
                  type="text"
                  v-model="$v.buyer.fname.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.fname),
                    'form-control': true,
                  }"
                />
                <div v-if="!$v.buyer.fname.required" class="invalid-feedback">
                  This field is required.
                </div>
              </div>
              <div>
                <label for="">Lastname:</label>
                <input
                  type="text"
                  v-model="$v.buyer.lname.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.lname),
                    'form-control': true,
                  }"
                />
                <div v-if="!$v.buyer.lname.required" class="invalid-feedback">
                  This field is required.
                </div>
              </div>
              <div>
                <label for="">Date of Birth:</label>
                <input
                  type="number"
                  min="0"
                  max="31"
                  v-model="$v.buyer.dob.day.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.dob.day),
                    'form-control': true,
                  }"
                  placeholder="Day"
                />
                <div v-if="!$v.buyer.dob.day.required" class="invalid-feedback">
                  This field is required.
                </div>
                <div
                  v-if="!$v.buyer.dob.day.minLength"
                  class="invalid-feedback"
                >
                  this field shouldn't be less than
                  {{ $v.buyer.dob.day.$params.minLength.min }}
                </div>
                <div
                  v-if="!$v.buyer.dob.day.maxLength"
                  class="invalid-feedback"
                >
                  this field shouldn't be greater than
                  {{ $v.buyer.dob.day.$params.maxLength.max }}
                </div>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  v-model="$v.buyer.dob.month.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.dob.month),
                    'form-select': true,
                  }"
                  placeholder="Month"
                >
                  <option value="01">Jan</option>
                  <option value="02">Feb</option>
                  <option value="03">Mar</option>
                  <option value="04">Apr</option>
                  <option value="05">May</option>
                  <option value="06">Jun</option>
                  <option value="07">Jul</option>
                  <option value="08">Aug</option>
                  <option value="09">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
                <div
                  v-if="!$v.buyer.dob.month.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
              </div>
              <div>
                <input
                  type="number"
                  min="1950"
                  max="2022"
                  v-model="$v.buyer.dob.year.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.dob.year),
                    'form-control': true,
                  }"
                  placeholder="Year"
                />
                <div
                  v-if="!$v.buyer.dob.year.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div
                  v-if="!$v.buyer.dob.year.maxLength"
                  class="invalid-feedback"
                >
                  Year shouldn't be greater than 2022.
                </div>
              </div>
              <div>
                <label for="">Gender</label>
                <select
                  v-model="$v.buyer.gender.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.gender),
                    'form-select': true,
                  }"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div v-if="!$v.buyer.gender.required" class="invalid-feedback">
                  This field is required.
                </div>
              </div>
              <div>
                <label for="">Email:</label>
                <input
                  type="email"
                  v-model="$v.buyer.email.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.email),
                    'form-control': true,
                  }"
                />
                <div v-if="!$v.buyer.email.required" class="invalid-feedback">
                  This field is required.
                </div>
                <div v-if="!$v.buyer.email.email" class="invalid-feedback">
                  This field should have an email form.
                </div>
              </div>
              <div>
                <label for="">Phone:</label>
                <input
                  type="mobile"
                  v-model="$v.buyer.phone.$model"
                  :class="{
                    'is-invalid': validateStatus($v.buyer.phone),
                    'form-control': true,
                  }"
                />
                <div v-if="!$v.buyer.phone.required" class="invalid-feedback">
                  This field is required.
                </div>
              </div>
            </div>
            <div v-else>
              <p>Thanks {{ buyer.title }} {{ buyer.fname + buyer.lname }}.</p>
              <span>Booking sent to your email.</span>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="close"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="purchase"
              v-if="!success"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      flights: null,
      success: false,
      buyer: {
        fname: null,
        lname: null,
        title: null,
        dob: {
          day: null,
          month: null,
          year: null,
        },
        gender: null,
        email: null,
        phone: null,
      },
    };
  },
  created() {
    this.flights = this.$store.getters.getFlights[0];
  },
  methods: {
    purchase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(this.buyer);
        this.success = true;
      }
    },
    close() {
      this.success = false;
      this.buyer = {
        fname: "",
        lname: "",
        title: "",
        dob: {
          day: "",
          month: "",
          year: "",
        },
        gender: "",
        email: "",
        phone: "",
      };
    },
    validateStatus(validation) {
      return typeof validation !== "undefined" ? validation.$error : false;
    },
  },
  validations: {
    buyer: {
      fname: {
        required,
      },
      lname: {
        required,
      },
      title: {
        required,
      },
      dob: {
        day: {
          required,
          minLength: minLength(0),
          maxLength: maxLength(31),
        },
        month: {
          required,
        },
        year: {
          required,
          maxLength: maxLength(2022),
        },
      },
      gender: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.card-t {
  border: 1px solid #eee;
  border-radius: 5px;
  .badge {
    background: #ddd;
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
