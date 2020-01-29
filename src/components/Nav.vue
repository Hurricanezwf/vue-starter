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
                       active-text-color="#ffd04b"
                       router>
                   <el-submenu index="1">
                       <template slot="title">菜单项</template>
                       <el-menu-item index="/foo">Foo</el-menu-item>
                       <el-menu-item index="/bar">Bar</el-menu-item>
                       <el-menu-item index="/">首页</el-menu-item>
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
                activeIndex: this.$route.path,
                currentUser: '',
            };
        },
        components: {
            Table,
        },
        created: function() {
            if (this.$route.path == '/') {
                this.currentUser = 'xxx';
            } else {
                this.currentUser = 'yyy';
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>