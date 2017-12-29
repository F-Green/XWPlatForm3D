define(['Cesium'], function () {

    function initViewer(domElement){

        var viewer = new Cesium.Viewer(domElement, {
            baseLayerPicker : false,
            sceneModePicker : false,
            navigationHelpButton: false,
            homeButton:false,
            geocoder: false,
            infoBox : false,
            selectionIndicator : false,
            shadows : false,
            animation: false,
            timeline: false,
            fullscreenButton : false,
            vrButton: false
        });

        viewer._cesiumWidget._creditContainer.style.display="none"; //去掉水印
        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);   //去掉双击效果

        return viewer;

    }

    return initViewer;


});


