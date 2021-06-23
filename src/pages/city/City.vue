<template>
    <div>
        <city-header/>
        <city-search/>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"/>
        <city-alphabet :cities="cities" @change="handleLetterChange"/>
    </div>
</template>
<script>
  import axios from 'axios';
  import CityHeader from '../city/components/Header';
  import CitySearch from '../city/components/Search';
  import CityList from '../city/components/List';
  import CityAlphabet from '../city/components/Alphabet';
  export default{
      name:'City',
      components:{
          CityHeader,
          CitySearch,
          CityList,
          CityAlphabet,
      },
      data(){
          return {
              cities:{},
              hotCities:[],
              letter:'',
          }
      },
      mounted(){
          this.getCityInfo();
      },
      methods:{
          getCityInfo(){
              axios.get('/api/city.json')
              .then(this.getCityInfoSucc)
          },
          getCityInfoSucc(res){
              res=res.data;
              console.log(res);
              const data=res.data;
              if(res.ret&&res.data){
                  this.cities=data.cities;
                  this.hotCities=data.hotCities;
              }
          },
          handleLetterChange(letter){
              this.letter=letter;
          }
      }
  }
</script>
<style scoped>

</style>
