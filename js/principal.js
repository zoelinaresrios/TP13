

const mapa = L.map('map').setView(
    [-34.5222, -58.4815],
    14
);


L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom:19,
        attribution:'© OpenStreetMap'
    }
).addTo(mapa);




const tanques = [

    {
        nombre:"Tanque Principal",
        coordenadas:[-34.5222,-58.4815],
        nivel:"82%",
        estado:"Funcionamiento normal"
    },

    {
        nombre:"Tanque Norte",
        coordenadas:[-34.5175,-58.4880],
        nivel:"64%",
        estado:"Nivel medio"
    },

    {
        nombre:"Tanque Sur",
        coordenadas:[-34.5285,-58.4740],
        nivel:"27%",
        estado:"Nivel bajo"
    }

];



tanques.forEach(tanque => {

    const marcador = L.marker(
        tanque.coordenadas
    ).addTo(mapa);

    marcador.bindPopup(`
    
    <div class="popup-contenido">

        <h3>💧 ${tanque.nombre}</h3>

        <p><strong>Nivel:</strong> ${tanque.nivel}</p>

        <p><strong>Estado:</strong> ${tanque.estado}</p>

    </div>

    `);

    marcador.on("click", () => {

        const mensaje =
            tanque.nombre +
            ". Nivel de agua " +
            tanque.nivel +
            ". Estado " +
            tanque.estado;

        const voz = new SpeechSynthesisUtterance(mensaje);

        voz.lang = "es-AR";
        voz.rate = 1;

        speechSynthesis.cancel();
        speechSynthesis.speak(voz);

    });

});