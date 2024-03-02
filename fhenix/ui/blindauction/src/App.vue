<template>
  <div>
  <nav className='navbar'>
    <div className='header'>
        <h2>Fhenix Auction</h2>
      </div>
  </nav>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  width: 100%;
  height: 7vh;
  background-color: #F0EBE3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 30px;
}
</style>
