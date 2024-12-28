import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();


// add the camera here 
const camera = new THREE.PerspectiveCamera(
    75,window.innerWidth / window.innerHeight,
     0.01,
     1000
)
scene.add(camera)
camera.position.z=15 ; 



// add the orbitcontrols 
let orbit = new OrbitControls(camera, canvas);





 


// cube
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(4,4,4),
    new THREE.MeshBasicMaterial({color:0xffff00})
)



const sphere = new THREE.Mesh(
    new THREE.SphereGeometry( 4, 18, 8 )  ,
    new THREE.MeshBasicMaterial( { color:     0xcd7f32} )

)


const turos = new THREE.Mesh(

    new THREE.TorusGeometry( 4, 1, 8, 100 )
    ,new THREE.MeshBasicMaterial( { color: 0xffff00 } )
)

turos.position.x=-10 ;
 

scene.add(cube,sphere,turos);


 sphere.position.x=10 ;

 

// renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);




// add the full width and height 
window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
 camera.aspect = window.innerWidth/ window.innerHeight;
camera.updateProjectionMatrix();

})

//  function 

function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);


    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;
    sphere.rotation.x+=0.01;
    sphere.rotation.y+=0.01;
    turos.rotation.x+=0.01;
    turos.rotation.y+=0.01;
}

animate()

