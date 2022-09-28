<template>
  <div>
    <Area1 />
    <About id="about" />
    <TimeLine id="timeline" />
  </div>
</template>

<script>
import Area1 from '~/components/IndexPage/Area1.vue'
import Area2 from '~/components/IndexPage/Area2.vue'
import TimeLine from '../components/IndexPage/TimeLine.vue'
import About from '~/components/IndexPage/About.vue'
export default {
  name: 'IndexPage',
  layout: 'default',
  components: { Area1, Area2, TimeLine, About },
}
</script>
