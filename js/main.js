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
    camera.position.z = 500;
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // remove when using animation loop
    controls.enableZoom = true;

    var meshMaterial = new THREE.MeshLambertMaterial( { color: 0xCC0000 } );
    var geom = new THREE.Geometry();

    // extract vertices from blender, via blender.stackexchange.com/a/51712
    // import bpy
    // print([bpy.context.object.matrix_world * v.co for v in bpy.context.object.data.vertices])

    var vertices = [];
    vertices.push(new THREE.Vector3(4.0, 4.0, -4.0));
    vertices.push(new THREE.Vector3(4.0, -4.0, -4.0));
    vertices.push(new THREE.Vector3(-4.0, -4.0, -4.0));
    vertices.push(new THREE.Vector3(-4, 4.0, -4.0));
    vertices.push(new THREE.Vector3(4.0, 4.0, 4.0));
    vertices.push(new THREE.Vector3(4.0, -4.0, 4.0));
    vertices.push(new THREE.Vector3(-4.0, -4.0, 4.0));
    vertices.push(new THREE.Vector3(-4.0, 4.0, 4.0));
    vertices.push(new THREE.Vector3(-0.8, 4.0, -0.4));
    vertices.push(new THREE.Vector3(-0.8, -4.0, -0.4));
    vertices.push(new THREE.Vector3(0.8, 4.0, -0.4));
    vertices.push(new THREE.Vector3(0.8, -4.0, -0.4));
    vertices.push(new THREE.Vector3(-0.8, 4.0, 4.0));
    vertices.push(new THREE.Vector3(-0.8, -4.0, 4.0));
    vertices.push(new THREE.Vector3(0.8, 4.0, 4.0));
    vertices.push(new THREE.Vector3(0.8, -4.0, 4.0));
    vertices.push(new THREE.Vector3(0.8, -0.8, -0.4));
    vertices.push(new THREE.Vector3(-0.8, -0.8, -0.4));
    vertices.push(new THREE.Vector3(-4.0, -0.8, 0.4));
    vertices.push(new THREE.Vector3(-0.8, -0.8, 0.4));
    vertices.push(new THREE.Vector3(0.8, -0.8, 0.4));
    vertices.push(new THREE.Vector3(4.0, -0.8, 0.4));
    vertices.push(new THREE.Vector3(-4.0, -0.8, -4.0));
    vertices.push(new THREE.Vector3(4.0, -0.8, -4.0));
    vertices.push(new THREE.Vector3(-4.0, 0.8, 0.4));
    vertices.push(new THREE.Vector3(-0.8, 0.8, 0.4));
    vertices.push(new THREE.Vector3(0.8, 0.8, 0.4));
    vertices.push(new THREE.Vector3(4.0, 0.8, 0.4));
    vertices.push(new THREE.Vector3(-4.0, 0.8, -4.0));
    vertices.push(new THREE.Vector3(4.0, 0.8, -4.0));
    vertices.push(new THREE.Vector3(0.8, 0.8, -0.4));
    vertices.push(new THREE.Vector3(-0.8, 0.8, -0.4));

    //var triangles = THREE.ShapeUtils.triangulateShape (vertices, []); // via stackoverflow.com/a/22459165/2474159
    //geom.faces.push(new THREE.Face3(0,3,2));

    var mesh = new THREE.Mesh(geom, meshMaterial);
    mesh.updateMatrix();
    scene.add(mesh);

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
