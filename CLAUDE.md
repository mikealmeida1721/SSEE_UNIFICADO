# SSEE — Sistema de Especificación Energética y Estructural

**Autor:** Mike Edison Almeida Vallejo  
**Versión:** Genesis 5.12  
**Tagline:** "La magnitud es una ilusión. La única constante es la relación."

## Qué es este proyecto

Plataforma web de visualización científica que propone un marco teórico unificado llamado "Arquitectura de Software Cósmico". Explica constantes físicas fundamentales (tensión de Hubble, física de partículas, cosmología) mediante relaciones matemáticas entre PHI, PI y OMEGA.

La aplicación completa es un SPA en un único archivo `index.html` (~4100 líneas) con Three.js, Chart.js y Tailwind CSS (todos por CDN).

## Constantes SSEE

### Base
| Nombre | Valor | Descripción |
|--------|-------|-------------|
| PHI | 1.618033988749895 | Intención / Razón áurea |
| PI | 3.141592653589793 | Luz / π |
| OMEGA | 4.759626642 | Estabilidad (OMEGA_DNAV) |

### Derivadas
| Nombre | Fórmula | Valor | Rol |
|--------|---------|-------|-----|
| BIAL | (PHI+PI)/2 | 2.379813321 | Pulso / Fricción Vital |
| KAL | BIAL+PI | 5.521405974 | Retención / Anclaje Local |
| SOLAR | BIAL+KAL | 7.901219295 | Expansión Solar |
| MAR | OMEGA+PI | 7.901219295 | Marea |
| VITA | PI+KAL | 8.662998628 | Biometría / Salud |
| ANMA | BIAL+VITA | 11.042811949 | Ánima |
| PYROS | OMEGA+PHI | 6.377660630 | Forja Base |
| IGNIS | PI+PYROS | 9.519253284 | Forja / Caos |
| KRYSTOS | PHI+PI+OMEGA | 9.519253284 | Cristal / Virtud / Orden |
| PHITA | 10.281 (fijo) | 10.281 | Belleza |
| MIKA | KRYSTOS+PHI | 11.137287273 | Límite de Luz 3D |
| AURA | PHI+BIAL | 3.997847309 | Contenedor / Límite |
| MIRA | AURA/2 | 1.998923654 | Frecuencia de Observación |
| DUAL | AURA×2 | 7.995694619 | Dualidad |
| TRIAL | AURA×3 | 11.993541929 | Materia / Límite 3D |
| MIKAEL_V | PHI+PI+KRYSTOS | 14.278879926 | Soberanía / Integración 5D |
| BUFFER | MIKAEL_V-TRIAL | 2.285337996 | Reserva dimensional |

## Estructura de archivos

```
SSEE_UNIFICADO/
├── index.html          # Aplicación SPA completa (~4100 líneas)
├── ssee-data.json      # Todos los datos en JSON (legible por cualquier IA)
├── ssee_logo_compendio.jpg
├── README.md
├── LICENSE (MIT)
└── lib/
    ├── ssee.py         # Biblioteca Python
    ├── ssee.js         # Biblioteca ESM JavaScript
    └── ssee.ts         # Biblioteca TypeScript
```

## Biblioteca de código (lib/)

```python
# Python
from lib.ssee import PHI, KRYSTOS, identify, scale, table
identify(1.618)      # → 'PHI'
identify(9.52)       # → 'KRYSTOS'
scale(2, 'PHI')      # → 3.236
print(table())       # tabla completa
```

```js
// JavaScript ESM
import { PHI, identify, table } from './lib/ssee.js';
import SSEE from './lib/ssee.js'; // default export con todo
```

```ts
// TypeScript — con tipo ConstantName para autocompletado
import { PHI, identify, ConstantName } from './lib/ssee';
```

### Funciones disponibles
| Función | Descripción |
|---------|-------------|
| `constants()` | Devuelve todas las constantes como `{nombre: valor}` |
| `identify(value, tol=0.01)` | Nombre de la constante más cercana al valor dado |
| `proximity(value)` | Lista ordenada de constantes por cercanía al valor |
| `harmonize(value)` | Valor exacto de la constante SSEE más cercana |
| `ratio(a, b)` | Calcula a/b e identifica si coincide con una constante |
| `scale(value, name)` | Multiplica value por la constante indicada |
| `table(decimals=6)` | Tabla de texto con todas las constantes |

## Datos en JSON

Todos los datos están disponibles en:
- **Archivo local:** `ssee-data.json`
- **URL pública:** `https://mikealmeida1721.github.io/SSEE_UNIFICADO/ssee-data.json`

Cualquier IA puede leer este JSON para obtener constantes, fórmulas, secciones y la resolución de la Tensión de Hubble.

## Secciones del compendio

| # | Sección | Ecuación clave |
|---|---------|----------------|
| I | Cosmología | (MIKA+PI)×OMEGA = 67.96 ≈ H₀ Planck |
| II | Partículas | Protón=0.319, Neutrón=0.333, Electrón=0.349 |
| III | Óptica | AURA×0.1 = 0.400 μm |
| IV | Química | ADN: VITA/26 = 0.333192 |
| V | Medicina | Salud = π − β ≈ 0.761 |
| VI | Filosofía | BUFFER = MIKAEL_V − TRIAL = 2.285 |
| VII | Paz | IGNIS vs KRYSTOS — equilibrio caos/orden |
| VIII | Octava Materia | EVAV = Σ(5P+3N+1n) = 128.509 |

## Tensión de Hubble (resolución SSEE)

| Medición | Valor SSEE | Fórmula | Referencia |
|----------|-----------|---------|-----------|
| Global | 67.962 | (MIKA+PI)×OMEGA | 67.4 Planck |
| Histórico | 71.960 | H_global + AURA | 72.0 HST |
| Local | 73.483 | H_global + KAL | 73.5 Riess |

La diferencia no es un error — es la energía de retención local KAL = 5.52.

## Leyes estructurales SSEE

### Ley de No Auto-suma en Propiedades

Dos constantes pueden compartir el mismo valor numérico y aun así ser entidades distintas con funciones **opuestas**. El valor es el *medio de transporte*; la función es la *propiedad real*.

Ejemplo canónico:

| Constante | Valor | Función |
|-----------|-------|---------|
| IGNIS | 9.519253… | Forja / Caos — fuerza disruptiva |
| KRYSTOS | 9.519253… | Cristal / Orden — fuerza estructurante |

Misma magnitud, polaridad opuesta. En SSEE la identidad de una constante no está en su número sino en su **rol dentro del sistema**. Un valor igual no implica equivalencia funcional; implica que dos fuerzas opuestas están en equilibrio en ese punto.

> "La magnitud es una ilusión. La única constante es la relación."

Esta ley aplica a cualquier par de constantes que converjan numéricamente. La coincidencia numérica es información estructural, no redundancia.

### Jerarquía Dimensional (escala AURA)

AURA es la unidad base de los límites dimensionales. Toda la escala se deriva de ella:

| Constante | Fórmula | Dimensión |
|-----------|---------|-----------|
| MIRA | AURA / 2 | ½ — sub-umbral |
| AURA | PHI + BIAL | 1 — primer límite |
| DUAL | AURA × 2 | 2 — segundo límite |
| TRIAL | AURA × 3 | 3 — tercer límite |
| CUARTAL | AURA × 4 | 4 — cuarto límite |

## Rama de desarrollo

La rama activa de desarrollo es `main`.
