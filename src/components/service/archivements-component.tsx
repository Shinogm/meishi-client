interface SectionProps {
  id: string;
  ref?: any;
}

export const ArchivementsComponent = ({ id, ref }: SectionProps) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-8 transition-opacity duration-700 text-black `}
      style={{ background: "linear-gradient(135deg, #e0f7fa, #80deea)" }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center rounded-lg bg-black/10 py-4 px-6 text-teal-800 shadow-lg">
          Logros Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-teal-700">
                Mejor Servicio al Cliente
              </h3>
            </div>
            <p className="text-lg">
              Reconocidos por nuestra **excelencia** en el servicio al cliente,
              brindando una **experiencia excepcional** y generando confianza.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-teal-700">
                Innovación Tecnológica
              </h3>
            </div>
            <p className="text-lg">
              Pioneros en la adopción de **nuevas tecnologías**, ofreciendo
              **soluciones innovadoras** que transforman negocios.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-teal-700">
                Crecimiento Sostenible
              </h3>
            </div>
            <p className="text-lg">
              Un **crecimiento sostenible** a lo largo de los años,
              consolidándonos como una **empresa sólida** y confiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
