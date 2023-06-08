# Proyecto personal - SALTY

Página de sugerencia de recetas en función del tipo de dieta.

## Tabla de contenidos

- [Objetivo](#objetivo)
  - [Requisitos](#requisitos)
  - [Fases](#fases)
  - [Capturas](#capturas)
  - [Links](#links)
- [Proceso](#Proceso)
  - [Construido con](#construido-con)
  - [Puntos clave](#puntos-clave)
  - [Aspectos a mejorar](#aspectos-a-mejorar)
  - [Recursos](#recursos)

## Objetivo

- Elusuario podrá escoger entre tres tipos de dieta: carnívora, vegetariana, vegana.
- Se mostrarán cuatro recetas en función de la dieta elegida.
- Al entrar en una receta se podrá ver: ingredientes, valor nutricional e instrucciones.

### Requisitos

- Manipulación dinámica del DOM
- Crear una página SPA para las preguntas
- Manejo de ES6
- Asincronía. Usar API de preguntas https://opentdb.com/
- APIs HTML5: Uso de Local storage y gráficas, etc...
- Sin frameworks ni librerias externas en la medida de lo posible
- Gestión del proyecto en Github desde el principio. Uso de ramas, fork, pull request, etc...
- Código limpio, buenas prácticas

### Fases

- FASE 1: Diseño del front: Diseño responsive, mobile first, semántica HTML5.
- FASE 2: Lógica de JavaScript.
- FASE 3: Asincronía: Leer 5 preguntas random de la API de prenguntas para generar el Quiz.
- FASE 4 (avanzado) - APIs HTML5: Almacenar la puntuación de cada partida en Local Storage. Mostrar en la Home con una gráfica los resultados de las últimas partidas jugadas.
- FASE 5 - Migración a Firebase
- FASE 6 - Firebase Auth. Login con Google (obligatorio) y email+password

### Capturas

![](./assets/screenshots/smartphone-login.jpg)
![](./assets/screenshots/smartphone-play.jpg)
![](./assets/screenshots/desktop-login.jpg)
![](./assets/screenshots/desktop-play.jpg)

### Links

- Repositorio: [Quiz Team Up](https://github.com/Radu-A/quiz-team-up)
- Live Site: [Demo](https://quiz-team-up.vercel.app/)

## Proceso

### Construido con

- HTML5 semántico
- CSS
- Flexbox
- Mobile-first workflow
- Diseño SPA
- Local Storage
- Firebase: Firestore y Firebase Auth

### Puntos clave

- Diseño SPA. Aprender la lógica del evento "cambio de Hash" y emplearlo para navegar dentro de una misma página
- Validación de respuestas adaptada al diseño SPA. Conseguír que la validación de las respuestas y el almacenamiento de las repuestas correctas funcione en una Single Page Aplication
- Localstorage y Firebase. Combinar ambos métodos para almacenar las partidas guardadas
- Firebase Auth. Asimilar el flujo de datos para crear una navegación adecuada en la página de inicio

### Aspectos a mejorar

- Desarrollar la lógica de una página de inicio con autenticación
- Mejorar la navegación durante la autenticación con modales
- Practicar el uso de Firebase

### Recursos

- [Tutorial SPA JS Vanilla](https://www.youtube.com/watch?v=D9avX-jtIPM&t=3980s) - Tutorial sobre el uso de SPA con Vanilla Jvascript.
- [Firebase Auth](https://www.youtube.com/watch?v=1rLBjRF0ep0&t=3974s) - Tutorial sobre Firebase Auth.
