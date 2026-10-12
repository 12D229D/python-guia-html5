/**
 * Guía Interactiva de Python 3 - Lógica y Funcionalidades JavaScript (Vanilla ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DICCIONARIO DE EJEMPLOS DE CÓDIGO
  // ==========================================
  const codeSnippets = {
    hola_mundo: {
      code: `# Ejemplo 1: Hola Mundo y f-strings
print("¡Hola, mundo desde Python!")

nombre = "Desarrollador"
print(f"¡Bienvenido a la guía, {nombre}!")`,
      output: `¡Hola, mundo desde Python!\n¡Bienvenido a la guía, Desarrollador!`
    },
    variables: {
      code: `# Ejemplo 2: Variables y Tipos de Datos
edad = 28
estatura = 1.75
lenguaje = "Python"
es_genial = True

print(f"Tipo de edad: {type(edad)}")
print(f"Tipo de estatura: {type(estatura)}")

# Casting
numero_str = "100"
numero_int = int(numero_str)
print(f"Suma convertida: {numero_int + 50}")`,
      output: `Tipo de edad: <class 'int'>\nTipo de estatura: <class 'float'>\nSuma convertida: 150`
    },
    condicionales: {
      code: `# Ejemplo 3: Condicionales (if, elif, else)
nota = 85

if nota >= 90:
    print("Calificación: A - Excelente")
elif nota >= 80:
    print("Calificación: B - Muy Bueno")
elif nota >= 70:
    print("Calificación: C - Aprobado")
else:
    print("Calificación: Reprobado")`,
      output: `Calificación: B - Muy Bueno`
    },
    bucles: {
      code: `# Ejemplo 4: Bucles (For y While)
print("--- Conteo con range ---")
for i in range(1, 4):
    print(f"Iteración {i}")

print("\n--- Bucle While ---")
contador = 3
while contador > 0:
    print(f"Cuenta regresiva: {contador}")
    contador -= 1
print("¡Despegue!")`,
      output: `--- Conteo con range ---\nIteración 1\nIteración 2\nIteración 3\n\n--- Bucle While ---\nCuenta regresiva: 3\nCuenta regresiva: 2\nCuenta regresiva: 1\n¡Despegue!`
    },
    estructuras: {
      code: `# Ejemplo 5: Estructuras de Datos
lenguajes = ["Python", "JavaScript", "C++"]
lenguajes.append("Rust")
print(f"Lista de lenguajes: {lenguajes}")

persona = {
    "nombre": "Carlos",
    "rol": "Data Engineer",
    "experiencia_años": 5
}
print(f"Rol de {persona['nombre']}: {persona['rol']}")

cuadrados = [x**2 for x in range(1, 6)]
print(f"Cuadrados del 1 al 5: {cuadrados}")`,
      output: `Lista de lenguajes: ['Python', 'JavaScript', 'C++', 'Rust']\nRol de Carlos: Data Engineer\nCuadrados del 1 al 5: [1, 4, 9, 16, 25]`
    },
    funciones: {
      code: `# Ejemplo 6: Funciones y Lambda
def saludar(nombre, saludo="Hola"):
    return f"{saludo}, {nombre}!"

print(saludar("María"))
print(saludar("Juan", "Buenos días"))

multiplicar = lambda a, b: a * b
print(f"Resultado de 4 x 5 = {multiplicar(4, 5)}")`,
      output: `Hola, María!\nBuenos días, Juan!\nResultado de 4 x 5 = 20`
    },
    poo: {
      code: `# Ejemplo 7: Programación Orientada a Objetos
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def obtener_info(self):
        return f"Vehículo: {self.marca} {self.modelo}"

class AutoElectrico(Vehiculo):
    def __init__(self, marca, modelo, bateria_kwh):
        super().__init__(marca, modelo)
        self.bateria_kwh = bateria_kwh

    def estado_bateria(self):
        return f"Batería actual: {self.bateria_kwh} kWh"

mi_tesla = AutoElectrico("Tesla", "Model 3", 75)
print(mi_tesla.obtener_info())
print(mi_tesla.estado_bateria())`,
      output: `Vehículo: Tesla Model 3\nBatería actual: 75 kWh`
    },
    excepciones: {
      code: `# Ejemplo 8: Manejo de Excepciones
def dividir(a, b):
    try:
        resultado = a / b
    except ZeroDivisionError:
        return "Error: No se puede dividir entre cero."
    except TypeError:
        return "Error: Ingresa números válidos."
    else:
        return f"Resultado exitoso: {resultado}"
    finally:
        print("Operación de división finalizada.")

print(dividir(10, 2))
print(dividir(5, 0))`,
      output: `Operación de división finalizada.\nResultado exitoso: 5.0\nOperación de división finalizada.\nError: No se puede dividir entre cero.`
    },
    modulos: {
      code: `# Ejemplo 9: Módulos de la Biblioteca Estándar
import math
import random
from datetime import datetime

print(f"Raíz cuadrada de 16: {math.sqrt(16)}")
print(f"Número aleatorio del 1 al 100: {random.randint(1, 100)}")
print(f"Fecha actual: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")`,
      output: `Raíz cuadrada de 16: 4.0\nNúmero aleatorio del 1 al 100: 87\nFecha actual: 2026-07-22 11:45:00`
    }
  };

  // ==========================================
  // 2. CAMBIO DE TEMA (CLARO / OSCURO)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('python-guide-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('python-guide-theme', newTheme);
  });

  // ==========================================
  // 3. NAVEGACIÓN Y MENÚ MOBILE
  // ==========================================
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleSidebar = () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
  };

  if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

  // Cerrar sidebar al hacer clic en un enlace en móviles
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
      }
    });
  });

  // Resaltar sección activa durante el scroll
  const sections = document.querySelectorAll('.content-section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================
  // 4. BOTONES PARA COPIAR CÓDIGO
  // ==========================================
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block').querySelector('pre code');
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
          const originalText = btn.textContent;
          btn.textContent = '¡Copiado! ✓';
          btn.style.background = 'var(--success-color)';
          btn.style.color = '#000';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
          }, 2000);
        });
      }
    });
  });

  // ==========================================
  // 5. PLAYGROUND / CONSOLA INTERACTIVA
  // ==========================================
  const snippetSelect = document.getElementById('snippet-select');
  const codeInput = document.getElementById('code-input');
  const terminalOutput = document.getElementById('terminal-output');
  const runBtn = document.getElementById('run-btn');
  const clearTerminalBtn = document.getElementById('clear-terminal');
  const runButtons = document.querySelectorAll('.btn-run');

  const loadSnippet = (snippetKey) => {
    const snippet = codeSnippets[snippetKey];
    if (snippet) {
      codeInput.value = snippet.code;
      if (snippetSelect) snippetSelect.value = snippetKey;
    }
  };

  const executeCode = () => {
    const selectedKey = snippetSelect ? snippetSelect.value : 'hola_mundo';
    const snippet = codeSnippets[selectedKey];
    
    const outputText = snippet ? snippet.output : 'Ejecución finalizada correctamente.';
    const timeString = new Date().toLocaleTimeString();

    const outputHtml = `
<span class="terminal-prompt">[${timeString}] >>> Executing snippet: ${selectedKey}.py</span>
<div class="terminal-output-line">${outputText.replace(/\n/g, '<br>')}</div>
<br>`;

    terminalOutput.innerHTML += outputHtml;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };

  if (snippetSelect) {
    snippetSelect.addEventListener('change', (e) => loadSnippet(e.target.value));
    loadSnippet(snippetSelect.value); // Cargar valor por defecto
  }

  if (runBtn) {
    runBtn.addEventListener('click', executeCode);
  }

  if (clearTerminalBtn) {
    clearTerminalBtn.addEventListener('click', () => {
      terminalOutput.innerHTML = `<span class="terminal-prompt">Python 3.12.0 (main, Oct 2026) [Guía Interactiva HTML5]</span>\n<span class="terminal-prompt">Terminal limpia. Selecciona un ejemplo y haz clic en 'Ejecutar Código'.</span>\n<br>`;
    });
  }

  // Botones "Probar en Consola" en cada bloque de código
  runButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const snippetKey = btn.getAttribute('data-snippet');
      loadSnippet(snippetKey);
      
      // Scroll a la consola
      const playgroundSection = document.getElementById('playground');
      if (playgroundSection) {
        playgroundSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => executeCode(), 400);
      }
    });
  });

  // ==========================================
  // 6. BUSCADOR EN TIEMPO REAL
  // ==========================================
  const searchInput = document.getElementById('search-input');

  const performSearch = (query) => {
    const term = query.toLowerCase().trim();
    const topicBlocks = document.querySelectorAll('.topic-block, .card');

    if (!term) {
      topicBlocks.forEach(el => el.classList.remove('hidden'));
      return;
    }

    topicBlocks.forEach(el => {
      const text = el.textContent.toLowerCase();
      if (text.includes(term)) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => performSearch(e.target.value));

    // Atajo de teclado Ctrl+K / Cmd+K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // ==========================================
  // 7. CUESTIONARIO INTERACTIVO (QUIZ)
  // ==========================================
  const quizQuestions = [
    {
      question: "1. ¿Cuál es la extensión de archivo estándar para los scripts de Python?",
      options: [".pyt", ".python", ".py", ".pyw"],
      correct: 2
    },
    {
      question: "2. ¿Cómo se define una función en Python?",
      options: ["function mi_funcion():", "def mi_funcion():", "func mi_funcion():", "void mi_funcion():"],
      correct: 1
    },
    {
      question: "3. ¿Qué tipo de dato es inmutable en Python?",
      options: ["List (lista)", "Dictionary (diccionario)", "Tuple (tupla)", "Set (conjunto)"],
      correct: 2
    },
    {
      question: "4. ¿Cuál de los siguientes es el método constructor en una clase de Python?",
      options: ["__create__()", "__init__()", "constructor()", "new()"],
      correct: 1
    },
    {
      question: "5. ¿Qué palabra clave se usa para manejar excepciones en Python?",
      options: ["try / except", "try / catch", "do / handle", "check / error"],
      correct: 0
    }
  ];

  const quizBox = document.getElementById('quiz-box');
  const quizSubmitBtn = document.getElementById('quiz-submit-btn');
  const quizResetBtn = document.getElementById('quiz-reset-btn');
  const quizResult = document.getElementById('quiz-result');

  const renderQuiz = () => {
    if (!quizBox) return;

    let quizHtml = '';
    quizQuestions.forEach((q, index) => {
      quizHtml += `
        <div class="quiz-card" data-question="${index}">
          <p class="quiz-question">${q.question}</p>
          <div class="quiz-options">
            ${q.options.map((opt, optIndex) => `
              <label class="quiz-option">
                <input type="radio" name="q_${index}" value="${optIndex}">
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    });

    quizBox.innerHTML = quizHtml;
  };

  renderQuiz();

  if (quizSubmitBtn) {
    quizSubmitBtn.addEventListener('click', () => {
      let score = 0;

      quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q_${index}"]:checked`);
        const card = document.querySelector(`.quiz-card[data-question="${index}"]`);
        const options = card.querySelectorAll('.quiz-option');

        options.forEach((optLabel, optIndex) => {
          optLabel.classList.remove('correct', 'incorrect');
          if (optIndex === q.correct) {
            optLabel.classList.add('correct');
          }
        });

        if (selected) {
          const answer = parseInt(selected.value, 10);
          if (answer === q.correct) {
            score++;
          } else {
            options[answer].classList.add('incorrect');
          }
        }
      });

      const total = quizQuestions.length;
      const percentage = Math.round((score / total) * 100);

      quizResult.style.display = 'block';
      let message = '';
      if (percentage === 100) {
        message = '🏆 ¡Excelente! Dominas perfectamente los conceptos de Python.';
      } else if (percentage >= 60) {
        message = '👍 ¡Buen trabajo! Tienes un buen dominio básico de Python.';
      } else {
        message = '📚 Sigue repasando la guía para consolidar los conocimientos.';
      }

      quizResult.innerHTML = `Puntuación: ${score} / ${total} (${percentage}%)<br><span style="font-size:0.95rem; font-weight:normal; color:var(--text-muted);">${message}</span>`;

      quizSubmitBtn.style.display = 'none';
      quizResetBtn.style.display = 'inline-block';
    });
  }

  if (quizResetBtn) {
    quizResetBtn.addEventListener('click', () => {
      renderQuiz();
      quizResult.style.display = 'none';
      quizSubmitBtn.style.display = 'inline-block';
      quizResetBtn.style.display = 'none';
    });
  }

});
