# TP 13 – PWD 2026

## EEST N°1 “Eduardo Ader” – 7° 2° Grupo B

# Descripción del Proyecto

Este proyecto consiste en el desarrollo de un sistema de monitoreo georreferenciado integrado al proyecto EVA (Sistema Inteligente de Monitoreo de Tanques).

La aplicación utiliza mapas interactivos mediante Leaflet.js y OpenStreetMap para representar visualmente la ubicación de distintos tanques monitoreados. Además, incorpora un Mashup Multimedia utilizando síntesis de voz para informar automáticamente el estado de cada tanque cuando el usuario interactúa con los marcadores del mapa.


# Equipo de Desarrollo

Zoe Linares – Desarrollo completo 

# Funcionalidades Principales

* Visualización de mapas interactivos mediante Leaflet.js.
* Integración con OpenStreetMap.
* Marcadores dinámicos georreferenciados.
* Visualización de información contextual mediante ventanas emergentes.
* Sistema multimedia mediante síntesis de voz.
* Simulación de monitoreo de tanques inteligentes.
* Interfaz moderna y adaptable.
* Implementación mediante JavaScript orientado a eventos.



# Consigna Aplicada

El proyecto se basa en la integración de tecnologías web modernas para desarrollar sistemas georreferenciados capaces de representar información del mundo físico.

Se implementaron:

* APIs cartográficas de código abierto.
* Geolocalización mediante coordenadas geográficas.
* Eventos interactivos asociados a marcadores.
* Integración multimedia mediante Web Speech API.
* Diseño responsivo para distintos dispositivos.


# Experiencia de Usuario (UX)

El sistema fue diseñado para ser:

* Intuitivo y fácil de utilizar.
* Visualmente atractivo.
* Rápido en la carga de información.
* Accesible mediante interacción visual y auditiva.
* Adaptable a distintos tamaños de pantalla.



# Tecnologías Utilizadas

Frontend
* HTML5
* CSS3
* JavaScript

APIs y Librerías
* Leaflet.js
* OpenStreetMap
* Web Speech API

Herramientas
* Visual Studio Code
* GitHub

# Estructura del Proyecto

TP13
│
├── css
│   └── style.css
├── js
│   └── principal.js
│
├── index.html
├── README.md
├── LICENSE
└── .gitignore


# Funcionamiento del Sistema

1. El usuario accede al sistema EVA.
2. Se carga automáticamente el mapa georreferenciado.
3. Se muestran los distintos tanques monitoreados.
4. El usuario selecciona un marcador.
5. El sistema despliega información del tanque.
6. Se reproduce una notificación mediante síntesis de voz indicando:

   * Nombre del tanque.
   * Nivel de agua.
   * Estado operativo.


# Instalación y Ejecución
Clonar repositorio
git clone: https://github.com/zoelinaresrios/TP13


Ejecutar

Abrir el archivo:
index.html

en cualquier navegador moderno.


# Aplicación en EVA

Este módulo permite incorporar visualización geográfica al sistema EVA, facilitando la identificación de tanques, estaciones de monitoreo y puntos de control dentro de una interfaz interactiva.

Su implementación aporta valor funcional al Proyecto Integrador Anual y a la presentación en la Expo Técnica, permitiendo representar información de infraestructura de manera clara, visual y accesible.


# Licencia

Este proyecto se distribuye bajo la licencia MIT.
