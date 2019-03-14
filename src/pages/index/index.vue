<template>
  <div>
    <index-menu @selected="selectedAction"></index-menu>
  </div>
</template>

<script>
import menu from "../../components/index/menu";

export default {
  components: {
    "index-menu": menu
  },
  methods: {
    
     selectedAction(index){
       console.log(index)
     }
  }
};
</script>

 
 