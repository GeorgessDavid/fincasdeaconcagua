'use client';
import MapaParcelas from "../MapaParcelas/MapaParcelas";

import { Reveal } from "../Reveal/Reveal";

export default function Parcelas() {
    return (
        <section className="px-12 relative my-16 w-full flex flex-col gap-8 xl:px-40 3xl:px-62 items-center" id="masterplan">
            <Reveal variant="fadeUp" delay={0.1}>
                <h2 className="text-4xl font-montserrat text-main-black font-extrabold">Masterplan</h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.3}>
                <p className="text-lg font-montserrat text-main-black/80 font-medium max-w-7xl tracking-wide ">
                    Conocé el masterplan de Fincas de Aconcagua y descubrí cómo se organizan sus sectores, calles y parcelas. Explorá el desarrollo para encontrar el espacio que mejor se adapte a tu proyecto de vida.
                </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.35}>
                <MapaParcelas />
                <span className="text-xs font-inter text-black/70 lg:hidden">Haz click en alguno de los sectores para ver más información.</span>
            </Reveal>
        </section>
    )
}
