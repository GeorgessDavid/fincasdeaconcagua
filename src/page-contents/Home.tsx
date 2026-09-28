import { HeroSection, ParcelasSection, ConceptSection, BeneficiosSection, UbicacionSection, ContactoSection, GaleriaSection } from "@/components/HomeContents";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <div className="lg:hidden">
                <div className="flex justify-between items-center me-4">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold mx-4 mt-8 mb-2">Parcelas Disponibles</h1>
                        <div className="w-1/6 bg-primary h-[10px] mx-4 mb-4" />
                    </div>
                    <Link href="/#masterplan" className="text-primary font-bold text-2xl">↓</Link>
                </div>
                <Image width={1920} height={1080} alt="parcelas_iamge" src="/parcelas_image.png" />
            </div>
            <ParcelasSection />
            <ConceptSection />
            <BeneficiosSection />
            <GaleriaSection />
            <UbicacionSection />
            <ContactoSection />
        </div>
    );
}
