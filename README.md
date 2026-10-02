# Abruzzo's Pizzería

Proyecto sencillo de una pizzería hecho con HTML, CSS y JavaScript. Al presionar el botón se simula la preparación y entrega de una orden.

## Cómo abrir el proyecto

Abre `index.html` directamente en un navegador. No es necesario instalar paquetes ni ejecutar un servidor.

## Archivos principales

- `index.html`: estructura y contenido de la página.
- `styles.css`: colores y diseño adaptable a móviles, tabletas y escritorio.
- `script.js`: simulación del pedido usando promesas y `async`/`await`.
- `assets/images/logo-white.png`: logotipo que aparece en el encabezado.

## Cómo funciona el pedido

El botón procesa una orden de ejemplo con bebida, pizza y postre. Cada pedido tiene una probabilidad del 45% de fallar al inicio; si falla, se muestra un mensaje y el botón vuelve a habilitarse. Si continúa, se muestran las etapas de preparación y el pedido finaliza.

El porcentaje se puede cambiar en `script.js`, modificando `PROBABILIDAD_ERROR`. Por ejemplo, `0.20` representa un 20% de probabilidad.

## Personalización

- Edita los productos de ejemplo en el objeto `miOrden` de `script.js`.
- Cambia los colores y el diseño en `styles.css`.
- Modifica los textos y el contenido en `index.html`.