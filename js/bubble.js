// Configuración inicial
const initFluidBackground = () => {
    if (!THREE) return;

    // Configurar escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Integrar con tu HTML
    const canvasContainer = document.getElementById('canvas-container');
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    canvasContainer.appendChild(renderer.domElement);

    // Configuración de luces y materiales
    // ... (tu código de las gotas aquí)

    // Manejar redimensionamiento
    window.addEventListener('resize', () => {
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
        camera.updateProjectionMatrix();
    });

    animate();
};

// Iniciar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initFluidBackground);