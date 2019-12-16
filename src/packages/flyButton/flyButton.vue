<template>
    <button @click="bindFlyButton" class="flyButton">深圳</button>
</template>
<script>
export default {
    name:"flyButton",
    props:{
       viewer:Object,
       Cesium:Object
    },
    methods:{
        bindFlyButton(){
            this.viewer.scene.camera.flyTo({destination: this.Cesium.Cartesian3.fromDegrees(114.02597366, 22.54605355, 50000)})
      }
    }
}
</script>
<style scoped>
.flyButton{
    position: absolute;
    top: 50px;
    right: 90px;
    display: inline-block;
    height: 38px;
    padding: 0 30px;
    color: #eee;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: #555;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: opacity 0.5s;
    z-index: 10;
}

.flyButton:focus{
    outline:0px
}

.flyButton:hover{
    opacity: 0.7;
}

</style>