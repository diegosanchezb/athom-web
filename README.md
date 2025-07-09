<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# athom-web
# Athom Coffee — Sitio Web

Sitio web simple y responsive para una cafetería, inspirado visualmente en el estilo de [Betular Patisserie](https://www.betular.com).

## Tecnologías utilizadas

- **React** (con Vite)  
- **TypeScript**  
- **Tailwind CSS**  
- **React Router DOM**  
- **Framer Motion** (animaciones)  
- **Keen Slider** (galería de productos)

## Características principales

- Diseño limpio, cálido y minimalista
- Adaptación completa a dispositivos móviles
- Animaciones sutiles entre secciones
- Navegación fluida mediante scroll y enlaces internos
- Secciones visuales con imágenes y tonos acogedores

## Notas

> Este proyecto fue desarrollado como ejercicio personal de frontend, aplicando buenas prácticas de diseño y performance, con foco en estética y responsividad.  
> La inspiración principal en cuanto a disposición, jerarquía y estilo tipográfico fue el sitio oficial de Betular Patisserie.

##  Iniciar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/athom-web.git
cd athom-web

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
>>>>>>> eb4ced49ef7b87e2526ac2355a0ba7c282766170
