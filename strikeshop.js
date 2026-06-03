// "Base de Datos" Local para Strikeshop
const inventarioStrikeshop = [
    {
        id: 1,
        name: "Guantes Boxeo/Kickboxing",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/guantes1.png",
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 2,
        name: "Guantes Boxeo/Kickboxing",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/guantes2.png",
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 3,
        name: "Guantes Boxeo/Kickboxing",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/guantes3.png",
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 4,
        name: "Guantes Boxeo/Kickboxing",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/guantes4.png",
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 5,
        name: "Guantes Boxeo/Kickboxing",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/guantes5.png",
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 6,
        name: "Guantes Boxeo/Kickboxing",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/guantes6.png",
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 7,
        name: "Espinilleras / Canilleras",
        price: 42000,
        image_url: "assets/img/espinilleras1.png",
        description: "Protección de alto impacto para sparring duro.",
        category: "Espinilleras"
    },
    {
        id: 8,
        name: "Espinilleras / Canilleras",
        price: 42000,
        image_url: "assets/img/espinilleras2.png",
        description: "Protección de alto impacto para sparring duro.",
        category: "Espinilleras"
    },
    {
        id: 9,
        name: "Espinilleras / Canilleras",
        price: 42000,
        image_url: "assets/img/espinilleras3.png",
        description: "Protección de alto impacto para sparring duro.",
        category: "Espinilleras"
    },
    {
        id: 10,
        name: "Vendas rápidas",
        price: 12000,
        image_url: "assets/img/vendarapida1.png",
        description: "Vendaje de alta calidad para proteger tus manos durante el entrenamiento.",
        category: "Accesorios"
    }
];

let productoSeleccionado = null;
// 2. Ahora todosLosProductos toma los datos directo de tu arreglo arriba
let todosLosProductos = inventarioStrikeshop; 

document.addEventListener('DOMContentLoaded', () => {
    // Ya no necesitamos ser async ni esperar a una API
    cargarProductosEstaticos();
});

function cargarProductosEstaticos() {
    // Mandamos a pintar las tarjetas inmediatamente
    renderizarProductos(todosLosProductos);
}

// ... [Desde aquí hacia abajo, mantienes tu función renderizarProductos, los filtros, el modal y el botón de WhatsApp tal cual los tenías]


// Nueva función exclusiva para pintar las tarjetas en pantalla
function renderizarProductos(productosRender) {
    const contenedor = document.getElementById('grilla-strikeshop');
    contenedor.innerHTML = ''; 

    // Mensaje si la categoría está vacía
    if (productosRender.length === 0) {
        contenedor.innerHTML = '<p class="mensaje-carga">Próximamente agregaremos inventario en esta categoría.</p>';
        return;
    }

    productosRender.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card'); 

        card.innerHTML = `
            <img src="${producto.image_url}" onerror="this.src='https://placehold.co/400x400/1e1e1e/C21833?text=STRIKEBOX'" alt="${producto.name}">
            <h3>${producto.name}</h3>
            <p class="precio">$${producto.price.toLocaleString('es-CL')}</p>
        `;

        card.addEventListener('click', () => abrirModal(producto));
        contenedor.appendChild(card);
    });
}

// Lógica que se activa al clickear un botón o usar la lista móvil
window.filtrarProductos = function(categoria, botonClickeado = null) {
    
    // 1. Filtrar el arreglo en memoria
    let productosFiltrados;
    if (categoria === 'Todos') {
        productosFiltrados = todosLosProductos;
    } else {
        productosFiltrados = todosLosProductos.filter(p => p.category === categoria);
    }

    // 2. Pintar las nuevas tarjetas
    renderizarProductos(productosFiltrados);

    // 3. Estilos: Pintar rojo el botón activo (Escritorio)
    if (botonClickeado) {
        document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('activo'));
        botonClickeado.classList.add('activo');
        
        // Sincronizar select móvil
        document.getElementById('filtro-movil').value = categoria;
    } else {
        // Estilos: Sincronizar botones si el filtro se hizo desde el celular
        document.querySelectorAll('.btn-filtro').forEach(btn => {
            if (btn.textContent.includes(categoria) || (categoria === 'Todos' && btn.textContent === 'Todos')) {
                btn.classList.add('activo');
            } else {
                btn.classList.remove('activo');
            }
        });
    }
};

function abrirModal(producto) {
    productoSeleccionado = producto;

    const imgModal = document.getElementById('modal-img');
    imgModal.src = producto.image_url;
    // Si la imagen falla en el modal, también carga el placeholder
    imgModal.onerror = () => { 
        imgModal.src = 'https://placehold.co/400x400/1e1e1e/C21833?text=STRIKEBOX'; 
    };

    document.getElementById('modal-img').alt = producto.name;
    document.getElementById('modal-nombre').textContent = producto.name;
    document.getElementById('modal-descripcion').textContent = producto.description || 'Sin descripción disponible para este artículo.';
    
    // Formateamos el precio aquí también
    document.getElementById('modal-precio').textContent = `$${producto.price.toLocaleString('es-CL')}`;

    const modal = document.getElementById('modal-producto');
    modal.classList.remove('modal-oculto');
}


// Al usar onclick="cerrarModal()" en el HTML, la función debe estar en el objeto window
window.cerrarModal = function() {
    const modal = document.getElementById('modal-producto');
    modal.classList.add('modal-oculto');
    // modal.style.display = 'none'; // Descomentar si usas display para ocultar
    productoSeleccionado = null; // Limpiamos la selección
};

// Función para el botón de WhatsApp
window.comprarPorWhatsapp = function() {
    if (!productoSeleccionado) return;

    const numeroStrikebox = "56942574270"; 
    
    const mensaje = `¡Hola! Me interesa comprar el siguiente artículo: ${productoSeleccionado.name}. ¿Tienen stock disponible?`;
    
    // Codificar el mensaje para que sea válido en una URL
    const url = `https://wa.me/${numeroStrikebox}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una pestaña nueva
    window.open(url, '_blank');
};

// Extra: Cerrar el modal si el usuario hace clic fuera de la caja de contenido
window.addEventListener('click', (evento) => {
    const modal = document.getElementById('modal-producto');
    if (evento.target === modal) {
        window.cerrarModal();
    }
});