<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="less">
html,
body {
    padding: 0;
    margin: 0;
}

body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px;
    color: aliceblue;
}
</style>