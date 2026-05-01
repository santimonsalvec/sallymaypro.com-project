# Prompt de Desarrollo: Landing Single Scroll Inmersiva (Micropigmentación y Formación)

## Rol
Actúa como un Desarrollador Senior Frontend especializado en UI/UX premium para marcas de belleza de alta gama.

## Registro de Diseño
Este proyecto es de tipo brand (landing de comunicación y posicionamiento). Diseña para impacto visual, recordación de marca y narrativa, no para apariencia de plantilla genérica.

## Dirección Creativa (Argumento: tech)
- Escena de uso: una potencial alumna evalúa la formación desde su laptop por la noche, en un entorno de baja luz, buscando precisión técnica y resultados profesionales.
- Lane visual: tech-luxury clínico (sofisticado, preciso, limpio), evitando estética de dashboard.
- Estrategia de color: Committed, con base de neutros fríos entintados y un acento dorado-tecnológico aplicado de forma deliberada.
- El efecto glass debe sentirse funcional para separar capas sobre el video, no decorativo excesivo.

## Objetivo
Crear un sitio web tipo single scroll page, full screen, donde cada sección ocupe el alto completo de la pantalla y el contenido vaya cambiando a medida que el usuario hace scroll.

La experiencia debe sentirse inmersiva, elegante y moderna:
- Fondo global con video en reproducción continua.
- Capa de contenido por encima con bloques estilo glassmorphism (transparencia + blur tipo Apple).
- Enfoque visual en lujo, limpieza, precisión y confianza.
- El fondo debe usar el recurso brows-transition.mp4 y su reproducción debe sincronizarse con el scroll para crear una narrativa visual progresiva.
- Evitar resultados visuales genéricos o de plantilla SaaS.

## Stack Tecnológico
- HTML5
- Tailwind CSS (vía CDN)
- JavaScript moderno (ES6+) para interacciones básicas

## Requisitos de Interacción y Layout
1. Single page con desplazamiento vertical por secciones.
2. Cada sección debe ocupar mínimo 100vh (pantalla completa).
3. Usar scroll-snap para transiciones suaves entre bloques.
4. Fondo de video fijo y cubriendo todo el viewport (object-cover).
5. Overlay oscuro sutil sobre el video para legibilidad del texto.
6. Todos los bloques de contenido deben usar efecto glass:
    - Fondo semitransparente (ejemplo: blanco al 10-20%).
    - backdrop-blur.
    - Borde fino translúcido.
    - Sombra suave y elegante.
7. Diseño 100% responsive (desktop, tablet y mobile).
8. Sincronizar scroll y reproducción del video de fondo: el progreso del video debe ser proporcional al avance vertical del usuario en la página.
9. El video o secuencia visual debe quedar centrado y correctamente encuadrado detrás del contenido, manteniendo protagonismo sin afectar legibilidad.
10. Evitar una grilla repetitiva de tarjetas idénticas en toda la página. Mantener variedad compositiva entre secciones (alineación, ancho, jerarquía, ritmo de espacios).

## Requisitos Técnicos de Animación Scroll-Video
- Usar brows-transition.mp4 como fuente principal para la animación de fondo.
- Implementar un efecto de tipo scroll-reveal o enfoque equivalente de scroll controlado.
- Sincronización obligatoria: mapear scrollProgress (0 a 1) con currentTime del video.
- Implementar sincronización con requestAnimationFrame para suavizar updates y evitar jank.
- Limitar escrituras al DOM por frame y evitar cálculos costosos dentro del listener de scroll.
- Fallback de rendimiento para dispositivos lentos o video pesado:
   - Extraer fotogramas optimizados en JPEG.
   - Vincular la visualización de cada frame a la posición de scroll.
   - Priorizar fluidez y evitar saltos o lag perceptible.
- Precarga de activos:
   - Precargar metadata del video y recursos críticos.
   - Si se usa secuencia de frames, cargar de forma anticipada un bloque inicial y continuar con carga progresiva.
- Suavidad visual:
   - Evitar parpadeos entre frames.
   - Mantener transición continua y estable durante todo el recorrido.
- Degradación elegante:
   - Si el navegador no soporta una técnica avanzada, mantener fondo de video estándar y experiencia usable.

## Arquitectura Técnica Sugerida
- Contenedor principal con scroll-snap-type: y mandatory.
- Secciones con min-height: 100svh para mejorar comportamiento en mobile.
- Capa de video fija en z-index inferior.
- Capa de overlay para contraste.
- Capa de contenido en z-index superior con bloques glass.
- Inicializar lógica de sincronización una vez el video dispare loadedmetadata.
- Incluir flags de configuración al inicio del script (usarVideo, usarFramesFallback, totalFrames, framePathPattern).

## Secciones Obligatorias (en este orden)
1. Perfil del profesional 1 con foto.
2. Perfil del profesional 2 con foto.
3. Card del curso online: "De 0 a experto en Pigmentología" con botón de enlace.
4. Card del curso online: "Método MAY-BROWS 1 año de acceso" con botón de enlace.
5. Card del curso presencial: "Curso presencial Medellín" con botón de enlace.
6. Card del curso online: "Método MAY-LIPS (Neutralización full color) 1 año de acceso" con botón de enlace.
7. Card del curso online: "Diseño de cejas pro a mano alzada 6 meses de acceso" con botón de enlace.
8. Sección final con botones de redes: WhatsApp, Instagram y TikTok.

## Lineamientos Visuales
- Estética: minimalista, sofisticada, editorial y premium.
- Fondo: video protagonista, sin competir con el contenido.
- Componentes: bloques de contenido elegantes con ritmo y jerarquía; no repetir siempre el mismo módulo visual.
- Tipografía sugerida (evitar combinaciones excesivamente comunes):
   - Opción A: Prata (títulos) + Manrope (texto).
   - Opción B: Bodoni Moda (títulos) + Plus Jakarta Sans (texto).
   - Opción C: Cormorant Infant (títulos) + Sora (texto).
- Paleta sugerida:
   - Blanco translúcido, nude suave, gris humo.
   - Acento dorado suave para CTAs y detalles.
- Definir tokens de color en variables CSS (roles: bg-overlay, glass-fill, glass-stroke, text-primary, text-muted, accent).
- Usar valores en OKLCH para tokens principales y evitar negros/blancos puros.

## Contenido y Copy
- Redactar copy profesional, breve y persuasivo para cada perfil y curso.
- Cada card de curso debe incluir:
   - Título del curso.
   - Breve descripción de valor.
   - Etiqueta de modalidad (Online o Presencial).
   - Botón principal: "Ver Curso".
- En redes usar CTAs claros:
   - "Escríbenos por WhatsApp"
   - "Síguenos en Instagram"
   - "Mira nuestro TikTok"

## Criterios de Calidad (No Negociables)
- No usar texto con gradiente.
- No usar acentos visuales tipo franja lateral gruesa en tarjetas.
- No usar una estética de dashboard o métricas estilo SaaS.
- No sacrificar legibilidad por efecto visual.
- Mantener consistencia de tono premium en todo el copy.
- Evitar iconografía o UI que parezca plantilla genérica de startup.

## Accesibilidad y UX
- Contraste suficiente para lectura sobre video.
- Focus visible en botones y enlaces.
- Alt descriptivo en imágenes de perfiles.
- Respeto de prefers-reduced-motion para reducir animaciones.
- Si prefers-reduced-motion está activo, desactivar sincronización intensiva y mostrar una versión estática o reproducción mínima no intrusiva.

## Entregable
Genera el código completo en un único archivo HTML listo para ejecutar en navegador, incluyendo:
- Estructura HTML semántica.
- Estilos con Tailwind.
- JavaScript necesario para interacción mínima (si aplica).
- Lógica de sincronización scroll-video.
- Estrategia fallback por secuencia de frames (con comentarios claros para activarla o ajustarla).
- Precarga/optimización básica para asegurar experiencia fluida.
- Placeholders claros para:
   - URL del video de fondo.
   - Ruta de brows-transition.mp4.
   - Ruta base de frames JPEG optimizados (opcional fallback).
   - Fotos de los 2 profesionales.
   - Enlaces de cada curso.
   - Enlaces de WhatsApp, Instagram y TikTok.

## Criterios de Aceptación
1. El sitio se renderiza correctamente en desktop y mobile sin romper layout.
2. El video de fondo permanece presente durante todo el scroll.
3. El progreso visual del fondo cambia de forma proporcional al desplazamiento.
4. Si el rendimiento cae, el fallback por frames puede activarse sin reescribir la arquitectura.
5. Las 8 secciones obligatorias existen en el orden exacto solicitado.
6. Todos los botones de cursos y redes tienen placeholders de enlace listos para reemplazo.

## Modo Producción Estricto (Obligatorio)
Antes de entregar el resultado, valida internamente todos estos puntos. Si alguno no se cumple, corrige y vuelve a validar.

### Checklist QA de Layout
- Confirmar que existe una sola página y navegación por scroll vertical.
- Confirmar que cada sección principal ocupa al menos 100vh o 100svh.
- Confirmar que el orden de las 8 secciones obligatorias es exacto.
- Confirmar que no hay bloques fuera de la narrativa principal.

### Checklist QA de Scroll-Video
- Confirmar que brows-transition.mp4 está conectado como fondo global.
- Confirmar que scrollProgress se calcula en rango 0 a 1 sin valores fuera de rango.
- Confirmar que currentTime del video se actualiza de forma proporcional al scroll.
- Confirmar que la sincronización se ejecuta con requestAnimationFrame.
- Confirmar que el sistema funciona aunque el usuario haga scroll rápido.

### Checklist QA de Rendimiento
- Confirmar throttling lógico de actualizaciones para evitar jank.
- Confirmar que no hay lecturas/escrituras de layout innecesarias por frame.
- Confirmar precarga de recursos críticos (video y/o primer bloque de frames).
- Confirmar fallback por frames JPEG documentado y configurable.

### Checklist QA de Estilo y Marca
- Confirmar que el resultado no parece dashboard ni plantilla SaaS.
- Confirmar que el glass se usa como capa funcional de legibilidad.
- Confirmar jerarquía tipográfica clara en todas las secciones.
- Confirmar uso de tokens de color y ausencia de blanco/negro puros.
- Confirmar consistencia del tono premium-tech en copy y UI.

### Checklist QA de Accesibilidad
- Confirmar contraste legible sobre el video en todo momento.
- Confirmar focus visible y navegable por teclado en enlaces/botones.
- Confirmar alt descriptivos en las fotos de perfiles.
- Confirmar soporte de prefers-reduced-motion con comportamiento alterno.

### Checklist QA Responsive
- Confirmar layout correcto en mobile (~390px), tablet (~768px) y desktop (>=1280px).
- Confirmar que textos no se salen del contenedor ni se superponen.
- Confirmar que botones mantienen tamaño táctil adecuado en mobile.

## Formato de Entrega de la Respuesta
1. Entregar únicamente el código completo en un único bloque HTML.
2. Incluir comentarios breves solo en zonas críticas (sin sobrecomentar).
3. Al final del archivo, incluir una sección de configuración rápida con placeholders editables:
   - VIDEO_SRC
   - FRAME_PATH_PATTERN
   - TOTAL_FRAMES
   - PROFILE_1_IMAGE y PROFILE_2_IMAGE
   - COURSE_LINK_1 a COURSE_LINK_5
   - WHATSAPP_URL, INSTAGRAM_URL, TIKTOK_URL
4. No entregar explicaciones largas fuera del código.