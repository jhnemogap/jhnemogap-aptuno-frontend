# jhnemogap-aptuno-frontend

## ¿Cómo correr su código localmente?

### Versión de Node.js

Lo primero es contar con una versión mínima de node.js mayor o igual a la 14.x.x. No obstante, se recomienda 
usar la misma versión o mayor de la que se encuentra anotada en el archivo `.nvmrc`.

La forma de trabajar en grupo es usar Node Version Manager (NVM), y por medio del archivo `.nvmrc` "garantizar" 
que todos los integrantes levanten la misma versión de node.js localmente.

### Gestor de paquetes

Por defecto este proyecto se inició con el gestor de paquetes `yarn`. Por lo que se debe instalar con:

```bash
npm install -g yarn
```

Ahora ya con yarn instalado globalmente para el entorno de node.js, se procede a ejecutar localmente el desafío.

### Ejecución local del proyecto

Este comando únicamente se corre la primera vez, para instalar los paquetes requeridos.

```bash
yarn install
```
Ahora para poder ejecutar el código en modo desarrollo:

```bash
yarn dev
```

Abrir un navegador con la dirección que se presenta en la terminal [http://localhost:3000](http://localhost:3000);

Nota: para poder probar el código de producción en local se sugiere seguir los siguientes comandos:

```bash
yarn clean
yarn build
yarn start
```

## ¿Cómo correr sus pruebas?

El proyecto no cuenta con pruebas ni configuración para este propósito. Sin embargo, se propone que los archivos 
de pruebas unitarias de cada componente se almacene cada uno en las misma carpeta del componente correspondiente.

## Resumen de las decisiones técnicas

- Usar como base Next.js un framework de React.js. Entrega por defecto en este proyecto:
  - Nula o baja configuración.
  - Manejo de enrutamiento con escasa o "nula" configuración previa.
  - Archivo de configuración sencillo para facilitar importar módulos usando alias (Typescript / Javascript).
  - La opción de usar una API REST sencilla.
  - Viene con soporte integrado para variables de entorno
  - Soporte CSS incorporado; Soporte de Sass; Utilizar Css o Sass a nivel de componente a 
    través de módulos CSS.
  - Compatibilidad con CSS incorporada utilizando PostCSS.
  - Puede servir archivos estáticos, como imágenes, en una carpeta llamada pública en el directorio raíz.
  - SSR + CSR con optimización en un uso híbrido.
  - Cierta flexibilidad para implementar otras librerías que no vienen por defecto. 
  - Proporciona una experiencia integrada de TypeScript lista para usar, similar a un IDE. En caso de querer hacer una migración por partes.
- Usar una librería para la selección simple y multiple de formularios.
- Usar una librería que solventara el carousel de imágenes.
- Usar Javascript para un desarrollo más "rápido", sin entrar en los detalles de tipado.
- Usar Sass por cuanto permite anidar reglas.
- Usar CSS modules para encapsular los estilos de cada componente.

Se creó una carpeta general para código desarrollado `src`. Dentro de esta se crearon otras 
carpetas cada una según la intención de cada código; desde componentes de react.js hasta la 
de utilidades.

- Se planteó mantener la mayor independencia entre las diferentes páginas / rutas, por lo cual la forma de 
  comunicarse cuando fuera posible sería por la URL del navegador. De esta forma se plantea un uso más limpio de 
  funciones únicas de cada página, generando un desarrollo más modular.
  
Aun cuando no se aprovecha al máximo el uso de redux y redux-sagas en este punto del proyecto, su uso presenta 
una gran ventaja a medida que se deben controlar los flujos de cada proceso. Con el ejemplo de obtener las 
regiones / sectores se puede ver el uso de redux y sagas, además del uso de la API interna.

- Los estilos del proyecto se dividen en dos partes. Los globales o de uso común presentes en la carpeta styles, 
los estilos de sass usando css modules por cada componente generado que lo necesite en la carpeta del mismo.

## Gif de interacciones



## Learn More about Next.js

### Official Doc Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


