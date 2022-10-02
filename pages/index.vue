<template>
  <div>
    <Area1 id="area1" />
    <About id="about" />
    <Rule id="rule" />
    <Reward id="reward" />
    <TimeLine id="timeline" />
    <SignUpStep id="signupstep" />
  </div>
</template>

<script>
import Area1 from '~/components/IndexPage/Area1.vue'
import TimeLine from '../components/IndexPage/TimeLine.vue'
import About from '~/components/IndexPage/About.vue'
import Rule from '~/components/IndexPage/Rule.vue'
import Reward from '~/components/IndexPage/Reward.vue'
import SignUpStep from '~/components/IndexPage/SignUpStep.vue'
export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    Area1,
    TimeLine,
    About,
    Rule,
    Reward,
    SignUpStep,
  },
}
</script>
