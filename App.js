require.config({
    paths:{
        'Cesium': 'CesiumUnminified/Cesium',
        'jquery': 'libs/jquery-3.1.0.min'


    },
    shim:{
        'Cesium':{exports:'Cesium'},
        'jquery':{exports:'$'}
    }
});

require([
        'Cesium',
        'jquery',
        'scripts/XW3D'
    ],
    function (
        Cesium,
        $,
        XW3D
    ) {

        App();

        function App() {

            var xw3d = new XW3D('cesiumContainer');

        console.log("aaa")
        }

        return App
});




