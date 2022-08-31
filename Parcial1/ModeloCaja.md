# Modelo Caja - HTML/CSS

<img src="https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png" alt="Imagen modelo caja" style="margin-bottom: 1.6em; background-color: white">

En la elaboracion de un documento, el motor de representacion del navegador representa cada elemento como un cuadro rectangular, basandose en el estandar *CSS BOX MODEL*.

En CSS se determina el tamano, posicion, y propiedades (color, fondo, etc.) de estos cuadros. Cada caja se compone de cuatro partes definidas por sus limites:
* Limite del contenido -
   * Contiene el contenido **Real** del elemento, como por ejemplo texto, imagen o un video. Si la propiedad *box-sizing* esta configurada en content-box, se podra definir su ancho, ancho, y el maximo/minimo de estos.
* Limite de relleno - *padding*
   * Extiende/Limita el area del contenido para incluir el relleno del elemento. Cuando el area del contenido tiene un fondo, se extiende dentro del relleno. 
* Limite del borde - *border*
   * Extiende/Limita  el area de relleno, para incluir los bordes del elemento, sus dimensiones son el ancho & alto de la caja del borde.
* Limite del margen - *margin*
   * Extiende/Limita el area del borde para incluir un area vacia, utilizada para separar elementos de sus vecinos


*Finalmente*, para elementos en linea no reemplazados, la cantidad de espacio ocupado esta determinada por la propiedad *line-height*, aunque los bordes y el relleno se muestran alrededor del contenido

##### Informacion:

