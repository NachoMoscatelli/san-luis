window.addEventListener('load', () => {
    const gif = document.getElementById('bandera-san-luis');
    const duracionGif = 750; // Duración en milisegundos (por ejemplo 3 segundos)

    const srcActual = gif.src; // el src completo (con dominio y todo)
  
    // Cambiamos solo el nombre del archivo, mantenemos el path
    const nuevoSrc = srcActual.replace('gif-bandera.gif', 'Bandera-pagina-web.png');
  
    setTimeout(() => {
      gif.src = nuevoSrc;
    }, duracionGif);
});