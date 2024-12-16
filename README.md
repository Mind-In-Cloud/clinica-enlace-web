# clinica-enlace-web
Clinica Enlace web

## Generar Blogs nuevos
Para generar blogs nuevos hay ciertos prerequisitos:
1. Tener las categorias que se van a usar generadas
1. Que el autor tenga la seccion de blog en su informacion

Los blogs se crean dentro del directorio src/content/blogs

Ya cumplidos podemos iniciar a crear un blog nuevo:
Notas:
 - 'blogBase' hace referencia a 'toma-de-biopsias-y-radiologia-intervencionista.mdx' que es el primer blog disponible
 - 'blogNuevo' hace referencia el blog nuevo que se estara creando
1. Usando blogBase de ejemplo podemos generar mas blogs simplemente copiando el archivo y poniendolo en el directorio de la categoria correspondiente ( ex: src/content/blogs/catNueva/blogNuevo.mdx )
1. Hacemos los pasos para subir los cambios

## Generar nuevas categorias
Notas:
 - 'catBase' hace referencia a 'diagnostico-y-prevencion' que es la primer categoria disponible
 - 'catNueva' hace referencia a la categoria nueva que se estara creando
 - **Importante**: catNueva debe compartir el nombre en tres lugares:
    1. src/content/categorias/**catNueva**.mdx
    1. src/content/blogs/**catNueva**/ ( este es un directorio )
    1. src/pages/blog/**catNueva**.astro
    - Los tres se deben llamar igual ( catNueva en el caso del ejemplo, si es un archivo solo cambia la extension del archivo )
    - Asi como se llame asi, se llamara dentro del blog que lleve esta categoria ( ver el blogBase para ejemplos )

Dentro de la carpeta 'src/content/categorias':
1. Copiamos el archivo de la categoria que ya tenemos para usarlo de base
1. Actualizamos los campos como sea necesario
    - Nota: La seccion debajo de los '---' se utilizara como el resumen que se ubica bajo la imagen de la categoria

Dentro de la carpeta 'src/pages/blog':
1. Dentro del directorio de src/pages/blog/ copiamos el archivo que se llama como nuestra catBase.astro, le actualizamos el nombre para que sea catNueva.astro
    - Abrimos el archivo y cambiamos la parte que dice 'diagnostico-y-prevencion' por carNueva ( en el archivo viene el ejemplo tambien)

1. Hacemos los pasos para subir los cambios

## Actualizar informacion de doctor
1. El doctor que sea el autor debera tener la seccion de 'blog' en su archivo
    - Tomar de ejemplo el dr-asdrubal-baylon, que es autor de el primer blog
1. Hacemos los pasos para subir los cambios


## Notas

- Puedes añadir imagenes en el directorio src/assets/images

## Pasos para subir los cambios

### Primero que nada ( si nunca haz subido cambios )
1. Instalar [git for windows](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  <!-- - Este ya incluye [git-credential-manager](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) -->
Una vez instalado necesitaras hacer unos comandos en la terminal, reemplazando el nombre y correo por los tuyos ( tu nombre y tu correo de github )
```
 git config --global user.name "John Doe"
 git config --global user.email johndoe@example.com
```

Importar el proyecto:
```
 git clone (url de arriba)
```

### Antes de los cambios:
1. Actualizamos el repositorio local, asegurandonos primero que estamos en main:
```
git checkout main && git pull
```

### Guardar cambios:

1. Crear una branch nueva en git

```
 git checkout -b blogNuevo
```

Hacer los cambios necesarios y añadir los archivos que se necesitan

1. Añadir los archivos a git

```
 git add .
```

1. Guardar los cambios y anotar el cambio ( con descripcion de ejemplo:)

```
 git commit -am 'Blog 2 creado'
```

1. Enviar los cambios a git

```
git push
```

1. Continuamos en github creando un pull request en la seccion de Pull Request
1. Una vez que los checks pasen el contenido saldra a produccion picandole al boton de squash and merge

1. **Importante**: Tenemos que volver a la rama principal al final
```
 git checkout main && git pull
```

## Volver a produccion

Cuando los cambios ya esten en produccion necesitamos regresar al estado de 'produccion', para esto:

1. Ya le picaste al boton verde de Merge
1. Sale el aviso morado de Merged

Entonces hay que hacer estos pasos:

Esto nos devolvera a la rama original, la que esta en produccion, pero aun no veremos los cambios

```
git checkout main
```

Asi que la tenemos que actualizar con:

```
git pull
```

Y revisaremos que estemos al dia:

```
git status
```

Debe salir un aviso que dice:
```
On branch main
Your branch is up to date with 'origin/main'.
```

# Desarrollo de la app
---
<!--
# Astro Starter Kit: Minimal
-->
```sh
netlify dev
```

```sh
netlify build && netlify serve
```

<!-- Per astro docs: both of these run astro sync in the backgroudn -->
<!--
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json) -->

<!-- > 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun! -->

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

Using PNPM not NPM

You can develop doing:

```
netlify dev
```
<!-- All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     | -->
<!--
## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat). -->
