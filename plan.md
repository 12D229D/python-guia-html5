# Plan: Guía Interactiva de Python 3 (HTML5)

## 📌 Resumen
Aplicación web estática, moderna, responsive e interactiva para aprender Python 3 desde nivel principiante hasta avanzado. Construida en HTML5 semántico, CSS3 con la paleta de colores oficial de Python y JS Vanilla ES6+.

## 🎯 Objetivos
- Estructurar una guía pedagógica de Python 3 (sintaxis básica, estructuras de datos, POO, módulos, asincronía).
- Integrar una **Consola Simulada / Playground (REPL)** para seleccionar y ejecutar snippets en tiempo real.
- Incorporar un **Quiz Interactivo** final con puntuación, retroalimentación instantánea y explicaciones.
- Proveer herramientas como buscador en tiempo real (Ctrl+K), tema claro/oscuro y copiado de código al portapapeles.

---

## 🏗️ Arquitectura

- **Patrón**: SPA estática modular con consola simulada en el navegador.

`	ext
python-guia-html5/
├── index.html        # SPA con contenido técnico, playground y quiz interactivo
├── css/
│   └── styles.css    # Paleta Python HSL, layout responsive y temas claro/oscuro
├── js/
│   └── app.js        # Buscador, terminal REPL simulado, quiz y persistencia local
├── README.md         # Documentación general
└── plan.md           # Plan de desarrollo
`

---

## 🧠 Paradigma de Programación

- **Híbrido: Declarativo + Event-Driven**
- Basado en componentes declarativos (UI) y manejo de eventos para la interacción con la consola REPL y el quiz interactivo.

---

## 🌐 Propósito de Visibilidad y Destino Remoto

- **Visibilidad**: Público (Open Source / Portafolio).
- **Plataforma Remota Asignada**: GitHub.
- **Plataforma de Despliegue CI/CD**: GitHub Pages / Cloudflare Pages.
- **Justificación**: Guía interactiva de aprendizaje de Python 3 con consola interactiva y quiz evaluatorio sin backend; ideal para GitHub Pages.

---

## 📊 Estado Actual

### Implementado
- [x] Marcado HTML5 completo organizado por niveles de aprendizaje.
- [x] Consola / Playground simulado en JS para probar snippets interactivos.
- [x] Cuestionario (Quiz) evaluatorio con retroalimentación visual (verde/rojo) y solución.
- [x] Buscador en tiempo real (Ctrl+K) y alternador de tema claro/oscuro.
- [x] Copiado de código con notificación visual y atajos rápidos.

🟢 **Completado** — Entregable interactivo verificado.
