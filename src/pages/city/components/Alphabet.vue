<template>
    <ul class="list">
        <li class="item">a</li>
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
}
</script>
<style scoped>
    .list{
        display: flex;
        flex-direction: column;
        justify-content: center;        
        position: absolute;
        top:1.58rem;
        bottom: 0;
        right:0;
        width:.4rem;
        /* background-color: red; */
    }
    .item{
        text-align: center;
        line-height: .4rem;
        color:#00bcd4;
    }
</style>