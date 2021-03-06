
var camera, controls, scene, renderer, raycaster;
var mouse = new THREE.Vector2(), intersected; // intersected is the element currently hit first by the mouse-ray, null if none is hit
var cubes = [];

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
    camera.position.x = 50;
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // remove when using animation loop
    controls.enableZoom = true;

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);
    light = new THREE.DirectionalLight(0x002288);
    light.position.set(-1, -1, -1);
    scene.add(light);
    light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    window.addEventListener('resize', onWindowResize, false);
    raycaster = new THREE.Raycaster();
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);

    // setup cubes

    var colors = ['aqua', 'aquamarine', 'blue', 'brown', 'coral', 'cyan', 'goldenrod', 'green', 'maroon', 'purple', 'teal']; // via en.wikipedia.org/wiki/X11_color_names
    var count = 8;
    var cubesize = 8;
    for (var i = 0; i < count; i++) {
        var cube = new Cube(i, new THREE.Color(colors[i]));
        var translate = cubesize * (0.5 + i - count / 2);
        cube.mesh.translateZ(translate);
        scene.add(cube.mesh);
        cubes.push(cube);
    }
}

function onMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children); // via threejs.org/examples/#webgl_interactive_cubes
    if (intersects.length > 0) {
        if (intersected !== intersects[0].object) {
            if (intersected) intersected.material.emissive.setHex(intersected.currentHex);
            intersected = intersects[0].object;
            intersected.currentHex = intersected.material.emissive.getHex();
            intersected.material.emissive.setHex(0xff0000);
        }
    } else {
        if (intersected) intersected.material.emissive.setHex(intersected.currentHex);
        intersected = null;
    }
    render()
}

function onMouseUp(event) {
    event.preventDefault();
    if (intersected !== null) {
        var cube = cubes.find(c => c.mesh.uuid === intersected.uuid);
        switch(event.button) {
            case 0:
                cube.leftClick();
                break;
            case 2:
                cube.rightClick();
                break;
        }
    }
    render()
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

camera.lookAt(new THREE.Vector3(10, 0, 0));

extract vertices from blender, via blender.stackexchange.com/a/51712
import bpy
print([bpy.context.object.matrix_world * v.co for v in bpy.context.object.data.vertices])

var spheres = [];
for (var i = 0 ; i < geom.vertices.length ; i++) { // via stackoverflow.com/a/26382195/2474159
    var sphereGeometry = new THREE.SphereGeometry(0.2, 10, 10);
    var sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, opacity: 1});
    spheres[i] = new THREE.Mesh(sphereGeometry, sphereMaterial);
    spheres[i].position.set(geom.vertices[i].x, geom.vertices[i].y, geom.vertices[i].z);
    scene.add(spheres[i]);
}

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
