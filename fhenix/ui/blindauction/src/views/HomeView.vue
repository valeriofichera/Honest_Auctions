<template>
  <div class="home">
    <form className='home__form'>
      <div className='app_frame'>
      <button @click="$router.push({name: 'add'})" class='products__cta'>LIST A PRODUCT</button>
    <div className='big_frame'>
      <div className='frame'>
      <div className='table__container'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Owner</th>
            <th>Due</th>
            <th>Winning Price</th>
            <th>Winner</th>
            <th>Act</th>
          </tr>
        </thead>
        <tbody>
          <div v-if="this.loading">Loading...</div>
          <template v-else><tr v-for="({name, owner, dueTime, winningPrice, winner, contract}, index) in this.myProducts" :key="name + owner + index">
              <td>{{name}}</td>
              <td>{{owner}}</td>
              <td>{{contract}}</td>
              <td>{{dueTime}}</td>
              <td>{{winningPrice}}</td>
              <td>{{winner}}</td>
              <td><img variant="primary" @click="$router.push({
    name: '/bid',
    query: { contract: `$contract` }
})" src="@/assets/cancel.svg" class="editIcon"/></td>
            </tr></template>

        </tbody>
      </table>
      </div>
      </div>
      <div className='frame'>
        <div className='table__container'>
          <table>
            <thead>
            <tr>
              <th>Product</th>
              <th>Owner</th>
              <th>Due</th>
              <th>Winning Price</th>
              <th>Winner</th>
              <th>Act</th>
            </tr>
            </thead>
            <tbody>
              <div v-if="this.loading">Loading...</div>
              <template v-else><tr v-for="({name, owner, dueTime, winningPrice, winner, contract}, index) in this.theirProducts" :key="name + owner + index">
              <td>{{name}}</td>
              <td>{{owner}}</td>
              <td>{{contract}}</td>
              <td>{{dueTime}}</td>
              <td>{{winningPrice}}</td>
              <td>{{winner}}</td>
              <td><img variant="primary" @click="$router.push({
    name: '/about',
    query: { contract: `$contract` }
})" src="@/assets/bid.svg" class="editIcon"/></td>
              </tr></template>


            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </form>  
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ChainMixins from "../../mixins/ChainMixins";

export default {
  mixins: [ChainMixins],
  name: 'HomeView',
  async mounted() {
    this.myProducts = await axios.get(`127.0.0.1:1337/get-my?owner=${this.address}`);
    this.theirProducts = await axios.get(`127.0.0.1:1337/get-their?owner=${this.address}`);
  },
  data() {
    return {loading: false, myProducts:[{name: "", owner: "", dueTime: "", winningPrice: 0, winner: "", contract: ""}], theirProducts: [{name: "", owner: "", dueTime: "", winningPrice: 0, winner: "", contract: ""}]}
  },
  methods:{
  }
}
</script>

<style>
.home__cta {
  width: 200px;
  padding: 10px;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  margin: 0;
}

.navbar {
  width: 100%;
  height: 10vh;
  background-color: #F0EBE3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 30px;
}
.navbar .header {
  width: 70%;
}
.bellIcon {
  height: 30px;
  cursor: pointer;
}
.editIcon {
  height: 20px;
  cursor: pointer;
}
.home__form {
  width: 100%;
  height: 80vh;
  padding: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
}
.home__input, .addProduct__form input, .bidProduct__form input{
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  margin: 15px 0;
  outline: none;
  border: 1px solid #576F72
}
.home__cta {
  width: 200px;
  padding: 10px;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
}

table {
  width: 95%;
  border: 1px solid #576F72;
  margin: 0 auto;
  border-collapse: collapse;
}
tr, td, th {
  border: 1px solid #576F72;
  text-align: center;
  padding: 5px;
}
.table__container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.products__cta {
  width: 70%;
  background-color: rgb(67, 143, 67);
  padding: 15px;
  color: #FFF;
  margin-bottom: 35px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
}
.addproduct__container, .bidproduct__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addproduct__container h2, .bidproduct__container h2 {
  margin-bottom: 30px;
}
.addProduct__form, .bidProduct__form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
.addProduct__cta, .bidProduct__cta {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  color: #fff;
  background-color:  rgb(67, 143, 67);
  cursor: pointer;
}
.bidProduct__name {
  margin-bottom: 20px;
}

.frame {
  background: #fff;
  height: 600px;
  border: 1px solid #ddd;
  padding: 20px;
  /*margin-bottom: 2em; !* Provides consistent space between frames *!*/
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow:scroll;
  /* Now these will be relative to #app's max-width */
  width: 100%; /* Takes the full width of #app */
  min-height: 200px; /* Minimum height set for each frame */
  /* No need to set margin auto here as it will follow #app */
}

.big_frame {
  /*max-width: 800px; !* Adjust the width as per the design requirement *!*/
  /*min-width: 800px;*/
  margin: 20px auto; /* Centers the container within the body based on its max-width */
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.app_frame{
  /*max-width: 800px; !* Adjust the width as per the design requirement *!*/
  /*min-width: 800px;*/
  margin: 5px auto; /* Centers the container within the body based on its max-width */
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

</style>
