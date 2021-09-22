<template>
<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    <div class="panel panel-warning">
        <div class="panel-heading">
            <h3 class="panel-title">{{!isEditing ? "Thêm Công Việc": "Sửa công việc"}}</h3>
        </div>
        <div class="panel-body">
            <form>
                <div class="form-group">
                    <label>Tên :</label>
                    <input v-model="editData.name" type="text" class="form-control" value="" />
                </div>
                <label>Trạng Thái :</label>
                <select v-model="editData.status" class="form-control" required="required">
                    <option v-for="(data,index) in dataStatus" :key="index" :value="data.value">{{data.status}}</option>
                </select>
                <br />
                <div class="text-center">
                    <button @click.prevent="submitItem" type="submit" class="btn btn-warning">{{!isEditing ? "Thêm": "Sửa"}}</button>&nbsp;
                    <button @click.prevent="cancelAction" class="btn btn-danger">Hủy Bỏ</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            dataStatus: [{
                value:0,
                status:"High"
            },
            {
                value:1,
                status:"Medium"
            },
            {
                value:2,
                status:"Low"
            }]
        }
    },
    props: {
        isEditing: Boolean,
        editData: {
            id: Number,
            name: String,
            status: Number
        }
    },
    methods: {
        submitItem() {
            if (!this.isEditing) {
                this.$emit("addItem", {
                    name: this.editData.name,
                    status: this.editData.status * 1
                })
            } else {
                this.$emit("updateItem", {
                    id: this.editData.id,
                    name: this.editData.name,
                    status: this.editData.status * 1
                })
            }
        },
        cancelAction() {
            this.nameToDo = "",
                this.status = 0
        },
        testAction() {
            if (isEditing) {
                return "editData.name"
            } else {
                return "nameToDo"
            }
        }
    },
    name: "AddItem",
}
</script>

<style lang="">

</style>
