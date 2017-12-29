define([
    'Cesium',
    'jquery',
    'scripts/Viewer/initViewer'
],
    function (
    Cesium,
    $,
    initViewer
) {

    function XW3D(domElement) {

        this.viewer = new initViewer(domElement);


    }

    Object.assign( XW3D.prototype, {


    });

    return XW3D;


});
