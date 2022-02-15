# proyecto-48-final
# Cambios Proyecto Final

Con respecto a la versiona pasada (main-46) nos quedamos lo siguiente:

`gameState = serve`

![image-20220214235825383](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220214235825383.png)

`gameState = play`

![image-20220214235916684](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220214235916684.png)

`gameState = question1`

![image-20220214235958873](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220214235958873.png)

- **No funciona la verificación de respuestas**
- **No cuenta con animación**
- **Se ralentiza muy rápido**
- **No hay fondos**

____

# Versión Nueva main-48V2

`gameState = serve`

![image-20220215000800966](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220215000800966.png)

`gameState = play`

![image-20220215000857454](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220215000857454.png)

`gameState = question1`

![image-20220215001001478](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220215001001478.png)

`gameState = play` (respuesta correcta), `npcState = dead`

![image-20220215001110555](C:\Users\mike1\AppData\Roaming\Typora\typora-user-images\image-20220215001110555.png)

### Integraciones:

- **Cámara que sigue al jugador, con zoom configurado**
- **Sistema de vida del jugador (con playerState) que disminuye progresivamente**
- **Sistema de indicación de vida con colores (alto: blanco, medio: naranja, bajo: rojo), rastreo de jugador**
- **Optimización del juego:** 
  - `useQuadTree(boolean)` es una función hecha para optimizar el sistema de colisiones (eficiencia +7%)
  - Al entrar al estado de juego "play" elimina los objetos de la clase "menu.js" para desocupar memoria (eficiencia +20%)
  - frameRate a 24 para evitar el exceso de fotogramas (sprites). (eficiencia +8%)
  - Eficiencia de optimización + 35%
- **Creación de bordes (edges) configurados para ser invisibles, evita que el jugador se salte el mapa por la cámara**
- **Intentos limitados para el cuestionario**

_El juego sigue presentando fallas de fugas de memoria aunque relativamente menos y se tarda mas en saturarse, se adaptó la historia para hacer parecer este error como "intencionado" con el argumento de dificultad agregada_



____

Tuve que mover el código fuente de p5.play.js para llegar a la configuración final de algunos elementos como poder poner como invisibles los "edges" `(p5.play.js:4096, p5.play.js:4098, p5.play.js:4100, p5.play.js:4102)` o configurar la cámara con zoom `(p5.play.js:57)` . Establecer el frameRate `(p5.play.js:38)` o activar el useQuadTree `(p5.play.js:1395)`


