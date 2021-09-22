<template>
<div class="col-lg-6">
     <div class="input-group">
          <input v-model="dataSearch" @keyup="searchItem" type="text" class="form-control" placeholder="Nhập từ khóa..." />
          <span class="input-group-btn">
               <button @click="clear" class="btn btn-primary" type="button">
                    Clear
               </button>
          </span>
     </div>
</div>
</template>

<script>
export default {

     data() {
          return {
               dataSearch: ""
          }
     },
     methods: {
          searchItem() {
               this.$emit("searchItem",{keyword:this.dataSearch})
          },
          clear(){
               this.dataSearch = "";
               this.searchItem();
          }
     },
     name: "search",

}
</script>

<style>

</style>
