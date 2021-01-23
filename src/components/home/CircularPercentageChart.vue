<template>
  <div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart">
      <path
        class="circular-chart__bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="circular-chart__fill"
        :stroke-dasharray="`${percent}, 100`"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="circular-chart__text">{{percent}}%</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "CircularPercentageChart",
  props: {
    percent: {
      type: Number,
      required: false,
      default: 1
    },
  },
};
</script>

<style lang="scss">
.single-chart {
  width: 30%;
  justify-content: space-around;
}

.circular-chart {
  display: block;
  margin: 0 auto;
  max-width: 80%;
  max-height: 250px;
  
  &__bg {
    fill: none;
    stroke: $border-gray;
    stroke-width: 1px;
  }
  &__fill {
    fill: none;
    stroke-width: 1.5;
    stroke: $app-font-color;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }
  &__text {
    fill: $app-font-color;
    font-size: 10px;
    text-anchor: middle;
  }
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>