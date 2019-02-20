<template>
    <div class="Footer">
        <ul>
            <li><router-link to="/films"><i class="iconfont icon-dianying"></i><p>电影</p></router-link></li>
            <li><router-link to="/cinemas"><i class="iconfont icon-yingyuan"></i><p>影院</p></router-link></li>
            <li><router-link to="/pingtuan"><i class="iconfont icon-order-copy"></i><p>9.9平团</p></router-link></li>
            <li><router-link to="/center"><i class="iconfont icon-wode"></i><p>我的</p></router-link></li>
            <!-- <li><a href=""><i class="iconfont icon-dianying"></i><p>电影</p></a></li>
            <li><a href=""><i class="iconfont icon-yingyuan"></i><p>影院</p></a></li>
            <li><a href=""><i class="iconfont icon-order-copy"></i><p>9.9平团</p></a></li>
            <li><a href=""><i class="iconfont icon-wode"></i><p>我的</p></a></li> -->
        </ul>
    </div>
</template>

<script>
export default {
  /* eslint-disable */
}
</script>

<style lang='less' scope>  
    .Footer{
        position: fixed;
        height: 49px;
        width: 100%;
        bottom:0;
        left: 0; 
        ul{
            display: flex;
            li{
                flex: 1;
                margin-top:10px;
                text-align: center;
                
                a{
                    display: flex;
                    flex-direction: column;
                    text-decoration: none;
                    font-size: 15px;  color: red;
                    line-height: 15px;
                    color:black;
                    }
                    p{
                        line-height: 20px;
                    }
                 }
        }

    }
</style>
