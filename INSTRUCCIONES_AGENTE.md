# Contexto y Guía de Desarrollo para el Agente (Friotuytec)

Este archivo contiene las instrucciones necesarias para comprender el proyecto, ejecutarlo en local y subir cambios de manera correcta.

---

## 1. Información del Proyecto

* **Nombre del Proyecto:** Friotuytec (Página de Refrigeración)
* **Framework Principal:** TanStack Start (React + TypeScript + Vite + Nitro)
* **Estilos:** Tailwind CSS (configurado con `@tailwindcss/vite` v4)
* **Plataforma de Despliegue & Orquestación:** **Lovable.dev** conectado al repositorio de GitHub: `https://github.com/josegilcha2024/friotuytec-a3d7c804.git`
* **Infraestructura de Alojamiento:** **Cloudflare Pages** (compilado automáticamente mediante Nitro).

> [!IMPORTANT]
> El proyecto fue migrado desde un sitio antiguo en WordPress (`http://friotuytec.wuaze.com`). Los archivos de respaldo de esa versión antigua están en la carpeta `wp_data` y los archivos `.sql` en la raíz. **No modifiques la carpeta `wp_data` ni los archivos SQL**, el desarrollo actual se realiza únicamente dentro de la carpeta `src/`.

---

## 2. Cómo Ejecutar el Proyecto en Local

El proyecto está configurado para usar tanto **Bun** como **NPM**. Se recomienda usar **Bun** para una ejecución más rápida.

1. **Instalar dependencias:**
   ```bash
   bun install
   # o alternativamente: npm install
   ```

2. **Iniciar servidor de desarrollo local:**
   ```bash
   bun run dev
   # o alternativamente: npm run dev
   ```
   La aplicación se abrirá por defecto en `http://localhost:3000` (o el puerto indicado en la terminal).

3. **Estructura de Carpetas Clave**

   * `/src`: Contiene todo el código fuente de la aplicación React.
   * `/src/routes`: Define las páginas y rutas usando TanStack Router.
   * `/src/components`: Componentes reutilizables de UI (Shadcn/ui).
   * `package.json`: Definición de scripts y dependencias.
   * `vite.config.ts`: Configuración del bundler con el plugin de Lovable y TanStack Start.

---

## 3. Instrucciones para Subir Cambios (Flujo de Commit y Push)

Para que los cambios se reflejen de manera automática en la web de producción (y en el editor de Lovable), debes seguir estrictamente este flujo de Git:

1. **Asegúrate de estar en la rama correcta:**
   ```bash
   git branch
   ```

2. **Añadir los archivos modificados:**
   ```bash
   git add .
   ```

3. **Crear el commit** (utiliza un mensaje descriptivo):
   ```bash
   git commit -m "feat: [descripción de la actualización]"
   ```

4. **Subir los cambios a GitHub:**
   ```bash
   git push origin main
   ```
   (Reemplaza `main` por la rama correspondiente si trabajas en otra).

---

## Regla Crítica de Git para Lovable

> [!WARNING]
> **NUNCA** reescribas el historial de Git que ya haya sido subido.
>
> * **NO** utilices `git push --force`.
> * **NO** hagas `git commit --amend` en commits que ya están en el servidor de GitHub.
> * **NO** utilices `git rebase` en commits compartidos.
>
> Hacerlo romperá la sincronización con el editor de Lovable y causará pérdida de historial.
