<template>
  <div class="calendar">
    <div
      class="month-wrapper"
      v-for="(month, monthIdx) in months"
      :key="monthIdx"
    >
      <h3 class="month-name">{{ month.month }}</h3>
      <div class="month">
        <template v-for="(day, idx) in month.days" :key="idx">
          <day
            :day="day"
            :color="'#cccccc'"
            :dayId="(day + 1).toString() + (monthIdx + 1).toString()"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import day from "@/components/day.vue";
export default {
  name: "calendar",
  components: { day },
  data() {
    return {
      months: [
        {
          month: "January",
          days: 31,
        },
        {
          month: "February",
          days: 28,
        },
        {
          month: "March",
          days: 31,
        },
        {
          month: "April",
          days: 30,
        },
        {
          month: "May",
          days: 31,
        },
        {
          month: "June",
          days: 30,
        },
        {
          month: "July",
          days: 31,
        },
        {
          month: "August",
          days: 31,
        },
        {
          month: "September",
          days: 30,
        },
        {
          month: "October",
          days: 31,
        },
        {
          month: "November",
          days: 30,
        },
        {
          month: "December",
          days: 31,
        },
      ],
      dataLoaded: false,
      coloredDays: [],
    };
  },
  methods: {},
  watch: {
    isDataLoaded() {
      this.$nextTick(() => {
        this.coloredDays = Array.from(document.querySelectorAll(".hasbd"));
        console.log(this.coloredDays);
        this.coloredDays.forEach((day) => {
          day.style.background = this.$store.getters.mainColor;
        });
      });
    },
  },
  computed: {
    isDataLoaded() {
      return this.$store.getters.dataLoaded;
    },
  },
};
</script>

<style scoped lang="scss">
.calendar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.month {
  display: grid;
  max-width: 200px;
  grid-template-columns: repeat(7, 1fr);

  &-name {
    margin: 0 0 5px 5px;
    text-align: left;
  }
}
</style>
