<template>
<div>
  <div id="app">
    <div class="banner"></div>
    <div class="container">
      <div class="form-group pl-3">
        <div class="flex items-center flex-grow-2 border-r-2 px-6">
          <label for="keyword">
            <i class="fas fa-search"></i>
            <input
              type="text"
              name="keyword"
              placeholder="Aramak istediğiniz akademisyen Id'sini girin"

            />
          </label>
        </div>



        <div class="flex items-center flex p-3">
          <!-- Doesn't do anything -->
          <button type="button" class="button">
            Ara
          </button>
        </div>
      </div>

<!--      <div class="mt-12">-->
<!--        <div-->
<!--          v-for="job in filteredJobs"-->
<!--          :key="job.id"-->
<!--          class="flex border-b py-6"-->
<!--        >-->
<!--          <div class="flex items-center flex-shrink-0 pr-5">-->
<!--            <i :class="[job.icon, 'brand-logo']" :style="{ color: job.iconColor }"></i>-->
<!--          </div>-->

<!--          <div class="flex justify-between flex-col flex-grow">-->
<!--            <div class="flex justify-between items-center mb-2">-->
<!--              <h2 class="text-xl font-semibold">-->
<!--                {{ job.title }}-->
<!--              </h2>-->

<!--              <div-->
<!--                class="font-bold"-->
<!--                :class="[-->
<!--                                'px-5 py-1 text-sm rounded-full',-->
<!--                                job.type.toLowerCase() === 'full time'-->
<!--                                    ? 'bg-green-200'-->
<!--                                    : 'bg-orange-200'-->
<!--                            ]"-->
<!--              >-->
<!--                {{ job.type }}-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="flex justify-between text-gray-500 text-sm font-bold">-->
<!--              <div class="flex">-->
<!--                            <span class="pr-8">-->
<!--                                <i class="far fa-building text-gray-500 mr-1"></i>-->

<!--                            </span>-->
<!--                <span>-->
<!--                                <i class="fas fa-map-marker-alt text-gray-500 mr-1"></i>-->

<!--                            </span>-->
<!--              </div>-->

<!--              <div>-->
<!--                <i class="fas fa-calendar-week text-gray-500 mr-1"></i>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.flex-grow-2 {
  flex-grow: 2;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
}

.banner {
  height: 92px;
  border-radius: 16px;
  margin: 20px 40px 0;
  background: #367bff;
  background: linear-gradient(to right, #367bff 0%, #28bdf8 100%);
}

.form-group {
  display: flex;
  margin-top: -46px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 25px 50px -12px rgba(40, 189, 248, 0.4);
}
.form-group input {
  padding: 0.8rem;
  margin: auto 0.6rem;
  flex-grow: 1;
  font-size: 15px;
  width: 100%;
  font-weight: 700;
  color: #a0a9b3 !important;
}

i {
  flex-shrink: 0;
  color: #367bff;
}

label {
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
}

.button {
  background-color: #367bff;
  color: white;
  display: block;
  width: 100%;
  padding: 0 3.4rem;
  min-height: 60px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
}

.brand-logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  width: 50px;
  height: 50px;
  border: 1px solid #edf2f7;
  border-radius: 12px;
}

.popover-container {
  width: 100%;
}

.popover-content {
  background-color: white !important;
  box-shadow: 0 10px 15px -3px rgba(40, 189, 248, 0.1), 0 4px 6px -2px rgba(40, 189, 248, 0.05) !important;
  border-color: #edf2f7 !important;
  border-radius: 12px !important;
}
</style>
