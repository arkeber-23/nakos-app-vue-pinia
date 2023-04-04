<template>
    <div class="nav">
        <router-link to="/home">Home</router-link> | 
        <router-link to="/images">Images</router-link>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
.nav{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-bottom:2px solid  #262a58b4; ;
}
</style>