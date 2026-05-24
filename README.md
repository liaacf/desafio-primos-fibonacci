# Matemáticas que resuelven problemas: Fibonacci y Números Primos en la vida real

Proyecto web interactivo desarrollado con HTML, CSS y JavaScript que aplica la serie de Fibonacci y los números primos para resolver problemas del mundo real.


## Descripción del proyecto

La página permite al usuario ingresar datos mediante formularios y obtener resultados en pantalla para tres problemas:

1. **Ahorro progresivo con Fibonacci** — simula un plan de ahorro donde cada depósito mensual sigue la serie de Fibonacci.
2. **Seguridad con números primos** — verifica si un número puede usarse como clave segura en criptografía.
3. **Fibonacci + Primos combinados** — genera una secuencia de Fibonacci y detecta cuáles de sus valores también son primos.


## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML | Estructura de la página |
| CSS | Diseño visual y responsivo |
| JavaScript | Lógica de Fibonacci, números primos y manejo de formularios |
| Git / GitHub | Control de versiones y repositorio |
| GitHub Pages | Publicación del sitio web |


## Estructura del proyecto

```
desafio-fibonacci-primos/
│
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── README.md
```


## Algoritmos implementados

### Serie de Fibonacci (sin arrays)

Se usan dos variables `a` y `b` y un ciclo `for` para generar cada término:

```javascript
let a = 1;
let b = 1;
let c;

for (let i = 3; i <= meses; i++) {
  c = a + b;
  a = b;
  b = c;
}
```

### Verificación de número primo

Se cuenta cuántos divisores tiene el número. Si tiene exactamente 2, es primo:

```javascript
let contador = 0;
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) contador++;
}
if (contador === 2) { /* es primo */ }
```


## Restricciones cumplidas

- Toda interacción con el HTML se realiza mediante `document.getElementById()`
- Los datos se ingresan mediante formularios con `<label>` e `<input>`
- Los resultados se muestran directamente en la página, no en consola
- El diseño es responsivo para computadora, tablet y celular (`@media`)
- Los botones usan `type="button"` con `onclick` para evitar recarga de página
