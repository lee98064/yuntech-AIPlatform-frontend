<template>
  <!--競賽時程表-->
  <section id="timeline">
    <div class="container">
      <div class="title" style="padding-top: 70px">
        <h1 class="text-center mb-4">
          <b style="vertical-align: middle">競賽時程表</b>
        </h1>
      </div>
      <div class="col-md-">
        <div class="timeline-centered timeline-sm">
          <article class="timeline-entry">
            <div class="timeline-entry-inner">
              <time class="timeline-time"><span>9/29</span><span></span></time>
              <div class="timeline-icon bg-violet"></div>
              <div class="timeline-label bg-violet">
                <h4 class="timeline-title">公布訊息、開始報名</h4>
              </div>
            </div>
          </article>
          <article class="timeline-entry left-aligned">
            <div class="timeline-entry-inner">
              <time class="timeline-time"><span>10/6</span><span></span></time>
              <div class="timeline-icon bg-blue"></div>
              <div class="timeline-label bg-blue">
                <h4 class="timeline-title">AWS 主題演講</h4>
              </div>
            </div>
          </article>
          <article class="timeline-entry">
            <div class="timeline-entry-inner">
              <time class="timeline-time"><span>10/15</span><span></span></time>
              <div class="timeline-icon bg-light1"></div>
              <div class="timeline-label bg-light1">
                <h4 class="timeline-title">
                  AWS雲端服務平台、Deep Racer 戰略分享會
                </h4>
              </div>
            </div>
          </article>
          <article class="timeline-entry left-aligned">
            <div class="timeline-entry-inner">
              <time class="timeline-time"><span>10/31</span><span></span></time>
              <div class="timeline-icon bg-orange"></div>
              <div class="timeline-label bg-orange">
                <h4 class="timeline-title">截止報名</h4>
              </div>
            </div>
          </article>
          <article class="timeline-entry">
            <div class="timeline-entry-inner">
              <time class="timeline-time"><span>11/17</span><span></span></time>
              <div class="timeline-icon bg-yellow"></div>
              <div class="timeline-label bg-yellow">
                <h4 class="timeline-title">積分賽(1/2)</h4>
              </div>
            </div>
          </article>
          <article class="timeline-entry left-aligned">
            <div class="timeline-entry-inner">
              <time class="timeline-time"><span>11/24</span><span></span></time>
              <div class="timeline-icon bg-pink"></div>
              <div class="timeline-label bg-pink">
                <h4 class="timeline-title">積分賽(2/2)、公布名次及頒獎</h4>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div style="text-align: right">
        <p>*主辦單位因應實際情況得調整競賽時程</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Area4',
}
</script>

<style scoped>
#timeline {
  background-color: #eeeeee;
}
.timeline-centered {
  position: relative;
  margin-bottom: 30px;
}
.timeline-centered.timeline-sm .timeline-entry {
  margin-bottom: 20px !important;
}
.timeline-centered.timeline-sm
  .timeline-entry
  .timeline-entry-inner
  .timeline-label {
  padding: 1em;
}
.timeline-centered:before,
.timeline-centered:after {
  content: ' ';
  display: table;
}
.timeline-centered:after {
  clear: both;
}
/*時間軸的直線*/
.timeline-centered:before {
  position: absolute;
  display: block;
  width: 7px;
  background: #ffffff;
  left: 50%;
  top: 20px;
  bottom: 20px;
  margin-left: -4px;
}

.timeline-centered .timeline-entry {
  position: relative;
  width: 50%;
  float: right;
  clear: both; /*清除兩邊浮動區塊*/
}

.timeline-centered .timeline-entry.left-aligned {
  float: left;
}

/*讓圓圈在中間*/
.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {
  margin-left: 0;
  margin-right: -28px;
}

/*日期置右*/
.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-time {
  left: auto;
  right: -70px;
  text-align: left;
}

.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-icon {
  float: right;
}
.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-label {
  margin-left: 0;
  margin-right: 85px;
}

/*左邊方塊箭頭朝右*/
.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-label:after {
  left: auto;
  right: 0;
  margin-left: 0;
  margin-right: -9px;
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.timeline-centered .timeline-entry .timeline-entry-inner {
  position: relative;
  margin-left: -31px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {
  position: absolute;
  left: -70px;
  padding: 10px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {
  display: block;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-time
  > span:first-child {
  font-size: 18px;
  font-weight: bold;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-time
  > span:last-child {
  font-size: 12px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  border: 7px solid #ffffff;
  float: left;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-green {
  background-color: #488c6c;
  color: #fff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-blue {
  background-color: #0a819c;
  color: #fff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-light1 {
  background-color: #33b133;
  color: #fff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-yellow {
  background-color: #f2994b;
  color: #fff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-orange {
  background-color: #e9662c;
  color: #fff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-pink {
  background-color: #bf3773;
  color: #fff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-violet {
  background-color: #9351ad;
  color: #fff;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {
  position: relative;
  background: #ffffff;
  padding: 1.7em;
  margin-left: 85px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-green {
  background: #488c6c;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-green:after {
  border-color: transparent #488c6c transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-green
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-green
  p {
  color: #ffffff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-orange {
  background: #e9662c;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-orange:after {
  border-color: transparent #e9662c transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-orange
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-orange
  p {
  color: #ffffff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-yellow {
  background: #f2994b;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-yellow:after {
  border-color: transparent #f2994b transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-yellow
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-yellow
  p {
  color: #ffffff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-blue {
  background: #0a819c;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-blue:after {
  border-color: transparent #0a819c transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-blue
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-blue
  p {
  color: #ffffff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-light1 {
  background: #33b133;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-light1:after {
  border-color: transparent #33b133 transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-light1
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-light1
  p {
  color: #ffffff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-pink {
  background: #bf3773;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-pink:after {
  border-color: transparent #bf3773 transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-pink
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-pink
  p {
  color: #ffffff;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-violet {
  background: #9351ad;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-violet:after {
  border-color: transparent #9351ad transparent transparent;
}
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-violet
  .timeline-title,
.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label.bg-violet
  p {
  color: #ffffff;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 9px 9px 0;
  border-color: transparent #ffffff transparent transparent;
  left: 0;
  top: 20px;
  margin-left: -9px;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label
  .timeline-title {
  margin-bottom: 10px;
  font-family: 'Oswald';
  font-weight: bold;
}
</style>
