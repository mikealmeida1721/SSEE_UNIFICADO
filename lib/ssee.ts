/**
 * SSEE — Sistema de Especificación Energética y Estructural
 * Biblioteca de constantes irracionales unificadas (TypeScript).
 *
 * @example
 * import { PHI, KRYSTOS, identify, table } from './ssee';
 * const phi: number = PHI;          // 1.618033988749895
 * identify(9.52);                   // 'KRYSTOS'
 *
 * Autor: Mike Almeida (SSEE) · Versión Genesis 5.12
 */

// ─── TIPOS ────────────────────────────────────────────────────────────────────

export type ConstantName =
  | "PHI" | "PI" | "OMEGA" | "OMEGA_DNAV"
  | "BIAL" | "KAL" | "SOLAR" | "MAR" | "VITA" | "ANMA"
  | "PYROS" | "IGNIS" | "KRYSTOS" | "PHITA" | "MIKA"
  | "AURA" | "MIRA" | "DUAL" | "TRIAL" | "CUARTAL" | "MIKAEL_V" | "BUFFER";

export interface ConstantEntry {
  value: number;
  description: string;
}

export interface RatioResult {
  value: number;
  ssee: ConstantName | null;
}

export interface ProximityResult {
  name: ConstantName;
  value: number;
  distance: number;
}

// ─── CONSTANTES BASE ─────────────────────────────────────────────────────────

/** Intención / Razón áurea */
export const PHI: number = 1.618033988749895;

/** Luz / π */
export const PI: number = 3.141592653589793;

/** Estabilidad · OMEGA_DNAV */
export const OMEGA: number = 4.759626642;

/** Alias explícito */
export const OMEGA_DNAV: number = OMEGA;

// ─── CONSTANTES DERIVADAS ────────────────────────────────────────────────────

/** Pulso / Fricción Vital */
export const BIAL: number = (PHI + PI) / 2;

/** Retención / Anclaje Local */
export const KAL: number = BIAL + PI;

/** Expansión Solar */
export const SOLAR: number = BIAL + KAL;

/** Marea */
export const MAR: number = OMEGA + PI;

/** Biometría / Salud Matemática */
export const VITA: number = PI + KAL;

/** Ánima */
export const ANMA: number = BIAL + VITA;

/** Forja Base */
export const PYROS: number = OMEGA + PHI;

/** Forja / Fricción (π + PYROS) */
export const IGNIS: number = PI + PYROS;

/** Cristal / Virtud */
export const KRYSTOS: number = PHI + PI + OMEGA;

/** Belleza (fijo en SSEE) */
export const PHITA: number = 10.281;

/** Límite de Luz 3D */
export const MIKA: number = KRYSTOS + PHI;

/** Límite Dimensional 1 — primer umbral */
export const AURA: number = PHI + BIAL;

/** Límite Dimensional ½ — sub-umbral */
export const MIRA: number = AURA / 2;

/** Límite Dimensional 2 — segundo umbral */
export const DUAL: number = AURA * 2;

/** Límite Dimensional 3 — tercer umbral */
export const TRIAL: number = AURA * 3;

/** Límite Dimensional 4 — cuarto umbral */
export const CUARTAL: number = AURA * 4;

/** Soberanía / Integración 5D */
export const MIKAEL_V: number = PHI + PI + KRYSTOS;

/** Reserva dimensional */
export const BUFFER: number = MIKAEL_V - TRIAL;

// ─── MAPA INTERNO ────────────────────────────────────────────────────────────

const _CONSTANTS: Record<ConstantName, ConstantEntry> = {
  PHI:      { value: PHI,      description: "Intención / Razón áurea" },
  PI:       { value: PI,       description: "Luz / π" },
  OMEGA:    { value: OMEGA,    description: "Estabilidad · OMEGA_DNAV" },
  OMEGA_DNAV: { value: OMEGA_DNAV, description: "Estabilidad · OMEGA_DNAV (alias)" },
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
  BUFFER:   { value: BUFFER,   description: "Reserva dimensional" },
};

// ─── FUNCIONES ───────────────────────────────────────────────────────────────

/**
 * Devuelve todas las constantes como objeto `{ nombre: valor }`.
 */
export function constants(): Record<ConstantName, number> {
  return Object.fromEntries(
    Object.entries(_CONSTANTS).map(([k, { value }]) => [k, value])
  ) as Record<ConstantName, number>;
}

/**
 * Devuelve el nombre de la constante SSEE más cercana a `value`,
 * o `null` si ninguna está dentro de la tolerancia.
 *
 * @example
 * identify(1.618)  // 'PHI'
 * identify(9.52)   // 'KRYSTOS'
 */
export function identify(value: number, tolerance = 0.01): ConstantName | null {
  let closestName: ConstantName | null = null;
  let closestDist = Infinity;
  for (const [name, { value: cv }] of Object.entries(_CONSTANTS) as [ConstantName, ConstantEntry][]) {
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
 *
 * @example
 * proximity(4.0)[0].name  // 'AURA'
 */
export function proximity(value: number): ProximityResult[] {
  return (Object.entries(_CONSTANTS) as [ConstantName, ConstantEntry][])
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
 * @example
 * harmonize(3.14)  // 3.141592653589793
 */
export function harmonize(value: number): number {
  return proximity(value)[0].value;
}

/**
 * Calcula `a / b` e identifica si el resultado coincide con una constante SSEE.
 *
 * @example
 * ratio(KRYSTOS, PI)  // { value: 3.029..., ssee: 'PI' }
 */
export function ratio(a: number, b: number): RatioResult {
  if (b === 0) throw new Error("b no puede ser cero");
  const r = a / b;
  return { value: r, ssee: identify(r, 0.05) };
}

/**
 * Multiplica `value` por la constante SSEE indicada por nombre.
 *
 * @example
 * scale(2, 'PHI')  // 3.23606797749979
 */
export function scale(value: number, constantName: ConstantName | string): number {
  const entry = _CONSTANTS[constantName.toUpperCase() as ConstantName];
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
 * @example
 * console.log(table());
 */
export function table(decimals = 6): string {
  const header = `${"CONSTANTE".padEnd(10)}  ${"VALOR".padStart(14)}  DESCRIPCIÓN`;
  const sep = "─".repeat(60);
  const rows = (Object.entries(_CONSTANTS) as [ConstantName, ConstantEntry][]).map(
    ([name, { value, description }]) =>
      `${name.padEnd(10)}  ${value.toFixed(decimals).padStart(14)}  ${description}`
  );
  return [header, sep, ...rows].join("\n");
}

// ─── Objeto agrupado (default export) ────────────────────────────────────────

/**
 * Todas las constantes y funciones en un solo objeto.
 *
 * @example
 * import SSEE from './ssee';
 * SSEE.PHI           // 1.618...
 * SSEE.identify(9.5) // 'KRYSTOS'
 */
const SSEE = {
  PHI, PI, OMEGA, OMEGA_DNAV,
  BIAL, KAL, SOLAR, MAR, VITA, ANMA,
  PYROS, IGNIS, KRYSTOS, PHITA, MIKA,
  AURA, MIRA, DUAL, TRIAL, MIKAEL_V, BUFFER,
  constants, identify, proximity, harmonize, ratio, scale, table,
} as const;

export default SSEE;
