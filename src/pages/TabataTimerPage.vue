<template>
  <q-page class="flex items-center justify-evenly">
    <div class="w-[200px]">
      <div :class="{ 'pointer-events-none opacity-50': workoutInProgress}">
        <q-input
          class="block"
          type="number"
          v-model="setsAmount"
          :min="1"
          :max="30"
          label="Ilość serii"
      ></q-input>
      <q-input
          class="block"
          type="number"
          v-model="workoutTime"
          :min="1"
          :max="3600"
          label="Czas pracy"
      ></q-input>
      <q-input
          class="block"
          type="number"
          v-model="restTime"
          :min="0"
          :max="3600"
          label="Czas odpoczynku"
      ></q-input>
      </div>
      <q-btn v-if="!workoutInProgress" class="w-full mt-[48px]" color="primary" @click="toggleStart(true)" label="Start"/>
      <div v-else class="flex flex-col gap-[16px] text-[20px]" >
        <q-btn class="w-full mt-[48px]" color="primary" label="Stop" @click="toggleStart(false)"/>
        <p>Aktualna seria: {{ currentSet }}</p>
        <p v-if="workout[currentSetIndex].type === 'workout'" class="bg-green p-[16px]">Praca: {{ workout[currentSetIndex].time }} s</p>
        <p v-if="workout[currentSetIndex].type === 'rest'" class="bg-red p-[16px]">Odpoczynek: {{ workout[currentSetIndex].time }} s</p>
      </div>
    </div>

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';


defineOptions({
  name: 'TabataTimerPage'
});

const currentSetIndex = ref(0)
const setsAmount = ref(0)
const workoutTime = ref(0)
const restTime = ref(0)
const currentSet = computed(() => Math.round((currentSetIndex.value + 1) / 2))
const workout = ref<{ time: number, type: 'workout' | 'rest'}[]>([])
const workoutInProgress = ref(false) 
const fillWorkout = () => {
  workout.value = []
  for(let i = 0; i < setsAmount.value; i++) {
    workout.value.push({
      time: workoutTime.value,
      type: 'workout'
    })
    workout.value.push({
      time: restTime.value,
      type: 'rest'
    })
  }
}
// const entireTime = computed(() : number => {
//   const res = workout.value.map(x => x.workout + x.rest).reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
//   },0);

// return res
// })
// const isWorkout = ref(true)
// const isRest = ref(false)
// const entireIntervalTime = computed(() => workoutTime.value + restTime.value)
const intervalClbk = () => {
  const { time } = workout.value[currentSetIndex.value]
  if(time > 1) {
    workout.value[currentSetIndex.value].time -= 1
    return
  }
  if(currentSetIndex.value === workout.value.length - 1) {
    toggleStart(false)
    return
  }
  currentSetIndex.value += 1
}
let interval = setInterval(intervalClbk, 1000)
const toggleStart = (value : boolean) => {
  currentSetIndex.value = 0
  clearInterval(interval)
  fillWorkout()
  workoutInProgress.value = value
  if(value) interval = setInterval(intervalClbk, 1000)
}
</script>
