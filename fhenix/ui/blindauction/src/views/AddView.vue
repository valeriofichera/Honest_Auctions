<template>
  <div>
      <div className='addproduct__container'>
        <h2>Add a new product</h2>
        <form className="addProduct__form">
          <label htmlFor='name'>Name of the product</label>
          <input type="text" name='name' v-model="name" required/>

          <label htmlFor='due'>Due data and time</label>
          <input type="time" name='due' v-model="dueTime" required/>

          <button className='addProduct__cta' @click="onSend">SEND</button>
        </form>
      </div>

    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ChainMixins from "../../mixins/ChainMixins";
export default {
  mixins: [ChainMixins],
  name: 'HomeView',
  methods:{
    async onSend() {
      const product = {name: this.name,
      owner: this.address,
      dueTime: this.dueTime,
      winningPrice: 0,
      winner: "None"};

      await axios.post(`127.0.0.1:1337/set`, JSON.stringify(product));
    }
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
