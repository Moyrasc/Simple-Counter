# Simple Counter
<img src ="./src/img/contadorPreview.png"/>

### Instalación Manual

1) Recuerda instalar primero los paquetes de npm :
```
$ npm install
```

2) Construye y empieza a programar :

Construir la aplicación por primera vez...

```
$ npm run start
```

### Instrucciones
1) El propósito principal del componente es mostrar cuántos segundos han pasado desde que el sitio web terminó de cargarse (onLoad).
2) Use el ReactDOM.render() para representar el componente en la aplicación web.
Use la función setInterval() para volver a renderizar el componente cada segundo.
3) El componente no necesita un estado local, puede pasar la cantidad de segundos como props .
4) Puede encontrar el ícono del reloj a la izquierda del componente en fuente impresionante.

En vez de pasarle los segundos fijos como prop, dentro de la función setInterval cree sentencias condicionales para que se fuese actualizando cada segundo,minuto,hora y día como si de un cronometro se tratará.
Además decidí añadir una imagen como  background y darle efectos al contador para que fuese más visual.

### 💫Pruébalo tu mismo 
https://simple-counter-gamma.vercel.app/