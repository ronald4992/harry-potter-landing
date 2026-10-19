# 🏰 Hogwarts - Landing Page del Mundo Mágico de Harry Potter

Landing page interactiva ambientada en el Colegio Hogwarts de Magia y Hechicería, desarrollada con **TypeScript**, **Node.js (Express)**, **React**, **Vite** y **Tailwind CSS**.

---

## 📋 Cumplimiento de Criterios de Evaluación

La landing page cuenta exactamente con las **10 secciones requeridas** en su estructura web:

1. **Header**: Barra de navegación superior con el escudo de Hogwarts, enlaces a secciones, selector dinámico de Casas (Gryffindor, Slytherin, Ravenclaw, Hufflepuff), reproductor de melodía mágica con sintetizador Web Audio API y botón de solicitud de carta.
2. **Hero**: Apertura visual con velas flotantes animadas, titular épico *"Tu Carta de Aceptación a Hogwarts Ha Llegado"*, botones de acción y estadísticas del colegio (4 Casas, 142 Escaleras, Andén 9¾, 100% Magia).
3. **Beneficios**: 6 tarjetas interactivas detallando los privilegios de estudiar en Hogwarts (Encantamientos y Pociones, Varita de Ollivanders, Castillo y Hogsmeade, Liga de Quidditch, Polvos Flu y Expreso, Hermandad de Sala Común).
4. **CTA (Call to Action 1)**: Formulario interactivo para tramitar la Carta Oficial de Admisión por lechuza, conectado al backend Node.js (`POST /api/admission`), que genera la carta en pergamino con sello de cera roja y firma de Minerva McGonagall.
5. **Explicación**: El camino del estudiante en 4 fases (El Andén 9¾, La Ceremonia de Selección, 7 Cursos de Artes Arcanas, Copa de las Casas) y un **Simulador Interactivo de Encantamientos con Varita** (*Lumos*, *Expecto Patronum*, *Wingardium Leviosa*, *Alohomora*).
6. **Testimonios**: Reseñas de figuras legendarias del mundo mágico (Hermione Granger, Albus Dumbledore, Luna Lovegood, Neville Longbottom, Ron Weasley, Severus Snape) con valoraciones en estrellas doradas y filtros por Casa.
7. **CTA 2 (Call to Action 2)**: Test interactivo del Sombrero Seleccionador en tiempo real con 4 preguntas éticas y arcanas, evaluadas por el backend Node.js (`POST /api/sorting`), celebración con confeti de los colores de la Casa ganadora y diploma de asignación.
8. **FAQ (Preguntas Frecuentes)**: Acordeón interactivo categorizado (Admisiones, Materiales, Vida en Hogwarts, Seguridad) que responde a las dudas de magos nacidos de muggles, mascotas permitidas, escaleras movedizas y compra de varitas.
9. **Pre-footer**: Boletín oficial de **El Profeta** (*The Daily Prophet*), con formulario de suscripción diaria por lechuza conectada al backend (`POST /api/newsletter`).
10. **Footer**: Pie de página con el lema *"Draco Dormiens Nunquam Titillandus"*, enlaces a las 4 Casas, Estatuto Internacional del Secreto Mágico de 1689 y el easter egg del Mapa del Merodeador (*"Travesura Realizada"*).

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti.
- **Backend**: Node.js 24, Express 5, TypeScript (`tsx`).
- **Audio**: Sintetizador Web Audio API autónomo (sin dependencias externas).
- **Herramientas**: Vite, Concurrently.

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/ronald4992/harry-potter-landing.git
cd harry-potter-landing
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Modo Desarrollo (Frontend + Backend concurrentes)
```bash
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3001`

### 4. Compilación de Producción
```bash
npm run build
```

### 5. Iniciar Servidor de Producción
```bash
npm start
```

## 🌐 Despliegue en GitHub Pages

El flujo de GitHub Actions en `.github/workflows/deploy.yml` construye y publica el sitio al hacer push a `main`. Para activarlo, selecciona **Settings > Pages > Build and deployment > Source > GitHub Actions** en el repositorio.

Las rutas de los archivos estáticos se configuran automáticamente para la subruta del repositorio en GitHub Pages. GitHub Pages solo publica el frontend estático; las funciones que envían datos al backend Express (`/api/admission`, `/api/sorting` y `/api/newsletter`) requieren desplegar ese backend por separado.

---

## 📜 Licencia y Derechos

Inspirado en el universo de Harry Potter de J.K. Rowling. Proyecto educativo desarrollado para evaluación técnica.
