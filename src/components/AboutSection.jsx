export default function AboutSection() {
  return (
    <section className="section-gap-bottom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-green-border)] bg-[var(--color-black)]">
        <div
          className="about-history-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-rustibo-team.png')" }}
          aria-hidden="true"
        />
        <div
          className="about-history-bg about-history-bg-alt absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-rustibo-kitchen.png')" }}
          aria-hidden="true"
        />
        <div className="relative min-h-[286px]">
          <div className="flex min-h-[286px] max-w-[520px] flex-col justify-center px-7 py-10 sm:px-9 sm:py-12 lg:px-10">
            <h2 className="text-4xl uppercase leading-none text-[var(--color-white)] md:text-5xl">
              Nuestro Equipo
            </h2>

            <div className="mt-5 max-w-2xl space-y-3 text-xs font-normal leading-snug text-[var(--color-lime)] sm:text-sm lg:text-[15px]">
              <p>
                Rustibó nace en el 2007 con tan solo dos empleados. Gracias a la buena acogida, durante este tiempo nuestro negocio fue en aumento, lo que nos permitió aumentar el número de referencias de nuestra carta.
              </p>

              <p>
                Hoy en día nuestra plantilla está conformada por 14 empleados que trabajan en las distintas secciones de nuestra empresa.
              </p>

              <p>
                Rustibó te ofrece una amplia gama de platos de diferentes cocinas en la que predomina siempre la mediterránea. En la elaboración utilizamos productos frescos, aspecto que nos distingue de la competencia.
              </p>

              <p>
                Te invitamos a que pruebes nuestra cocina.
              </p>

              <p className="text-base sm:text-lg">
                ¡No te arrepentirás!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
