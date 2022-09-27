<template>
  <div>
    <Area1 />
    <Area2 />
    <Area4 />
  </div>
</template>

<script>
import Area1 from '~/components/IndexPage/Area1.vue'
import Area2 from '~/components/IndexPage/Area2.vue'
import Area4 from '~/components/IndexPage/Area4.vue'
export default {
  name: 'IndexPage',
  layout: 'default',
  components: { Area1, Area2, Area4 },
}
</script>
