export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-[1170px] p-6">
            <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Nuestra Historia</h2>
                <p className="text-gray-700">
                    Fundada en 2024, nuestra empresa se ha dedicado a vender productos para nuestros clientes. 
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Misión</h2>
                <p className="text-gray-700">
                    Nuestra misión es ofrecer productos de alta calidad.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
                <p className="text-gray-700">
                    Si deseas saber más sobre nosotros o tienes alguna pregunta, no dudes en contactarnos a través de nuestro formulario de contacto.
                </p>
            </section>
        </div>
    );
}
