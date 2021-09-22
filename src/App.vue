<template>
<div id="app">
    <div class="container">
        <div class="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
        </div>
        <div class="row">
            <AddItem @addItem="addItemToDoList" :isEditing="isEditing" :editData="editData" @updateItem="updateItemToDoList" />
            <div class="col-lg-8">
                <button @click="activeAdd" type="button" class="btn btn-primary">
                    Thêm Công Việc
                </button>
                <div class="row mt-15">
                    <Search @searchItem="searchItemToDoList" />
                    <FiltersAndSort @filterSort="filterSortToDoList" />
                </div>
                <List :toDoList="toDoList" @deleteItem="deleteItemToDoList" @getUpdateItem="getUpdateItemToDoList" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AddItem from './component/AddItem'
import FiltersAndSort from './component/FiltersAndSort'
import List from './component/List'
import Search from './component/Search'
import * as CallAPI from './constanst/API'
export default {
    methods: {
        loadData() {
            CallAPI.loadData().then(res => {
                this.toDoList = res.data;
                this.baseToDoList = res.data
            })
        },
        addItemToDoList(data) {
            CallAPI.addItemToDoList(data)
                .then(() => {
                    this.loadData();
                    this.clearData();
                }).catch(err => {
                    console.log(err);
                })
        },
        deleteItemToDoList(data) {
            let result = confirm("Bạn có muốn xóa công việc này ?");
            if (result == true) {
                CallAPI.deleteItemToDoList(data)
                    .then(res => {
                        this.loadData();
                    }).catch(err => {
                        console.log(err);
                    })
            }

        },
        getUpdateItemToDoList(data) {
            this.editData.id = data.idItem;
            this.editData.name = data.editData.name;
            this.editData.status = data.editData.status;
            this.isEditing = true;
        },
        updateItemToDoList(data) {
            CallAPI.updateItemToDoList(data)
                .then(res => {
                    this.loadData();
                    this.isEditing = false;
                    this.clearData();
                }).catch(err => {
                    console.log(err);
                })
        },
        activeAdd() {
            this.isEditing = false;
            this.clearData();
        },
        searchItemToDoList(dataSearch) {
            this.dataSearch = dataSearch
            this.toDoList = this.baseToDoList.filter(item => {
                if (item.name.includes(dataSearch.keyword)) {
                    return true;
                } else {
                    return false;
                }
            })
        },
        filterByStatus(array, status) {
            let returnArray = array.filter(item => {
                if (item.status == status) {
                    return true;
                } else {
                    return false;
                }
            })
            return returnArray
        },
        filterSortToDoList(value) {
            this.searchItemToDoList(this.dataSearch);
            switch (value.valueSelection * 1) {
                case 0: {
                    this.toDoList = this.filterByStatus(this.toDoList, 0)
                    break;
                }
                case 1: {
                    this.toDoList = this.filterByStatus(this.toDoList, 1)
                    break;
                }
                case 2: {
                    this.toDoList = this.filterByStatus(this.toDoList, 2)
                    break;
                }
                case 3: {
                    this.toDoList.sort((a, b) => {
                        if (a.name > b.name) return 1;
                        else if (a.name < b.name) return -1;
                        else return 0;
                    })
                    break;
                }
                case 4: {
                    this.toDoList.sort((a, b) => {
                        if (a.name > b.name) return -1;
                        else if (a.name < b.name) return 1;
                        else return 0;
                    })
                    break;
                }
                default:
                    break;
            }
        },
        clearData() {
            this.editData.id = 0;
            this.editData.name = "";
            this.editData.status = 0;
        }
    },
    name: 'app',
    components: {
        AddItem,
        FiltersAndSort,
        List,
        Search
    },
    data() {
        return {
            title: 'To do list project Vue',
            toDoList: [{
                    id: 1,
                    name: "Học lập trình A",
                    status: 0
                },
                {
                    id: 2,
                    name: "Học lập trình B",
                    status: 1
                },
                {
                    id: 3,
                    name: "Học lập trình C",
                    status: 2
                },
            ],
            baseToDoList: [],
            isEditing: false,
            editData: {
                id: 0,
                name: "",
                status: 0
            },
            dataSearch: {
                keyword: ""
            }
        }
    },
    created() {
        this.loadData();
    },
}
</script>

<style>

</style>
