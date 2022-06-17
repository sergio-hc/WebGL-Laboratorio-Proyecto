// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,10,100);
	//camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xF0F8FB, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);


	//PUERTA
	var geopuerta = new THREE.Geometry();
	geopuerta.vertices.push(new THREE.Vector3( -70, 10, -10 ));//0
	geopuerta.vertices.push(new THREE.Vector3( -50, 10, -10));//1
	geopuerta.vertices.push(new THREE.Vector3(-50, 45, -10));//2
	geopuerta.vertices.push(new THREE.Vector3(-70, 45, -10));//3

	geopuerta.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geopuerta.faces.push( new THREE.Face3( 2, 3, 0 ) );

	var matpuerta = new THREE.MeshBasicMaterial( { color: 0x463F3E} ); // Material de color rojo
    var mipuerta = new THREE.Mesh (geopuerta, matpuerta); // Crea el objeto

	//abrir
	var geoab = new THREE.Geometry();
	geoab.vertices.push(new THREE.Vector3( -70, 27, -8 ));//0
	geoab.vertices.push(new THREE.Vector3( -67, 27, -8));//1
	geoab.vertices.push(new THREE.Vector3(-67, 30, -8));//2
	geoab.vertices.push(new THREE.Vector3(-70, 30, -8));//3

	geoab.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geoab.faces.push( new THREE.Face3( 2, 3, 0 ) );

	var matab = new THREE.MeshBasicMaterial( { color: 0xFB7810} ); // Material de color rojo
    var miab = new THREE.Mesh (geoab, matab); // Crea el objeto

	//MESA
	var geomesa = new THREE.Geometry();
	geomesa.vertices.push(new THREE.Vector3( -80, -3, 0.0 ));//0
	geomesa.vertices.push(new THREE.Vector3( 80, -3, 0.0));//1
	geomesa.vertices.push(new THREE.Vector3(85, 15, -8));//2
	geomesa.vertices.push(new THREE.Vector3(-75, 15, -8));//3

	geomesa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geomesa.faces.push( new THREE.Face3( 2, 3, 0 ) );

	var matmesa = new THREE.MeshBasicMaterial( { color: 0xA3A383 } ); // Material de color rojo
    var mimesa = new THREE.Mesh (geomesa, matmesa); // Crea el objeto

	//PC1
		var geopc1 = new THREE.Geometry();
		geopc1.vertices.push(new THREE.Vector3( -60, 10, -1 ));//0
		geopc1.vertices.push(new THREE.Vector3( -45, 10, -1));//1
		geopc1.vertices.push(new THREE.Vector3( -45, 25, -1));//2
		geopc1.vertices.push(new THREE.Vector3(-60, 25, -1));//3
		//apoyo
		geopc1.vertices.push(new THREE.Vector3(-54, 7, 0.0));//4
		geopc1.vertices.push(new THREE.Vector3(-50, 7, 0.0));//5
		geopc1.vertices.push(new THREE.Vector3(-50, 10, 0.0));//6
		geopc1.vertices.push(new THREE.Vector3(-54, 10, 0.0));//7
		//teclado
		geopc1.vertices.push(new THREE.Vector3(-65, 0, 2.0));//8
		geopc1.vertices.push(new THREE.Vector3(-47, 0, 2.0));//9
		geopc1.vertices.push(new THREE.Vector3(-44, 6, 2.0));//10
		geopc1.vertices.push(new THREE.Vector3(-62, 6, 2.0));//11

	
		geopc1.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopc1.faces.push( new THREE.Face3( 2, 3, 0 ) );
		geopc1.faces.push( new THREE.Face3( 4, 5, 6 ) );
		geopc1.faces.push( new THREE.Face3( 6, 7, 4 ) );
		geopc1.faces.push( new THREE.Face3( 8, 9, 10 ) );
		geopc1.faces.push( new THREE.Face3( 10, 11, 8 ) );

	
		var matpc1 = new THREE.MeshBasicMaterial( { color: 0x080808 } ); // Material de color rojo
		var mipc1 = new THREE.Mesh (geopc1, matpc1); // Crea el objeto
		//pantalla1
		var geopan1 = new THREE.Geometry();
		geopan1.vertices.push(new THREE.Vector3( -57, 12, 0.0 ));//0
		geopan1.vertices.push(new THREE.Vector3( -47, 12, 0.0));//1
		geopan1.vertices.push(new THREE.Vector3( -47, 23, 0.0));//2
		geopan1.vertices.push(new THREE.Vector3(-57, 23, 0.0));//3

		geopan1.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopan1.faces.push( new THREE.Face3( 2, 3, 0 ) );
		
	
		var matpan1 = new THREE.MeshBasicMaterial( { color: 0x026DCC } ); // Material de color rojo
		var mipan1 = new THREE.Mesh (geopan1, matpan1); // Crea el objeto
	// fin PC1
	//silla1
	var geosill1 = new THREE.Geometry();
	geosill1.vertices.push(new THREE.Vector3( -75, -15, 3 ));//0
	geosill1.vertices.push(new THREE.Vector3( -60, -15, 3));//1
	geosill1.vertices.push(new THREE.Vector3( -60, 5, 3));//2
	geosill1.vertices.push(new THREE.Vector3(-75, 5, 3));//3

	geosill1.vertices.push(new THREE.Vector3( -52, -5, -5 ));//4
	geosill1.vertices.push(new THREE.Vector3( -67, -5, -5));//5
	
	

	geosill1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geosill1.faces.push( new THREE.Face3( 2, 3, 0 ) );
	geosill1.faces.push( new THREE.Face3( 1, 4, 5 ) );
	geosill1.faces.push( new THREE.Face3( 5, 0, 1 ) );

	

	var matsill1 = new THREE.MeshBasicMaterial( { color: 0x1A3DED} ); // Material de color rojo
	var misill1 = new THREE.Mesh (geosill1, matsill1); // Crea el objeto

	//patasSilla1
	var geopsill1 = new THREE.Geometry();
	geopsill1.vertices.push(new THREE.Vector3( -75, -30, 3 ));//0
	geopsill1.vertices.push(new THREE.Vector3( -73, -30, 3));//1
	geopsill1.vertices.push(new THREE.Vector3( -73, -15, 3));//2
	geopsill1.vertices.push(new THREE.Vector3(-75, -15, 3));//3

	geopsill1.vertices.push(new THREE.Vector3( -62, -30, 3 ));//4
	geopsill1.vertices.push(new THREE.Vector3( -60, -30, 3));//5
	geopsill1.vertices.push(new THREE.Vector3( -60, -15, 3));//6
	geopsill1.vertices.push(new THREE.Vector3(-62, -15, 3));//7

	geopsill1.vertices.push(new THREE.Vector3( -54, -20, -5 ));//8
	geopsill1.vertices.push(new THREE.Vector3( -52, -20, -5));//9
	geopsill1.vertices.push(new THREE.Vector3( -52, -5, -5));//10
	geopsill1.vertices.push(new THREE.Vector3(-54, -5, -5));//11

	geopsill1.vertices.push(new THREE.Vector3( -67, -20, -5 ));//12
	geopsill1.vertices.push(new THREE.Vector3( -65, -20, -5));//13
	geopsill1.vertices.push(new THREE.Vector3( -65, -5, -5));//14
	geopsill1.vertices.push(new THREE.Vector3(-67, -5, -5));//15


	geopsill1.faces.push(new THREE.Face3(0,1,2));
	geopsill1.faces.push(new THREE.Face3(2,3,0));
	geopsill1.faces.push(new THREE.Face3(4,5,6));
	geopsill1.faces.push(new THREE.Face3(6,7,4));
	geopsill1.faces.push(new THREE.Face3(8,9,10));
	geopsill1.faces.push(new THREE.Face3(10,11,8));
	geopsill1.faces.push(new THREE.Face3(12,13,14));
	geopsill1.faces.push(new THREE.Face3(14,15,12));
	
	var matpsill1 = new THREE.MeshBasicMaterial( { color: 0x434344} ); // Material de color rojo
	var mipsill1 = new THREE.Mesh (geopsill1, matpsill1); // Crea el objeto
	//FIN SILLA1

	//PC2
	var geopc2 = new THREE.Geometry();
		geopc2.vertices.push(new THREE.Vector3( -25, 10, -1 ));//0
		geopc2.vertices.push(new THREE.Vector3( -10, 10, -1));//1
		geopc2.vertices.push(new THREE.Vector3( -10, 25, -1));//2
		geopc2.vertices.push(new THREE.Vector3(-25, 25, -1));//3
		//apoyo
		geopc2.vertices.push(new THREE.Vector3(-19, 7, 0.0));//4
		geopc2.vertices.push(new THREE.Vector3(-15, 7, 0.0));//5
		geopc2.vertices.push(new THREE.Vector3(-15, 10, 0.0));//6
		geopc2.vertices.push(new THREE.Vector3(-19, 10, 0.0));//7
		//teclado
		geopc2.vertices.push(new THREE.Vector3(-30, 0, 2.0));//8
		geopc2.vertices.push(new THREE.Vector3(-12, 0, 2.0));//9
		geopc2.vertices.push(new THREE.Vector3( -9, 6, 2.0));//10
		geopc2.vertices.push(new THREE.Vector3( -27, 6, 2.0));//11

	
		geopc2.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopc2.faces.push( new THREE.Face3( 2, 3, 0 ) );
		geopc2.faces.push( new THREE.Face3( 4, 5, 6 ) );
		geopc2.faces.push( new THREE.Face3( 6, 7, 4 ) );
		geopc2.faces.push( new THREE.Face3( 8, 9, 10 ) );
		geopc2.faces.push( new THREE.Face3( 10, 11, 8 ) );

	
		var matpc2 = new THREE.MeshBasicMaterial( { color: 0x080808 } ); // Material de color rojo
		var mipc2 = new THREE.Mesh (geopc2, matpc2); // Crea el objeto
		//pantalla2
		var geopan2 = new THREE.Geometry();
		geopan2.vertices.push(new THREE.Vector3( -22, 12, 0.0 ));//0
		geopan2.vertices.push(new THREE.Vector3( -12, 12, 0.0));//1
		geopan2.vertices.push(new THREE.Vector3( -12, 23, 0.0));//2
		geopan2.vertices.push(new THREE.Vector3(-22, 23, 0.0));//3

		geopan2.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopan2.faces.push( new THREE.Face3( 2, 3, 0 ) );	
	
		var matpan2 = new THREE.MeshBasicMaterial( { color: 0x026DCC } ); // Material de color rojo
		var mipan2= new THREE.Mesh (geopan2, matpan2); // Crea el objeto
	//finPc2
	//silla2
	var geosill2 = new THREE.Geometry();
	geosill2.vertices.push(new THREE.Vector3( -40, -15, 3 ));//0
	geosill2.vertices.push(new THREE.Vector3( -25, -15, 3));//1
	geosill2.vertices.push(new THREE.Vector3( -25, 5, 3));//2
	geosill2.vertices.push(new THREE.Vector3(-40, 5, 3));//3

	geosill2.vertices.push(new THREE.Vector3( -17, -5, -5 ));//4
	geosill2.vertices.push(new THREE.Vector3( -32, -5, -5));//5
	
	

	geosill2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geosill2.faces.push( new THREE.Face3( 2, 3, 0 ) );
	geosill2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	geosill2.faces.push( new THREE.Face3( 5, 0, 1 ) );

	var matsill2 = new THREE.MeshBasicMaterial( { color: 0x1A3DED} ); // Material de color rojo
	var misill2 = new THREE.Mesh (geosill2, matsill2); // Crea el objeto

	//patasSilla2
	var geopsill2 = new THREE.Geometry();
	geopsill2.vertices.push(new THREE.Vector3( -40, -30, 3 ));//0
	geopsill2.vertices.push(new THREE.Vector3( -38, -30, 3));//1
	geopsill2.vertices.push(new THREE.Vector3( -38, -15, 3));//2
	geopsill2.vertices.push(new THREE.Vector3(-40, -15, 3));//3

	geopsill2.vertices.push(new THREE.Vector3( -27, -30, 3 ));//4
	geopsill2.vertices.push(new THREE.Vector3( -25, -30, 3));//5
	geopsill2.vertices.push(new THREE.Vector3( -25, -15, 3));//6
	geopsill2.vertices.push(new THREE.Vector3(-27, -15, 3));//7

	geopsill2.vertices.push(new THREE.Vector3( -19, -20, -5 ));//8
	geopsill2.vertices.push(new THREE.Vector3( -17, -20, -5));//9
	geopsill2.vertices.push(new THREE.Vector3( -17, -5, -5));//10
	geopsill2.vertices.push(new THREE.Vector3(-19, -5, -5));//11

	geopsill2.vertices.push(new THREE.Vector3( -32, -20, -5 ));//12
	geopsill2.vertices.push(new THREE.Vector3( -30, -20, -5));//13
	geopsill2.vertices.push(new THREE.Vector3( -30, -5, -5));//14
	geopsill2.vertices.push(new THREE.Vector3(-32, -5, -5));//15


	geopsill2.faces.push(new THREE.Face3(0,1,2));
	geopsill2.faces.push(new THREE.Face3(2,3,0));
	geopsill2.faces.push(new THREE.Face3(4,5,6));
	geopsill2.faces.push(new THREE.Face3(6,7,4));
	geopsill2.faces.push(new THREE.Face3(8,9,10));
	geopsill2.faces.push(new THREE.Face3(10,11,8));
	geopsill2.faces.push(new THREE.Face3(12,13,14));
	geopsill2.faces.push(new THREE.Face3(14,15,12));
	

	
	var matpsill2 = new THREE.MeshBasicMaterial( { color: 0x434344} ); // Material de color rojo
	var mipsill2= new THREE.Mesh (geopsill2, matpsill2); // Crea el objeto
	//FIN SILLA2
    
     
	//PC3
	var geopc3 = new THREE.Geometry();
		geopc3.vertices.push(new THREE.Vector3( 10, 10, -1 ));//0
		geopc3.vertices.push(new THREE.Vector3( 25, 10, -1));//1
		geopc3.vertices.push(new THREE.Vector3( 25, 25, -1));//2
		geopc3.vertices.push(new THREE.Vector3( 10, 25, -1));//3
		//apoyo
		geopc3.vertices.push(new THREE.Vector3(15, 7, 0.0));//4
		geopc3.vertices.push(new THREE.Vector3(20, 7, 0.0));//5
		geopc3.vertices.push(new THREE.Vector3(20, 10, 0.0));//6
		geopc3.vertices.push(new THREE.Vector3(15, 10, 0.0));//7
		//teclado
		geopc3.vertices.push(new THREE.Vector3(5, 0, 2.0));//8
		geopc3.vertices.push(new THREE.Vector3(23, 0, 2.0));//9
		geopc3.vertices.push(new THREE.Vector3( 26, 6, 2.0));//10
		geopc3.vertices.push(new THREE.Vector3( 8, 6, 2.0));//11

	
		geopc3.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopc3.faces.push( new THREE.Face3( 2, 3, 0 ) );
		geopc3.faces.push( new THREE.Face3( 4, 5, 6 ) );
		geopc3.faces.push( new THREE.Face3( 6, 7, 4 ) );
		geopc3.faces.push( new THREE.Face3( 8, 9, 10 ) );
		geopc3.faces.push( new THREE.Face3( 10, 11, 8 ) );

	
		var matpc3 = new THREE.MeshBasicMaterial( { color: 0x080808 } ); // Material de color rojo
		var mipc3 = new THREE.Mesh (geopc3, matpc3); // Crea el objeto
		//pantalla3
		var geopan3 = new THREE.Geometry();
		geopan3.vertices.push(new THREE.Vector3( 12, 12, 0.0 ));//0
		geopan3.vertices.push(new THREE.Vector3( 22, 12, 0.0));//1
		geopan3.vertices.push(new THREE.Vector3( 22, 23, 0.0));//2
		geopan3.vertices.push(new THREE.Vector3(12, 23, 0.0));//3

		geopan3.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopan3.faces.push( new THREE.Face3( 2, 3, 0 ) );	
	
		var matpan3 = new THREE.MeshBasicMaterial( { color: 0x026DCC } ); // Material de color rojo
		var mipan3= new THREE.Mesh (geopan3, matpan3); // Crea el objeto
	//finPc3
	//silla3
	var geosill3 = new THREE.Geometry();
	geosill3.vertices.push(new THREE.Vector3( -5, -15, 3 ));//0
	geosill3.vertices.push(new THREE.Vector3( 10, -15, 3));//1
	geosill3.vertices.push(new THREE.Vector3( 10, 5, 3));//2
	geosill3.vertices.push(new THREE.Vector3(-5, 5, 3));//3

	geosill3.vertices.push(new THREE.Vector3( 18, -5, -5 ));//4
	geosill3.vertices.push(new THREE.Vector3( 3, -5, -5));//5
	
	

	geosill3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geosill3.faces.push( new THREE.Face3( 2, 3, 0 ) );
	geosill3.faces.push( new THREE.Face3( 1, 4, 5 ) );
	geosill3.faces.push( new THREE.Face3( 5, 0, 1 ) );

	var matsill3 = new THREE.MeshBasicMaterial( { color: 0x1A3DED} ); // Material de color rojo
	var misill3 = new THREE.Mesh (geosill3, matsill3); // Crea el objeto

	//patasSilla3
	var geopsill3 = new THREE.Geometry();
	geopsill3.vertices.push(new THREE.Vector3( -5, -30, 3 ));//0
	geopsill3.vertices.push(new THREE.Vector3( -3, -30, 3));//1
	geopsill3.vertices.push(new THREE.Vector3( -3, -15, 3));//2
	geopsill3.vertices.push(new THREE.Vector3(-5, -15, 3));//3

	geopsill3.vertices.push(new THREE.Vector3( 8, -30, 3 ));//4
	geopsill3.vertices.push(new THREE.Vector3( 10, -30, 3));//5
	geopsill3.vertices.push(new THREE.Vector3( 10, -15, 3));//6
	geopsill3.vertices.push(new THREE.Vector3( 8, -15, 3));//7

	geopsill3.vertices.push(new THREE.Vector3( 16, -20, -5 ));//8
	geopsill3.vertices.push(new THREE.Vector3( 18, -20, -5));//9
	geopsill3.vertices.push(new THREE.Vector3( 18, -5, -5));//10
	geopsill3.vertices.push(new THREE.Vector3(16, -5, -5));//11

	geopsill3.vertices.push(new THREE.Vector3( 3, -20, -5 ));//12
	geopsill3.vertices.push(new THREE.Vector3( 5, -20, -5));//13
	geopsill3.vertices.push(new THREE.Vector3( 5, -5, -5));//14
	geopsill3.vertices.push(new THREE.Vector3( 3, -5, -5));//15

	geopsill3.faces.push(new THREE.Face3(0,1,2));
	geopsill3.faces.push(new THREE.Face3(2,3,0));
	geopsill3.faces.push(new THREE.Face3(4,5,6));
	geopsill3.faces.push(new THREE.Face3(6,7,4));
	geopsill3.faces.push(new THREE.Face3(8,9,10));
	geopsill3.faces.push(new THREE.Face3(10,11,8));
	geopsill3.faces.push(new THREE.Face3(12,13,14));
	geopsill3.faces.push(new THREE.Face3(14,15,12));
	

	
	var matpsill3 = new THREE.MeshBasicMaterial( { color: 0x434344} ); // Material de color rojo
	var mipsill3= new THREE.Mesh (geopsill3, matpsill3); // Crea el objeto
	//FIN SILLA3

 
	//PC4
	var geopc4 = new THREE.Geometry();
		geopc4.vertices.push(new THREE.Vector3( 45, 10, -1 ));//0
		geopc4.vertices.push(new THREE.Vector3( 60, 10, -1));//1
		geopc4.vertices.push(new THREE.Vector3( 60, 25, -1));//2
		geopc4.vertices.push(new THREE.Vector3( 45, 25, -1));//3
		//apoyo
		geopc4.vertices.push(new THREE.Vector3(50, 7, 0.0));//4
		geopc4.vertices.push(new THREE.Vector3(55, 7, 0.0));//5
		geopc4.vertices.push(new THREE.Vector3(55, 10, 0.0));//6
		geopc4.vertices.push(new THREE.Vector3(50, 10, 0.0));//7
		//teclado
		geopc4.vertices.push(new THREE.Vector3(40, 0, 2.0));//8
		geopc4.vertices.push(new THREE.Vector3(58, 0, 2.0));//9
		geopc4.vertices.push(new THREE.Vector3(61, 6, 2.0));//10
		geopc4.vertices.push(new THREE.Vector3(43, 6, 2.0));//11

	
		geopc4.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopc4.faces.push( new THREE.Face3( 2, 3, 0 ) );
		geopc4.faces.push( new THREE.Face3( 4, 5, 6 ) );
		geopc4.faces.push( new THREE.Face3( 6, 7, 4 ) );
		geopc4.faces.push( new THREE.Face3( 8, 9, 10 ) );
		geopc4.faces.push( new THREE.Face3( 10, 11, 8 ) );

	
		var matpc4 = new THREE.MeshBasicMaterial( { color: 0x080808 } ); // Material de color rojo
		var mipc4 = new THREE.Mesh (geopc4, matpc4); // Crea el objeto
		//pantalla4
		var geopan4 = new THREE.Geometry();
		geopan4.vertices.push(new THREE.Vector3( 47, 12, 0.0 ));//0
		geopan4.vertices.push(new THREE.Vector3( 57, 12, 0.0));//1
		geopan4.vertices.push(new THREE.Vector3( 57, 23, 0.0));//2
		geopan4.vertices.push(new THREE.Vector3(47, 23, 0.0));//3

		geopan4.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geopan4.faces.push( new THREE.Face3( 2, 3, 0 ) );	
	
		var matpan4 = new THREE.MeshBasicMaterial( { color: 0x026DCC } ); // Material de color rojo
		var mipan4= new THREE.Mesh (geopan4, matpan4); // Crea el objeto
	//finPc4
	//silla4
	var geosill4 = new THREE.Geometry();
	geosill4.vertices.push(new THREE.Vector3( 30, -15, 3 ));//0
	geosill4.vertices.push(new THREE.Vector3( 45, -15, 3));//1
	geosill4.vertices.push(new THREE.Vector3( 45, 5, 3));//2
	geosill4.vertices.push(new THREE.Vector3(30, 5, 3));//3

	geosill4.vertices.push(new THREE.Vector3( 53, -5, -5 ));//4
	geosill4.vertices.push(new THREE.Vector3( 38, -5, -5));//5
	
	geosill4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geosill4.faces.push( new THREE.Face3( 2, 3, 0 ) );
	geosill4.faces.push( new THREE.Face3( 1, 4, 5 ) );
	geosill4.faces.push( new THREE.Face3( 5, 0, 1 ) );

	var matsill4 = new THREE.MeshBasicMaterial( { color: 0x1A3DED} ); // Material de color rojo
	var misill4 = new THREE.Mesh (geosill4, matsill4); // Crea el objeto

	//patasSilla4
	var geopsill4 = new THREE.Geometry();
	geopsill4.vertices.push(new THREE.Vector3( 30, -30, 3 ));//0
	geopsill4.vertices.push(new THREE.Vector3( 32, -30, 3));//1
	geopsill4.vertices.push(new THREE.Vector3( 32, -15, 3));//2
	geopsill4.vertices.push(new THREE.Vector3(30, -15, 3));//3

	geopsill4.vertices.push(new THREE.Vector3(43, -30, 3 ));//4
	geopsill4.vertices.push(new THREE.Vector3( 45, -30, 3));//5
	geopsill4.vertices.push(new THREE.Vector3( 45, -15, 3));//6
	geopsill4.vertices.push(new THREE.Vector3( 43, -15, 3));//7

	geopsill4.vertices.push(new THREE.Vector3( 51, -20, -5 ));//8
	geopsill4.vertices.push(new THREE.Vector3( 53, -20, -5));//9
	geopsill4.vertices.push(new THREE.Vector3( 53, -5, -5));//10
	geopsill4.vertices.push(new THREE.Vector3(51, -5, -5));//11

	geopsill4.vertices.push(new THREE.Vector3( 38, -20, -5 ));//12
	geopsill4.vertices.push(new THREE.Vector3( 40, -20, -5));//13
	geopsill4.vertices.push(new THREE.Vector3( 40, -5, -5));//14
	geopsill4.vertices.push(new THREE.Vector3( 38, -5, -5));//15

	geopsill4.faces.push(new THREE.Face3(0,1,2));
	geopsill4.faces.push(new THREE.Face3(2,3,0));
	geopsill4.faces.push(new THREE.Face3(4,5,6));
	geopsill4.faces.push(new THREE.Face3(6,7,4));
	geopsill4.faces.push(new THREE.Face3(8,9,10));
	geopsill4.faces.push(new THREE.Face3(10,11,8));
	geopsill4.faces.push(new THREE.Face3(12,13,14));
	geopsill4.faces.push(new THREE.Face3(14,15,12));
	
	var matpsill4 = new THREE.MeshBasicMaterial( { color: 0x434344} ); // Material de color rojo
	var mipsill4= new THREE.Mesh (geopsill4, matpsill4); // Crea el objeto
	//FIN SILLA3



	// SCENE
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add(mipuerta);
	scene.add(miab);
	scene.add(mimesa);
	//pc1
	scene.add(mipc1);
	scene.add(mipan1);
	//silla1
	scene.add(misill1);
	scene.add(mipsill1);
	//pc2
	scene.add(mipc2);
	scene.add(mipan2);
	//silla2
	scene.add(misill2);
	scene.add(mipsill2);
	//pc3
	scene.add(mipc3);
	scene.add(mipan3);
	//silla3
	scene.add(misill3);
	scene.add(mipsill3);
	//pc3
	scene.add(mipc4);
	scene.add(mipan4);
	//silla3
	scene.add(misill4);
	scene.add(mipsill4);

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
