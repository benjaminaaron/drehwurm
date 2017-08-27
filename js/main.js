var camera, controls, scene, renderer;

init();
render();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 20;
    // camera.lookAt(new THREE.Vector3(10, 0, 0));
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // remove when using animation loop
    controls.enableZoom = true;
    
    var geom = new THREE.Geometry();

    // extract vertices from blender, via blender.stackexchange.com/a/51712
    // import bpy
    // print([bpy.context.object.matrix_world * v.co for v in bpy.context.object.data.vertices])

    var vertices = [];
    vertices.push(new THREE.Vector3(4,4,-4));           // 0
    vertices.push(new THREE.Vector3(4,-4,-4));          // 1
    vertices.push(new THREE.Vector3(-4,-4,-4));         // 2
    vertices.push(new THREE.Vector3(-4,4,-4));          // 3
    vertices.push(new THREE.Vector3(4,4,4));            // 4
    vertices.push(new THREE.Vector3(4,-4,4));           // 5
    vertices.push(new THREE.Vector3(-4,-4,4));          // 6
    vertices.push(new THREE.Vector3(-4,4,4));           // 7
    vertices.push(new THREE.Vector3(-0.8,4,-0.4));      // 8
    vertices.push(new THREE.Vector3(-0.8,-4,-0.4));     // 9
    vertices.push(new THREE.Vector3(0.8,4,-0.4));       // 10
    vertices.push(new THREE.Vector3(0.8,-4,-0.4));      // 11
    vertices.push(new THREE.Vector3(-0.8,4,4));         // 12
    vertices.push(new THREE.Vector3(-0.8,-4,4));        // 13
    vertices.push(new THREE.Vector3(0.8,4,4));          // 14
    vertices.push(new THREE.Vector3(0.8,-4,4));         // 15
    vertices.push(new THREE.Vector3(0.8,-0.8,-0.4));    // 16
    vertices.push(new THREE.Vector3(-0.8,-0.8,-0.4));   // 17
    vertices.push(new THREE.Vector3(-4,-0.8,0.4));      // 18
    vertices.push(new THREE.Vector3(-0.8,-0.8,0.4));    // 19
    vertices.push(new THREE.Vector3(0.8,-0.8,0.4));     // 20
    vertices.push(new THREE.Vector3(4,-0.8,0.4));       // 21
    vertices.push(new THREE.Vector3(-4,-0.8,-4));       // 22
    vertices.push(new THREE.Vector3(4,-0.8,-4));        // 23
    vertices.push(new THREE.Vector3(-4,0.8,0.4));       // 24
    vertices.push(new THREE.Vector3(-0.8,0.8,0.4));     // 25
    vertices.push(new THREE.Vector3(0.8,0.8,0.4));      // 26
    vertices.push(new THREE.Vector3(4,0.8,0.4));        // 27
    vertices.push(new THREE.Vector3(-4,0.8,-4));        // 28
    vertices.push(new THREE.Vector3(4,0.8,-4));         // 29
    vertices.push(new THREE.Vector3(0.8,0.8,-0.4));     // 30
    vertices.push(new THREE.Vector3(-0.8,0.8,-0.4));    // 31
    geom.vertices = vertices;

    // blender green arrow + side
    // green arrow - side
    // red arrow + side
    // red arrow - side
    // blue arrow + side
    // blue arrow - side

    var spheres = [];
    for (var i = 0 ; i < geom.vertices.length ; i++) { // via stackoverflow.com/a/26382195/2474159
        var sphereGeometry = new THREE.SphereGeometry(0.2, 10, 10);
        var sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, opacity: 1});
        spheres[i] = new THREE.Mesh(sphereGeometry, sphereMaterial);
        spheres[i].position.set(geom.vertices[i].x, geom.vertices[i].y, geom.vertices[i].z);
        scene.add(spheres[i]);
    }

    var mat = new THREE.MeshBasicMaterial({color: 0x0000ff, transparent:true, opacity: 0.2});
    mat.side = THREE.DoubleSide;
    var facesMesh = new THREE.Mesh(geom, mat);
    scene.add(facesMesh);

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);
    light = new THREE.DirectionalLight(0x002288);
    light.position.set(-1, -1, -1);
    scene.add(light);
    light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    renderer.render(scene, camera);
}


/* PARKING LOT

var side = [];
side.push(vertices[0]);
side.push(vertices[29]);
side.push(vertices[28]);
side.push(vertices[3]);
var triangles = THREE.ShapeUtils.triangulateShape(side, []); // via stackoverflow.com/a/22459165/2474159
for(var i = 0; i < triangles.length; i++ ){
    geom.faces.push(new THREE.Face3(triangles[i][0], triangles[i][1], triangles[i][2]));
}

var mesh = null;
var loader = new THREE.JSONLoader();
loader.load('./cube.json', function(geometry) {
    mesh = new THREE.Mesh(geometry);
    scene.add(mesh);
});
*/
