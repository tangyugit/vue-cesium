<template>
    <div class="home">
        <div id="cesiumContainer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            viewer: ''
        }
    },
    mounted() {
        this.init();
        this.setCamera();
    },
    methods: {
        init() {
            this.viewer = new this.Cesium.Viewer('cesiumContainer', {
                animation : false,//是否创建动画小器件，左下角仪表
                baseLayerPicker : false,//是否显示图层选择器
                fullscreenButton : false,//是否显示全屏按钮
                geocoder : false,//是否显示geocoder小器件，右上角查询按钮
                homeButton : false,//是否显示Home按钮
                infoBox : false,//是否显示信息框
                sceneModePicker : true,//是否显示3D/2D选择器
                selectionIndicator : false,//是否显示选取指示器组件
                timeline : false,//是否显示时间轴
                navigationHelpButton : false,//是否显示右上角的帮助按钮
                sceneMode : this.Cesium.SceneMode.COLUMBUS_VIEW,//初始场景模式(SCENE3D ,SCENE2D ,COLUMBUS_VIEW ,MORPHING )
                imageryProvider: new this.Cesium.ArcGisMapServerImageryProvider({
                    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
                }),
            });

            this.viewer.scene.globe.enableLighting = true;//阳光照射区域高亮
            this.viewer._cesiumWidget._creditContainer.style.display = "none";  //去掉logo
        },
        setCamera() {
            this.viewer.scene.camera.flyTo({
                destination : this.Cesium.Cartesian3.fromDegrees(116.3, 39.9, 1000),
                orientation: {
                    heading : this.Cesium.Math.toRadians(0), 
                    pitch : this.Cesium.Math.toRadians(-45), 
                    roll : 0.0                          
                },
                duration: 3,//动画持续时间 
                complete: ()=>{ //飞行完毕后执行的动作
                    this.addPoint();
                }
            })
        },
        addPoint() {
            let model = this.viewer.scene.primitives.add( this.Cesium.Model.fromGltf( {//异步的加载模型
                url : `${require('@public/models/CesiumAir/Cesium_Air.gltf')}`,
                modelMatrix : this.Cesium.Transforms.eastNorthUpToFixedFrame(
                    this.Cesium.Cartesian3.fromDegrees( 116.3, 39.9, 1000 )
                ), //模型矩阵
                scale : 200.0 //缩放
            } ) );
        },
    }
}
</script>

<style scoped>

</style>
