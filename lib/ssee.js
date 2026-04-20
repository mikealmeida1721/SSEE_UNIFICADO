/**
 * SSEE — Sistema de Especificación Energética y Estructural
 * Biblioteca de constantes irracionales unificadas.
 *
 * @example
 * import { PHI, KRYSTOS, identify, table } from './ssee.js';
 * console.log(PHI);          // 1.618033988749895
 * console.log(identify(9.52)); // 'KRYSTOS'
 *
 * Autor: Mike Almeida (SSEE) · Versión Genesis 5.12
 */

// ─── CONSTANTES BASE ─────────────────────────────────────────────────────────

/** Intención / Razón áurea */
export const PHI = 1.618033988749895;

/** Luz / π */
export const PI = 3.141592653589793;

/** Estabilidad · OMEGA_DNAV */
export const OMEGA = 4.759626642;

/** Alias explícito */
export const OMEGA_DNAV = OMEGA;

// ─── CONSTANTES DERIVADAS ────────────────────────────────────────────────────

/** Pulso / Fricción Vital */
export const BIAL = (PHI + PI) / 2;

/** Retención / Anclaje Local */
export const KAL = BIAL + PI;

/** Expansión Solar */
export const SOLAR = BIAL + KAL;

/** Marea */
export const MAR = OMEGA + PI;

/** Biometría / Salud Matemática */
export const VITA = PI + KAL;

/** Ánima */
export const ANMA = BIAL + VITA;

/** Forja Base */
export const PYROS = OMEGA + PHI;

// LEY DE NO AUTO-SUMA: IGNIS y KRYSTOS comparten valor numérico pero son opuestos funcionales.
// Misma magnitud = equilibrio entre Caos y Orden. No son equivalentes.
/** Forja / Caos — fuerza disruptiva */
export const IGNIS = PI + PYROS;

/** Cristal / Orden — fuerza estructurante */
export const KRYSTOS = PHI + PI + OMEGA;

/** Belleza — VITA+PHI */
export const PHITA = VITA + PHI;

/** Límite de Luz 3D */
export const MIKA = KRYSTOS + PHI;

/** Límite Dimensional 1 — primer umbral */
export const AURA = PHI + BIAL;

/** Límite Dimensional ½ — sub-umbral */
export const MIRA = AURA / 2;

/** Límite Dimensional 2 — segundo umbral */
export const DUAL = AURA * 2;

/** Límite Dimensional 3 — tercer umbral */
export const TRIAL = AURA * 3;

/** Límite Dimensional 4 — cuarto umbral */
export const CUARTAL = AURA * 4;

/** Soberanía / Integración 5D */
export const MIKAEL_V = PHI + PI + KRYSTOS;

/** Reserva dimensional */
export const BUFFER = MIKAEL_V - TRIAL;

// ─── LAS 9 SOBERANÍAS — convergen en MIKAEL_V = 14.278879927… ───────────────
// Ley de No Auto-suma: mismo valor, fórmulas y funciones distintas.
/** Cristal / Orden — 2×ΩDNAV */
export const KRYSTOS_V = 2 * OMEGA;
/** Irradiación */
export const LUCY = SOLAR + PYROS;
/** Estética */
export const LUCIFER = PHITA + AURA;
/** Purificador */
export const MIKE = IGNIS + OMEGA;
/** Ley */
export const MIKAEL = MIKA + PI;
/** Ignición */
export const ERVN = BIAL + KAL + PYROS;
/** Abismo */
export const ICEBERG = MAR + PYROS;
/** Expansión */
export const GIGÅROJ = PYROS + OMEGA + PI;
/** Sincronía */
export const OSIRIS = MIKA + KAL - BIAL;

/** Frecuencia Invariante — ΩDNAV×9/10 */
export const ERVANU = OMEGA * (9/10);

// ─── MAPA INTERNO ────────────────────────────────────────────────────────────

/** @type {Record<string, { value: number, description: string }>} */
const _CONSTANTS = {
  PHI:      { value: PHI,      description: "Intención / Razón áurea" },
  PI:       { value: PI,       description: "Luz / π" },
  OMEGA:    { value: OMEGA,    description: "Estabilidad · OMEGA_DNAV" },
  BIAL:     { value: BIAL,     description: "Pulso / Fricción Vital" },
  KAL:      { value: KAL,      description: "Retención / Anclaje Local" },
  SOLAR:    { value: SOLAR,    description: "Expansión Solar" },
  MAR:      { value: MAR,      description: "Marea" },
  VITA:     { value: VITA,     description: "Biometría / Salud Matemática" },
  ANMA:     { value: ANMA,     description: "Ánima" },
  PYROS:    { value: PYROS,    description: "Forja Base" },
  IGNIS:    { value: IGNIS,    description: "Forja / Fricción" },
  KRYSTOS:  { value: KRYSTOS,  description: "Cristal / Virtud" },
  PHITA:    { value: PHITA,    description: "Belleza" },
  MIKA:     { value: MIKA,     description: "Límite de Luz 3D" },
  AURA:     { value: AURA,     description: "Límite Dimensional 1 — primer umbral" },
  MIRA:     { value: MIRA,     description: "Límite Dimensional ½ — sub-umbral" },
  DUAL:     { value: DUAL,     description: "Límite Dimensional 2 — segundo umbral" },
  TRIAL:    { value: TRIAL,    description: "Límite Dimensional 3 — tercer umbral" },
  CUARTAL:  { value: CUARTAL,  description: "Límite Dimensional 4 — cuarto umbral" },
  MIKAEL_V: { value: MIKAEL_V, description: "Soberanía / Integración 5D" },
  BUFFER:    { value: BUFFER,    description: "Reserva dimensional" },
  KRYSTOS_V: { value: KRYSTOS_V, description: "Cristal / Orden — 2×ΩDNAV" },
  LUCY:      { value: LUCY,      description: "Irradiación — Soberanía" },
  LUCIFER:   { value: LUCIFER,   description: "Estética — Soberanía" },
  MIKE:      { value: MIKE,      description: "Purificador — Soberanía" },
  MIKAEL:    { value: MIKAEL,    description: "Ley — Soberanía" },
  ERVN:      { value: ERVN,      description: "Ignición — Soberanía" },
  ICEBERG:   { value: ICEBERG,   description: "Abismo — Soberanía" },
  GIGÅROJ:   { value: GIGÅROJ,   description: "Expansión — Soberanía" },
  OSIRIS:    { value: OSIRIS,    description: "Sincronía — Soberanía" },
  ERVANU:    { value: ERVANU,    description: "Frecuencia Invariante — ΩDNAV×9/10" },
};

// ─── FUNCIONES ───────────────────────────────────────────────────────────────

/**
 * Devuelve todas las constantes como objeto { nombre: valor }.
 * @returns {Record<string, number>}
 */
export function constants() {
  return Object.fromEntries(
    Object.entries(_CONSTANTS).map(([k, { value }]) => [k, value])
  );
}

/**
 * Devuelve el nombre de la constante SSEE más cercana a `value`,
 * o `null` si ninguna está dentro de la tolerancia.
 *
 * @param {number} value
 * @param {number} [tolerance=0.01]
 * @returns {string|null}
 *
 * @example
 * identify(1.618)  // 'PHI'
 * identify(9.52)   // 'KRYSTOS'
 */
export function identify(value, tolerance = 0.01) {
  let closestName = null;
  let closestDist = Infinity;
  for (const [name, { value: cv }] of Object.entries(_CONSTANTS)) {
    const dist = Math.abs(value - cv);
    if (dist < closestDist) {
      closestDist = dist;
      closestName = name;
    }
  }
  return closestDist <= tolerance ? closestName : null;
}

/**
 * Devuelve todas las constantes ordenadas de más a menos cercana a `value`.
 * Cada elemento es `{ name, value, distance }`.
 *
 * @param {number} value
 * @returns {{ name: string, value: number, distance: number }[]}
 *
 * @example
 * proximity(4.0)[0].name  // 'AURA'
 */
export function proximity(value) {
  return Object.entries(_CONSTANTS)
    .map(([name, { value: cv }]) => ({
      name,
      value: cv,
      distance: Math.abs(value - cv),
    }))
    .sort((a, b) => a.distance - b.distance);
}

/**
 * Devuelve el valor de la constante SSEE más cercana a `value`.
 *
 * @param {number} value
 * @returns {number}
 *
 * @example
 * harmonize(3.14)  // 3.141592653589793
 */
export function harmonize(value) {
  return proximity(value)[0].value;
}

/**
 * Calcula `a / b` e identifica si el resultado coincide con una constante SSEE.
 *
 * @param {number} a
 * @param {number} b
 * @returns {{ value: number, ssee: string|null }}
 *
 * @example
 * ratio(KRYSTOS, PI)  // { value: 3.029..., ssee: 'PI' }
 */
export function ratio(a, b) {
  if (b === 0) throw new Error("b no puede ser cero");
  const r = a / b;
  return { value: r, ssee: identify(r, 0.05) };
}

/**
 * Multiplica `value` por la constante SSEE indicada por nombre.
 *
 * @param {number} value
 * @param {string} constantName
 * @returns {number}
 *
 * @example
 * scale(2, 'PHI')  // 3.23606797749979
 */
export function scale(value, constantName) {
  const entry = _CONSTANTS[constantName.toUpperCase()];
  if (!entry) {
    throw new Error(
      `Constante desconocida: '${constantName}'. Disponibles: ${Object.keys(_CONSTANTS).join(", ")}`
    );
  }
  return value * entry.value;
}

/**
 * Devuelve una tabla de texto con todas las constantes SSEE.
 *
 * @param {number} [decimals=6]
 * @returns {string}
 *
 * @example
 * console.log(table());
 */
export function table(decimals = 6) {
  const header = `${"CONSTANTE".padEnd(10)}  ${"VALOR".padStart(14)}  DESCRIPCIÓN`;
  const sep = "─".repeat(60);
  const rows = Object.entries(_CONSTANTS).map(([name, { value, description }]) =>
    `${name.padEnd(10)}  ${value.toFixed(decimals).padStart(14)}  ${description}`
  );
  return [header, sep, ...rows].join("\n");
}

// ─── Objeto agrupado (alternativa a imports individuales) ────────────────────

/**
 * Todas las constantes y funciones en un solo objeto.
 * Útil cuando no se puede usar ESM tree-shaking.
 *
 * @example
 * import SSEE from './ssee.js';
 * SSEE.PHI          // 1.618...
 * SSEE.identify(9.5) // 'KRYSTOS'
 */
export default {
  PHI, PI, OMEGA, OMEGA_DNAV,
  BIAL, KAL, SOLAR, MAR, VITA, ANMA,
  PYROS, IGNIS, KRYSTOS, PHITA, MIKA,
  AURA, MIRA, DUAL, TRIAL, CUARTAL, MIKAEL_V, BUFFER,
  KRYSTOS_V, LUCY, LUCIFER, MIKE, MIKAEL, ERVN, ICEBERG, GIGÅROJ, OSIRIS, ERVANU,
  constants, identify, proximity, harmonize, ratio, scale, table,
};
