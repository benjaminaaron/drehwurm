
var Cube = function(col) {
    var geom = new THREE.Geometry();

    geom.vertices.push(new THREE.Vector3(4,4,-4));           // 0
    geom.vertices.push(new THREE.Vector3(4,-4,-4));          // 1
    geom.vertices.push(new THREE.Vector3(-4,-4,-4));         // 2
    geom.vertices.push(new THREE.Vector3(-4,4,-4));          // 3
    geom.vertices.push(new THREE.Vector3(4,4,4));            // 4
    geom.vertices.push(new THREE.Vector3(4,-4,4));           // 5
    geom.vertices.push(new THREE.Vector3(-4,-4,4));          // 6
    geom.vertices.push(new THREE.Vector3(-4,4,4));           // 7
    geom.vertices.push(new THREE.Vector3(-0.8,4,-0.4));      // 8
    geom.vertices.push(new THREE.Vector3(-0.8,-4,-0.4));     // 9
    geom.vertices.push(new THREE.Vector3(0.8,4,-0.4));       // 10
    geom.vertices.push(new THREE.Vector3(0.8,-4,-0.4));      // 11
    geom.vertices.push(new THREE.Vector3(-0.8,4,4));         // 12
    geom.vertices.push(new THREE.Vector3(-0.8,-4,4));        // 13
    geom.vertices.push(new THREE.Vector3(0.8,4,4));          // 14
    geom.vertices.push(new THREE.Vector3(0.8,-4,4));         // 15
    geom.vertices.push(new THREE.Vector3(0.8,-0.8,-0.4));    // 16
    geom.vertices.push(new THREE.Vector3(-0.8,-0.8,-0.4));   // 17
    geom.vertices.push(new THREE.Vector3(-4,-0.8,0.4));      // 18
    geom.vertices.push(new THREE.Vector3(-0.8,-0.8,0.4));    // 19
    geom.vertices.push(new THREE.Vector3(0.8,-0.8,0.4));     // 20
    geom.vertices.push(new THREE.Vector3(4,-0.8,0.4));       // 21
    geom.vertices.push(new THREE.Vector3(-4,-0.8,-4));       // 22
    geom.vertices.push(new THREE.Vector3(4,-0.8,-4));        // 23
    geom.vertices.push(new THREE.Vector3(-4,0.8,0.4));       // 24
    geom.vertices.push(new THREE.Vector3(-0.8,0.8,0.4));     // 25
    geom.vertices.push(new THREE.Vector3(0.8,0.8,0.4));      // 26
    geom.vertices.push(new THREE.Vector3(4,0.8,0.4));        // 27
    geom.vertices.push(new THREE.Vector3(-4,0.8,-4));        // 28
    geom.vertices.push(new THREE.Vector3(4,0.8,-4));         // 29
    geom.vertices.push(new THREE.Vector3(0.8,0.8,-0.4));     // 30
    geom.vertices.push(new THREE.Vector3(-0.8,0.8,-0.4));    // 31
    // blender green arrow + side
    geom.faces.push(new THREE.Face3(0,4,10));
    geom.faces.push(new THREE.Face3(10,14,4));
    geom.faces.push(new THREE.Face3(0,10,3));
    geom.faces.push(new THREE.Face3(10,3,8));
    geom.faces.push(new THREE.Face3(3,8,7));
    geom.faces.push(new THREE.Face3(8,7,12));
    // green arrow - side
    geom.faces.push(new THREE.Face3(5,1,11));
    geom.faces.push(new THREE.Face3(5,11,15));
    geom.faces.push(new THREE.Face3(11,1,2));
    geom.faces.push(new THREE.Face3(11,2,9));
    geom.faces.push(new THREE.Face3(2,9,6));
    geom.faces.push(new THREE.Face3(9,6,13));
    // red arrow + side
    geom.faces.push(new THREE.Face3(0,4,27));
    geom.faces.push(new THREE.Face3(0,27,29));
    geom.faces.push(new THREE.Face3(4,27,5));
    geom.faces.push(new THREE.Face3(27,5,21));
    geom.faces.push(new THREE.Face3(5,21,1));
    geom.faces.push(new THREE.Face3(21,1,23));
    // red arrow - side
    geom.faces.push(new THREE.Face3(6,2,18));
    geom.faces.push(new THREE.Face3(2,18,22));
    geom.faces.push(new THREE.Face3(6,18,7));
    geom.faces.push(new THREE.Face3(18,7,24));
    geom.faces.push(new THREE.Face3(7,24,3));
    geom.faces.push(new THREE.Face3(24,3,28));
    // blue arrow + side
    geom.faces.push(new THREE.Face3(4,5,14));
    geom.faces.push(new THREE.Face3(5,14,15));
    geom.faces.push(new THREE.Face3(13,12,7));
    geom.faces.push(new THREE.Face3(13,7,6));
    // blue arrow - side
    geom.faces.push(new THREE.Face3(0,3,29));
    geom.faces.push(new THREE.Face3(3,29,28));
    geom.faces.push(new THREE.Face3(23,1,22));
    geom.faces.push(new THREE.Face3(1,22,2));
    // inside blue + dir
    // bottom plates
    geom.faces.push(new THREE.Face3(10,8,30));
    geom.faces.push(new THREE.Face3(8,30,31));
    geom.faces.push(new THREE.Face3(9,17,11));
    geom.faces.push(new THREE.Face3(17,11,16));
    // side red -
    geom.faces.push(new THREE.Face3(9,17,19));
    geom.faces.push(new THREE.Face3(9,19,13));
    geom.faces.push(new THREE.Face3(13,19,12));
    geom.faces.push(new THREE.Face3(19,25,12));
    geom.faces.push(new THREE.Face3(12,25,8));
    geom.faces.push(new THREE.Face3(25,8,31));
    // side red +
    geom.faces.push(new THREE.Face3(10,30,26));
    geom.faces.push(new THREE.Face3(10,26,14));
    geom.faces.push(new THREE.Face3(14,26,15));
    geom.faces.push(new THREE.Face3(26,20,15));
    geom.faces.push(new THREE.Face3(20,15,11));
    geom.faces.push(new THREE.Face3(11,16,20));
    // inside blue - dir
    // bottom plates
    geom.faces.push(new THREE.Face3(24,19,25));
    geom.faces.push(new THREE.Face3(24,18,19));
    geom.faces.push(new THREE.Face3(27,26,21));
    geom.faces.push(new THREE.Face3(26,21,20));
    //side green -
    geom.faces.push(new THREE.Face3(18,19,17));
    geom.faces.push(new THREE.Face3(18,17,22));
    geom.faces.push(new THREE.Face3(22,17,23));
    geom.faces.push(new THREE.Face3(17,16,23));
    geom.faces.push(new THREE.Face3(16,23,21));
    geom.faces.push(new THREE.Face3(16,21,20));
    //side green +
    geom.faces.push(new THREE.Face3(24,25,31));
    geom.faces.push(new THREE.Face3(24,31,28));
    geom.faces.push(new THREE.Face3(28,31,30));
    geom.faces.push(new THREE.Face3(28,30,29));
    geom.faces.push(new THREE.Face3(29,30,27));
    geom.faces.push(new THREE.Face3(30,27,26));

    var mat = new THREE.MeshLambertMaterial({color: col});//, transparent:true, opacity: 0.2});
    mat.side = THREE.DoubleSide; // don't do this if performance becomes an issue, requires rearranging a lot of faces-indices to get the normals facing outwards
    geom.computeFaceNormals(); //geom.computeVertexNormals();
    this.mesh = new THREE.Mesh(geom, mat);
};

Cube.prototype = {
    toString: function() {
        return '';
    },
    func: function() {

    }
};
