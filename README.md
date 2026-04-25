# SSEE — Paper 4: Algebraic Derivation of CMB Background from φ and π

**Zero-free-parameter derivation of all CMB background observables from the golden ratio φ and π only.**

Versión: **Genesis 5.12** · Autor: Mike Edison Almeida Vallejo  
Zenodo DOI: [10.5281/zenodo.19679049](https://doi.org/10.5281/zenodo.19679049) (timestamped 2026-01-28, pre-DESI DR2)

---

## Contenido

| Archivo | Descripción |
|---|---|
| `SSEE_Paper4_ToE.tex` | Fuente LaTeX del Paper 4 (11 páginas) |
| `SSEE_Paper4.bib` | Referencias bibliográficas |
| `SSEE_Paper4_ToE.pdf` | PDF compilado |
| `index.html` | Compendio interactivo SSEE (Three.js / SPA) |
| `ssee-data.json` | Constantes y fórmulas en JSON (legible por IA) |
| `lib/` | Bibliotecas Python / JS / TypeScript |

---

## Resultados clave (Paper 4)

| Observable | SSEE algebraico | Planck 2018 | Tensión |
|---|---|---|---|
| n_s | 1 − φ⁻⁷ = 0.96556 | 0.9649 ± 0.0042 | 0.2σ |
| H₀ | 3(φ+π)² = 67.96 km/s/Mpc | 67.36 ± 0.54 | 1.1σ |
| Ωm | (π−φ)/(π+φ) = 0.3201 | 0.3153 ± 0.0073 | 0.66σ |
| Ωb h² | (π−φ)/[6(φ+π)⁴] = 0.02260 | 0.02237 ± 0.00015 | 1.5σ |
| **Ωc h² (IS)** | KAL₀ × Ωb h² × n_s = **0.11926** | 0.1200 ± 0.0012 | **−0.6σ** |
| δc (SSEE) | δc,EdS × n_s = **1.6284** | — | — |
| Y_p (BBN) | AlterBBN(Ωb h²=0.02260) = **0.2473** | 0.2449 ± 0.0040 | 0.7σ |

*Ωc h² resuelto por derivación Israel-Stewart (IS): KAL₀ × Ωb h² × n_s — reduce la tensión de 3.7σ (Eckart estático) a −0.6σ.*

---

## Constantes algebraicas

```
φ  = (1+√5)/2  ≈ 1.6180   β  = (π+φ)/2   ≈ 2.3798
KAL₀ = β+π    ≈ 5.5214   Tr = 3(φ+β)    ≈ 11.9935
Mv = φ+π+Kv   ≈ 14.2788

w₀ = −Tr/Mv ≈ −0.840    wₐ = −Psc/Kv ≈ −0.670
```

Todos los valores disponibles en [`ssee-data.json`](ssee-data.json) y en [mikealmeida1721.github.io/SSEE_UNIFICADO](https://mikealmeida1721.github.io/SSEE_UNIFICADO/).

---

> "La magnitud es una ilusión. La única constante es la relación."
