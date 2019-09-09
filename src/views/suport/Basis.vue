<template>
    <div>
        <!-- <first v-if="number == 0"/>
        <realize v-if="number == 1"/>
        <go v-if="number == 2"/>
        <mains v-if="number == 3"/>
        <market v-if="number == 4"/>
        <wave v-if="number == 5"/> -->
    </div>
</template>

<script>
    // import first from './components/Basis_first'
    // import realize from './components/Basis_ realize'
    // import go from './components/Basis_go'
    // import mains from './components/Basis_main'
    // import market from './components/Basis_market'
    // import wave from './components/Basis_wave'
    export default {
        data(){
            return {
                number:0,
            }
        },
        // components:{
        //     first,realize,go,mains,market,wave
        // },
        // created(){
        //     console.log(typeof( this.$route.params.num));
        //     console.log( this.$route.params.num);
        //     if(this.$route.params.num !== undefined){
        //         this.number = this.$route.params.num
        //     }
            
        //     console.log(this.number)
        // },
    }
</script>

<style lang="scss" scoped>


</style>
