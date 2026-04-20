"""
SSEE — Sistema de Especificación Energética y Estructural
Biblioteca de constantes irracionales unificadas.

Uso rápido:
    from ssee import PHI, BIAL, KRYSTOS, identify, table

Autor: Mike Almeida (SSEE) · Versión Genesis 5.12
"""

# ─── CONSTANTES BASE ────────────────────────────────────────────────────────

PHI: float = 1.618033988749895   # Intención / Razón áurea
PI:  float = 3.141592653589793   # Luz / π
OMEGA: float = 4.759626642       # Estabilidad · OMEGA_DNAV

# Alias explícito
OMEGA_DNAV = OMEGA

# ─── CONSTANTES DERIVADAS ────────────────────────────────────────────────────

BIAL:    float = (PHI + PI) / 2            # Pulso / Fricción Vital
KAL:     float = BIAL + PI                 # Retención / Anclaje Local
SOLAR:   float = BIAL + KAL               # Expansión Solar
MAR:     float = OMEGA + PI               # Marea
VITA:    float = PI + KAL                 # Biometría / Salud Matemática
ANMA:    float = BIAL + VITA              # Ánima
PYROS:   float = OMEGA + PHI             # Forja Base
# LEY DE NO AUTO-SUMA: IGNIS y KRYSTOS comparten valor numérico pero son opuestos funcionales.
# Misma magnitud = equilibrio entre Caos y Orden en ese punto. No son equivalentes.
IGNIS:   float = PI + PYROS              # Forja / Caos — fuerza disruptiva
KRYSTOS: float = PHI + PI + OMEGA        # Cristal / Orden — fuerza estructurante
PHITA:   float = VITA + PHI               # Belleza — VITA+PHI
MIKA:    float = KRYSTOS + PHI           # Límite de Luz 3D
AURA:    float = PHI + BIAL              # Límite Dimensional 1 — primer umbral
MIRA:    float = AURA / 2               # Límite Dimensional ½ — sub-umbral
DUAL:    float = AURA * 2               # Límite Dimensional 2 — segundo umbral
TRIAL:   float = AURA * 3               # Límite Dimensional 3 — tercer umbral
CUARTAL: float = AURA * 4               # Límite Dimensional 4 — cuarto umbral
MIKAEL_V: float = PHI + PI + KRYSTOS   # Soberanía / Integración 5D
BUFFER:  float = MIKAEL_V - TRIAL      # Reserva dimensional

# ─── LAS 9 SOBERANÍAS — todas convergen en MIKAEL_V = 14.278879927… ─────────
# Ley de No Auto-suma: mismo valor, fórmulas y funciones distintas.
KRYSTOS_V: float = 2 * OMEGA             # Cristal / Orden — 2×ΩDNAV
LUCY:      float = SOLAR + PYROS         # Irradiación
LUCIFER:   float = PHITA + AURA          # Estética
MIKE:      float = IGNIS + OMEGA         # Purificador
MIKAEL:    float = MIKA + PI             # Ley
ERVN:      float = BIAL + KAL + PYROS   # Ignición
ICEBERG:   float = MAR + PYROS           # Abismo
GIGÅROJ:   float = PYROS + OMEGA + PI   # Expansión
OSIRIS:    float = MIKA + KAL - BIAL    # Sincronía

# ─── ERVANÜ ─────────────────────────────────────────────────────────────────
ERVANU:    float = OMEGA * (9/10)        # Frecuencia Invariante — ΩDNAV×9/10

# ─── MAPA INTERNO ────────────────────────────────────────────────────────────

_CONSTANTS: dict[str, tuple[float, str]] = {
    "PHI":      (PHI,      "Intención / Razón áurea"),
    "PI":       (PI,       "Luz / π"),
    "OMEGA":    (OMEGA,    "Estabilidad · OMEGA_DNAV"),
    "BIAL":     (BIAL,     "Pulso / Fricción Vital"),
    "KAL":      (KAL,      "Retención / Anclaje Local"),
    "SOLAR":    (SOLAR,    "Expansión Solar"),
    "MAR":      (MAR,      "Marea"),
    "VITA":     (VITA,     "Biometría / Salud Matemática"),
    "ANMA":     (ANMA,     "Ánima"),
    "PYROS":    (PYROS,    "Forja Base"),
    "IGNIS":    (IGNIS,    "Forja / Fricción"),
    "KRYSTOS":  (KRYSTOS,  "Cristal / Virtud"),
    "PHITA":    (PHITA,    "Belleza"),
    "MIKA":     (MIKA,     "Límite de Luz 3D"),
    "AURA":     (AURA,     "Límite Dimensional 1 — primer umbral"),
    "MIRA":     (MIRA,     "Límite Dimensional ½ — sub-umbral"),
    "DUAL":     (DUAL,     "Límite Dimensional 2 — segundo umbral"),
    "TRIAL":    (TRIAL,    "Límite Dimensional 3 — tercer umbral"),
    "CUARTAL":  (CUARTAL,  "Límite Dimensional 4 — cuarto umbral"),
    "MIKAEL_V": (MIKAEL_V, "Soberanía / Integración 5D"),
    "BUFFER":   (BUFFER,   "Reserva dimensional"),
    "KRYSTOS_V": (KRYSTOS_V, "Cristal / Orden — 2×ΩDNAV"),
    "LUCY":     (LUCY,     "Irradiación — Soberanía"),
    "LUCIFER":  (LUCIFER,  "Estética — Soberanía"),
    "MIKE":     (MIKE,     "Purificador — Soberanía"),
    "MIKAEL":   (MIKAEL,   "Ley — Soberanía"),
    "ERVN":     (ERVN,     "Ignición — Soberanía"),
    "ICEBERG":  (ICEBERG,  "Abismo — Soberanía"),
    "GIGÅROJ":  (GIGÅROJ,  "Expansión — Soberanía"),
    "OSIRIS":   (OSIRIS,   "Sincronía — Soberanía"),
    "ERVANU":   (ERVANU,   "Frecuencia Invariante — ΩDNAV×9/10"),
}

# ─── FUNCIONES ───────────────────────────────────────────────────────────────

def constants() -> dict[str, float]:
    """Devuelve todas las constantes como {nombre: valor}."""
    return {k: v for k, (v, _) in _CONSTANTS.items()}


def identify(value: float, tolerance: float = 0.01) -> str | None:
    """
    Devuelve el nombre de la constante SSEE más cercana a *value*,
    o None si ninguna está dentro de la tolerancia.

    >>> identify(1.618)
    'PHI'
    >>> identify(9.52)
    'KRYSTOS'
    """
    closest_name = None
    closest_dist = float("inf")
    for name, (const_val, _) in _CONSTANTS.items():
        dist = abs(value - const_val)
        if dist < closest_dist:
            closest_dist = dist
            closest_name = name
    return closest_name if closest_dist <= tolerance else None


def proximity(value: float) -> list[tuple[str, float, float]]:
    """
    Devuelve todas las constantes ordenadas de más a menos cercana a *value*.
    Cada elemento es (nombre, valor_constante, distancia).

    >>> proximity(4.0)[0][0]
    'AURA'
    """
    result = [
        (name, const_val, abs(value - const_val))
        for name, (const_val, _) in _CONSTANTS.items()
    ]
    return sorted(result, key=lambda x: x[2])


def harmonize(value: float) -> float:
    """
    Devuelve el valor de la constante SSEE más cercana a *value*.

    >>> harmonize(3.14)
    3.141592653589793
    """
    closest = min(_CONSTANTS.values(), key=lambda x: abs(value - x[0]))
    return closest[0]


def ratio(a: float, b: float) -> dict:
    """
    Calcula a/b e identifica si el resultado coincide con una constante SSEE.

    >>> ratio(PHI, BIAL)['value']
    0.6798...
    """
    if b == 0:
        raise ValueError("b no puede ser cero")
    r = a / b
    name = identify(r, tolerance=0.05)
    return {"value": r, "ssee": name}


def scale(value: float, constant_name: str) -> float:
    """
    Multiplica *value* por la constante SSEE indicada por nombre.

    >>> scale(2.0, "PHI")
    3.23606797749979
    """
    name = constant_name.upper()
    if name not in _CONSTANTS:
        raise KeyError(f"Constante desconocida: '{constant_name}'. "
                       f"Disponibles: {list(_CONSTANTS)}")
    return value * _CONSTANTS[name][0]


def table(decimals: int = 6) -> str:
    """
    Devuelve una tabla de texto con todas las constantes SSEE.

    >>> print(table())
    """
    col_w = 10
    lines = [
        f"{'CONSTANTE':<10}  {'VALOR':>14}  DESCRIPCIÓN",
        "─" * 60,
    ]
    for name, (val, desc) in _CONSTANTS.items():
        lines.append(f"{name:<10}  {val:>{14}.{decimals}f}  {desc}")
    return "\n".join(lines)


# ─── CLI rápido ──────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print(table())
