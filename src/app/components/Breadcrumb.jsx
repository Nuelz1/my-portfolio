'use client';

const Breadcrumb = ({ currentPage = "Home" }) => {
  const breadcrumbs = [
    { name: "Home", url: "#" },
    { name: currentPage, url: "#" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://devemmanuel.com${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 px-6 max-w-6xl mx-auto">
        <ol className="flex gap-2 text-slate-400">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <a href={item.url} className="hover:text-blue-400 transition">
                {item.name}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="text-slate-500">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;