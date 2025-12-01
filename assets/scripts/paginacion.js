document.addEventListener('DOMContentLoaded', function() {
      const itemsPorPagina = 7; // ¿Cuántos trabajos quieres ver por página?
      const lista = document.getElementById('lista-trabajos');
      const filas = lista.getElementsByTagName('tr');
      const contenedorPaginacion = document.getElementById('paginacion');
      let paginaActual = 1;

      function mostrarPagina(pagina) {
          const inicio = (pagina - 1) * itemsPorPagina;
          const fin = inicio + itemsPorPagina;

          // Ocultar todos y mostrar solo los del rango
          for (let i = 0; i < filas.length; i++) {
              if (i >= inicio && i < fin) {
                  filas[i].style.display = ''; // Muestra la fila
              } else {
                  filas[i].style.display = 'none'; // Oculta la fila
              }
          }
          generarBotones();
      }

      function generarBotones() {
          contenedorPaginacion.innerHTML = '';
          const totalPaginas = Math.ceil(filas.length / itemsPorPagina);

          // Botón Anterior
          const btnPrev = document.createElement('button');
          btnPrev.innerText = 'Anterior';
          btnPrev.disabled = paginaActual === 1;
          btnPrev.onclick = () => { paginaActual--; mostrarPagina(paginaActual); };
          contenedorPaginacion.appendChild(btnPrev);

          // Números de página
          for (let i = 1; i <= totalPaginas; i++) {
              const btn = document.createElement('button');
              btn.innerText = i;
              if (i === paginaActual) btn.classList.add('activo');
              btn.onclick = () => { paginaActual = i; mostrarPagina(paginaActual); };
              contenedorPaginacion.appendChild(btn);
          }

          // Botón Siguiente
          const btnNext = document.createElement('button');
          btnNext.innerText = 'Siguiente';
          btnNext.disabled = paginaActual === totalPaginas;
          btnNext.onclick = () => { paginaActual++; mostrarPagina(paginaActual); };
          contenedorPaginacion.appendChild(btnNext);
      }

      // Inicializar
      mostrarPagina(1);
  });