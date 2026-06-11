// "Base de Datos" Local para Strikeshop
const inventarioStrikeshop = [
    {
        id: 1,
        name: "Guantes Javco Blanco/Dorado",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/tienda/guantes1.png",
        galeria: ["assets/img/tienda/guantes1.png"],
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 2,
        name: "Guantes Javco Azul/Negro",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/tienda/guantes2.png",
        galeria: ["assets/img/tienda/guantes2.png"],
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 3,
        name: "Guantes Javco Azul/Blanco",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/tienda/guantes3.png",
        galeria: ["assets/img/tienda/guantes3.png"],
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 4,
        name: "Guantes Javco Rojo/Blanco",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/tienda/guantes4.png",
        galeria: ["assets/img/tienda/guantes4.png"],
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 5,
        name: "Guantes Javco Negro/Blanco",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/tienda/guantes5.png",
        galeria: ["assets/img/tienda/guantes5.png"],
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 6,
        name: "Guantes Javco Negro/Dorado",
        price: 35000,
        brand: "Javco",
        image_url: "assets/img/tienda/guantes6.png",
        galeria: ["assets/img/tienda/guantes6.png"],
        description: "Guantes de Boxeo/Kickboxing marca Javco, ideales para sparring y trabajo en saco.",
        category: "Guantes"
    },
    {
        id: 7,
        name: "Espinilleras/Canilleras Javco Negro/Dorado",
        price: 42000,
        image_url: "assets/img/tienda/espinilleras1.png",
        galeria: ["assets/img/tienda/espinilleras1.png"],
        description: "Protección de alto impacto para sparring duro.",
        category: "Espinilleras"
    },
    {
        id: 8,
        name: "Espinilleras / Canilleras Javco Blanco/Rosado",
        price: 42000,
        image_url: "assets/img/tienda/espinilleras2.png",
        galeria: ["assets/img/tienda/espinilleras2.png"],
        description: "Protección de alto impacto para sparring duro.",
        category: "Espinilleras"
    },
    {
        id: 9,
        name: "Espinilleras / Canilleras Javco Blanco/Dorado",
        price: 42000,
        image_url: "assets/img/tienda/espinilleras3.png",
        galeria: ["assets/img/tienda/espinilleras3.png"],
        description: "Protección de alto impacto para sparring duro.",
        category: "Espinilleras"
    },
    {
        id: 10,
        name: "Vendas rápidas",
        price: 12000,
        image_url: "assets/img/tienda/vendarapida1.png",
        galeria: ["assets/img/tienda/vendarapida1.png"],
        description: "Vendaje de alta calidad para proteger tus manos durante el entrenamiento.",
        category: "Accesorios"
    },
    {
        id: 11,
        name: "Polera Disciplinas Strikebox",
        price: 15000,
        image_url: "assets/img/tienda/polera1adelante.jpeg",
        galeria: ["assets/img/tienda/polera1adelante.jpeg","assets/img/tienda/polera1atras.jpeg"],
        description: "Polera oficial de Strikebox, perfecta para entrenar o lucir tu pasión por las artes marciales.",
        category: "Poleras"
    },
    {
        id: 12,
        name: "Polera Strikebox Logo",
        price: 15000,
        image_url: "assets/img/tienda/polera2adelante.jpeg",
        galeria: ["assets/img/tienda/polera2adelante.jpeg","assets/img/tienda/polera2atras.jpeg"],
        description: "Polera oficial de Strikebox, perfecta para entrenar o lucir tu pasión por las artes marciales.",
        category: "Poleras"
    },
    {
        id: 13,
        name: "Polera Strikebox Logo Color",
        price: 15000,
        image_url: "assets/img/tienda/poleralogo.jpeg",
        galeria: ["assets/img/tienda/poleralogo.jpeg"],
        description: "Polera oficial de Strikebox, perfecta para entrenar o lucir tu pasión por las artes marciales.",
        category: "Poleras"
    },
    {
        id: 14,
        name: "Polera Evolución Strikebox",
        price: 15000,
        image_url: "assets/img/tienda/evolucion.jpeg",
        galeria: ["assets/img/tienda/evolucion.jpeg"],
        description: "Polera oficial de Strikebox, perfecta para entrenar o lucir tu pasión por las artes marciales.",
        category: "Poleras"
    },
    {
        id: 15,
        name: "Polera sin mangas Strikebox",
        price: 33000,
        image_url: "assets/img/tienda/sinmangas.jpeg",
        galeria: ["assets/img/tienda/sinmangas.jpeg"],
        description: "Polera sin mangas oficial de Strikebox, perfecta para entrenar o lucir tu pasión por las artes marciales.",
        category: "Poleras"
    },
    {
        id: 16,
        name: "Conjunto Buzo Strikebox Gris",
        price: 45000,
        image_url: "assets/img/tienda/buzogris.png",
        galeria: ["assets/img/tienda/buzogris.png"],
        description: "Conjunto de buzo oficial de Strikebox, perfecto para entrenar o lucir tu pasión por las artes marciales.",
        category: "Conjuntos"
    },
    {
        id: 17,
        name: "Conjunto Buzo Strikebox Negro con Rojo",
        price: 45000,
        image_url: "assets/img/tienda/buzonegro.png",
        galeria: ["assets/img/tienda/buzonegro.png"],
        description: "Conjunto de buzo oficial de Strikebox, perfecto para entrenar o lucir tu pasión por las artes marciales.",
        category: "Conjuntos"
    },
    {
        id: 18,
        name: "Polerón con Cierre Strikebox Gris/Negro",
        price: 33000,
        image_url: "assets/img/tienda/poleroncierregris.png",
        galeria: ["assets/img/tienda/poleroncierregris.png"],
        description: "Conjunto de buzo oficial de Strikebox, perfecto para entrenar o lucir tu pasión por las artes marciales.",
        category: "Polerones"
    },
    {
        id: 19,
        name: "Protector Genital Masculino",
        price: 33000,
        image_url: "assets/img/tienda/genital.jpeg",
        galeria: ["assets/img/tienda/genital.jpeg"],
        description: "Protector genital masculino de alta calidad, diseñado para brindar máxima protección durante el entrenamiento y la competencia.",
        category: "Accesorios"
    },
    {
        id: 20,
        name: "Cabezal Javco color negro",
        price: 32000,
        image_url: "assets/img/tienda/cabezal.jpeg",
        galeria: ["assets/img/tienda/cabezal.jpeg"],
        description: "Cabezal Javco color negro, brinda máxima protección durante el entrenamiento y la competencia.",
        category: "Accesorios"
    },
    {
        id: 21,
        name: "Vendas lisas o Diseño",
        price: 10000,
        image_url: "assets/img/tienda/vendas.jpeg",
        galeria: ["assets/img/tienda/vendas.jpeg"],
        description: "Vendas lisas o con diseño, ideales para el entrenamiento y la competencia.",
        category: "Accesorios"
    },
    {
        id: 22,
        name: "Protector Bucal doble gel",
        price: 10000,
        image_url: "assets/img/tienda/bucal.jpeg",
        galeria: ["assets/img/tienda/bucal.jpeg"],
        description: "Protector bucal doble gel, brinda máxima protección durante el entrenamiento y la competencia.",
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

let indiceImagenActual = 0; // NUEVO: Controla qué foto del carrusel estamos viendo

function abrirModal(producto) {
    productoSeleccionado = producto;
    indiceImagenActual = 0; // Reiniciamos el contador al abrir un nuevo producto

    const imgModal = document.getElementById('modal-img');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    // Mostramos la primera imagen (ya sea de la galería o la imagen única)
    if (producto.galeria && producto.galeria.length > 0) {
        imgModal.src = producto.galeria[0];
        
        // Si hay más de 1 foto, mostramos las flechas
        if (producto.galeria.length > 1) {
            btnPrev.classList.remove('oculto');
            btnNext.classList.remove('oculto');
        } else {
            btnPrev.classList.add('oculto');
            btnNext.classList.add('oculto');
        }
    } else {
        // Fallback por si el producto no tiene el arreglo "galeria"
        imgModal.src = producto.image_url;
        btnPrev.classList.add('oculto');
        btnNext.classList.add('oculto');
    }

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

// NUEVA FUNCIÓN: Se activa al hacer clic en las flechas
window.cambiarImagen = function(direccion) {
    if (!productoSeleccionado || !productoSeleccionado.galeria) return;

    const totalImagenes = productoSeleccionado.galeria.length;
    
    // Sumamos o restamos (1 o -1)
    indiceImagenActual += direccion;

    // Si nos pasamos de la última foto, volvemos a la primera
    if (indiceImagenActual >= totalImagenes) {
        indiceImagenActual = 0;
    } 
    // Si retrocedemos desde la primera, vamos a la última
    else if (indiceImagenActual < 0) {
        indiceImagenActual = totalImagenes - 1;
    }

    // Cambiamos el src de la imagen por la nueva foto
    document.getElementById('modal-img').src = productoSeleccionado.galeria[indiceImagenActual];
};


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