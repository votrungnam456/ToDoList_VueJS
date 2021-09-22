<template>
<div class="row mt-15">
    <div class="col-lg-12">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th class="text-center">STT</th>
                    <th class="text-center">Tên</th>
                    <th class="text-center">Trạng Thái</th>
                    <th class="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(itemToDoList,index) in toDoList" :key="index">
                    <td>{{itemToDoList.id}}</td>
                    <td>{{itemToDoList.name}}</td>
                    <td class="text-center">
                        <span :class="changeClass(itemToDoList.status)">
                            {{itemToDoList.status | mapStatus }}
                        </span>
                    </td>
                    <td class="text-center">
                        <button @click="getUpdateItem(itemToDoList)" type="button" class="btn btn-warning">
                            Sửa
                        </button>
                        &nbsp;
                        <button @click="deleteItem(itemToDoList)" type="button" class="btn btn-danger">
                            Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: "list",
    props: {
        toDoList: Array,
    },
    methods: {
        changeClass(status) {
            switch (status) {
                case 0:
                    return "text-success";

                case 1:
                    return "text-primary";

                default:
                    return "text-danger";
            }
        },
        deleteItem(itemToDoList) {
            this.$emit("deleteItem", {
                idItem: itemToDoList.id
            });
        },
        getUpdateItem(itemToDoList) {
            this.$emit("getUpdateItem", {
                idItem: itemToDoList.id,
                editData: {
                    name: itemToDoList.name,
                    status: itemToDoList.status
                }
            });
        }
    },
    filters: {
        mapStatus:(status)=>{
            switch (status) {
                case 0:
                    return "High";
                case 1:
                    return "Medium"
                case 2:
                    return "Low"                                        
                default:
                    break;
            }
        }
    }
}
</script>

<style>

</style>
