<template>
  <div class="contact tc">
    <div class="container">
      <div class="contact-block">
        <br />
        <p class="fw600">ATELIER / SHOWROOM:<br/><br/></p>
        <p><nuxt-link to="/appointment-request">By Appointment</nuxt-link></p>
        
      </div>
      <div class="contact-block">
        <p>
          270 Lafayette St<br />
          Suite 1102<br />
          New York, NY 10012<br />
          <a href="mailto:inquiries@honornyc.com?subject=HONOR NYC">inquiries@honornyc.com</a><br />
          (212) 431-3935
        </p>
      </div>
      <br />
      <div class="contact-block">
        <p class="fw600 ttu">For press related inquiries:<br /><br /></p>
        <p>
         <a href="mailto:press@honornyc.com?subject=HONOR NYC">press@honornyc.com</a>
        </p>
      </div>
      <br />
      <div class="contact-block">
        <a href="https://www.instagram.com/honornyc/?hl=en" target="_blank">
          <img src="/images/ig-white.svg" width="24" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  min-height: 85vh;
  padding-top: var(--c-padding-top);
  padding-bottom: var(--c-padding-top);
  display: flex;
  align-items: center;
  margin-top: 75px;

  &-block {
    line-height: 1.5;
  }
}
</style>
