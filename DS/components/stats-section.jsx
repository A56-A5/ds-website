import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      title: "Academic Excellence",
      stats: [
        { label: "Top-tier Faculty", value: "20+" },
        { label: "Industry Experts", value: "15+" },
        { label: "Research Publications", value: "50+" },
        { label: "Student Projects", value: "100+" },
      ],
      bgColor: "bg-slate-800",
    },
    {
      title: "Student Success",
      stats: [
        { label: "Placement Rate", value: "95%" },
        { label: "Average Package", value: "₹8 LPA" },
        { label: "Top Companies", value: "25+" },
        { label: "Higher Studies", value: "30%" },
      ],
      bgColor: "bg-cyan-700",
    },
    {
      title: "Global Reach",
      stats: [
        { label: "International Collaborations", value: "10+" },
        { label: "Exchange Programs", value: "5+" },
        { label: "Global Alumni Network", value: "500+" },
        { label: "Countries Represented", value: "15+" },
      ],
      bgColor: "bg-slate-700",
    },
    {
      title: "Innovation Hub",
      stats: [
        { label: "Research Labs", value: "8" },
        { label: "Startup Incubations", value: "12+" },
        { label: "Patents Filed", value: "25+" },
        { label: "Innovation Awards", value: "15+" },
      ],
      bgColor: "bg-cyan-800",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">DS-CCE by Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our achievements and milestones reflect our commitment to excellence in data science education and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((category, index) => (
            <Card
              key={index}
              className={`${category.bgColor} text-white hover:scale-105 transition-transform duration-300`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center">
                      <span className="text-sm opacity-90">{stat.label}</span>
                      <span className="text-lg font-bold text-cyan-300">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
