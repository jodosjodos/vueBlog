<template>
    <div>
        <p>Reaction time -{{ result }} ms</p>
        <p class="rank">{{ rank }} </p>
    </div>
</template> 
<script>
export default {
    name:"Results",
    props:["result"],
    data(){
        return {
            rank:null
        }
    },mounted(){
        if(this.result  < 250){
            this.rank="rapiddly people"
        }else if (this.rank < 400){
            this.rank="meduim people"
        }else {
            this.rank="slowwly"
        }
    }
}
</script>
<style>
.rank{
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>