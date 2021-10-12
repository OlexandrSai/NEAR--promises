<template>
  <Header/>
  <SecondSection/>
  <ThirdSection/>
  <FourthSection/>
  <FifthSection/>
  <Footer/>
</template>

<script>
import  Header from  '@/components/Header.vue'
import  SecondSection from  '@/components/SecondSection.vue'
import  ThirdSection from  '@/components/ThirdSection.vue'
import  FourthSection from  '@/components/FourthSection.vue'
import  FifthSection from  '@/components/FifthSection.vue'
import  Footer from  '@/components/Footer.vue'
export default {
  components: {
    Header,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    Footer
  }
}
</script>