document.addEventListener('DOMContentLoaded', () => {
  const unsplashAccessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Reemplaza con tu clave de Unsplash
  const apiUrl = `https://api.unsplash.com/photos/random?query=gym&client_id=${unsplashAccessKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.urls && data.urls.regular) {
        document.body.style.backgroundImage = `url('${data.urls.regular}')`;
      } else {
        console.error('No se encontró una imagen válida');
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')`; // Imagen de respaldo
      }
    })
    .catch(error => {
      console.error('Error al obtener la imagen:', error);
      document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')`; // Imagen de respaldo
    });
});
