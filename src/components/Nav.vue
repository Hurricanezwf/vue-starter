<template>
    <div id="nav">
        <el-row>
           <el-col :span="21">
               <el-menu
                       :default-active="activeIndex"
                       mode="horizontal"
                       @select="handleSelect"
                       background-color="#141f29"
                       text-color="#fff"
                       active-text-color="#ffd04b">
                   <el-submenu index="1">
                       <template slot="title">我的工作台</template>
                       <el-menu-item index="1-1"><router-link to="/foo">GoTo Foo</router-link></el-menu-item>
                       <el-menu-item index="1-2"><router-link to="/bar">GoTo Bar</router-link></el-menu-item>
                       <el-menu-item index="1-3">选项3</el-menu-item>
                       <el-submenu index="1-4">
                           <template slot="title">选项4</template>
                           <el-menu-item index="1-4-1">选项1</el-menu-item>
                           <el-menu-item index="1-4-2">选项2</el-menu-item>
                           <el-menu-item index="1-4-3">选项3</el-menu-item>
                       </el-submenu>
                   </el-submenu>
               </el-menu>
           </el-col>
           <el-col :span="3">
               <i class="el-icon-user current-user"> {{ currentUser }} </i>
           </el-col>
        </el-row>
    </div>
</template>

<style>
    .el-row {
        height: 60px !important;
        width: 100%;
    }

    .el-col {
        height: 60px !important;
        background-color: #141f29;
    }

    .el-menu {
        float: right !important;
    }

    .current-user {
        float: right !important;
        padding: 20px;
        color: #ffffff;
    }
</style>


<script>
    import Table from "../pages/Table.vue";
    export default {
        data() {
            return {
                activeIndex: '1-1',
                currentUser: "wenfeng.zhou",
            };
        },
        components: {
            Table,
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                if (this.currentUser == "wenfeng.zhou") {
                    this.currentUser = "kunxi.lu";
                    document.getElementById("body").innerHTML="<p>Hello WOrld</p>"
                } else {
                    this.currentUser = "wenfeng.zhou";
                }
            }
        }
    }
</script>