<template>
<div class="col-lg-6">
    <select v-model="valueSelection" @change="filterSort" class="form-control">
        <option v-for="(data,index) in dataFilterSort" :key="index" :value="data.value">{{data.status}}</option>
    </select>
</div>
</template>

<script>
export default {
    methods: {
        filterSort() {
            this.$emit("filterSort", {
                valueSelection: this.valueSelection
            })
        }
    },
    data() {
        return {
            valueSelection: -1,
            dataFilterSort: [{
                    value: -1,
                    status: "Tất cả"
                },
                {
                    value: 0,
                    status: "High"
                },
                {
                    value: 1,
                    status: "Medium"
                },
                {
                    value: 2,
                    status: "Low"
                },
                {
                    value: 3,
                    status: "A-Z"
                },
                {
                    value: 4,
                    status: "Z-A"
                }
            ]
        }
    },
    name: "filterAndSort",
}
</script>

<style >

</style>
