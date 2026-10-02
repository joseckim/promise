// DOM
const contenedorEstado = document.getElementById("estado-servicio");
const btnProcesar = document.getElementById("btn-procesar");
const PROBABILIDAD_ERROR = 0.45;

// Funcion generica para simular el tiempo de preparacion y entrega de cada elemento
const prepararYEntregar = (etapa, item, tiempo) => {
    return new Promise((resolve) => {
        contenedorEstado.innerHTML = `<strong>${etapa}:</strong> Preparando 👨‍🍳: "${item}"...`;
        
        setTimeout(() => {
            contenedorEstado.innerHTML = `<strong>${etapa}:</strong> "${item}" Su pedido está listo para entregar!`;
            resolve(item);
        }, tiempo);
    });
};

  //FLUJO 

async function procesarOrdenCompleta(orden) {
    btnProcesar.disabled= true; // Desactivar botón durante el proceso
    contenedorEstado.innerHTML = "Preparando su orden, por favor espere...";

    try {
        // Una sola posibilidad de error para todo el pedido
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < PROBABILIDAD_ERROR) {
                    reject(new Error("El chef se durmio 💤."));
                } else {
                    resolve();
                }
            }, 1500);
        });

        // bebida
        if (orden.bebida) {
            await prepararYEntregar("Sirviendo bebida", orden.bebida, 2000); 
            await new Promise(r => setTimeout(r, 1500)); 
        }

        // pizza
        if (orden.pizza) {
            await prepararYEntregar("Pizza en el horno", orden.pizza, 3000); 
            await new Promise(r => setTimeout(r, 1500)); 
        }

        // postre
        if (orden.postre) {
            await prepararYEntregar("Preparando postre", orden.postre, 2000); 
            await new Promise(r => setTimeout(r, 1500)); 
        }

        contenedorEstado.innerHTML = `
            Pedido completado <br>
            <span class="mensaje-exito">Su pedido está listo para recoger!</span>
        `;

    } catch (error) {
        contenedorEstado.innerHTML = `No pudimos completar tu pedido: ${error.message}`;
    } finally {
        btnProcesar.disabled = false; // Reactivar botón al terminar
    }
}

// SIMULACION 
const miOrden = {
    bebida: "Agua Mineral con Gas",
    pizza: "Pizza Bastoncini y Pizza Napolitana",
    postre: "Cheesecake de limon"
};

btnProcesar.addEventListener("click", () => {
    procesarOrdenCompleta(miOrden);
});