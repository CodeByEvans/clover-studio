// CategoryHeader.tsx
interface CategoryHeaderProps {
  category: {
    name: string;
    description: string;
    type: "sober" | "colorful";
  };
  totalProducts: number;
  colorScheme: "sober" | "colorful";
}

export default function CategoryHeader({
  category,
  totalProducts,
  colorScheme,
}: CategoryHeaderProps) {
  const getColorClasses = () => {
    switch (colorScheme) {
      case "sober":
        return {
          background: "bg-gradient-to-br from-gray-50 to-gray-100",
          title: "text-gray-900",
          subtitle: "text-gray-600",
          accent: "text-gray-700",
        };
      case "colorful":
        return {
          background: "bg-gradient-to-br from-gray-50 to-white",
          title: "text-gray-900",
          subtitle: "text-gray-600",
          accent: "text-gray-700",
        };
      default:
        return {
          background: "bg-gradient-to-br from-gray-50 to-white",
          title: "text-gray-900",
          subtitle: "text-gray-600",
          accent: "text-gray-700",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <section className={`${colors.background} py-16 relative`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Simple title */}
          <h1 className={`text-4xl md:text-6xl font-bold ${colors.title} mb-6`}>
            {category.name}
          </h1>

          {/* Simple description */}
          <p className={`text-lg ${colors.subtitle} mb-12 leading-relaxed`}>
            {category.description}
          </p>

          {/* Clean stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: totalProducts.toString(),
                label: "Productos",
              },
              {
                number: "100%",
                label: "Artesanal",
              },
              {
                number: "Único",
                label: "Cada Pieza",
              },
              {
                number: "Premium",
                label: "Calidad",
              },
            ].map((stat, index) => (
              <div key={index}>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
