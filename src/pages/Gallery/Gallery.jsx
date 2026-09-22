import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    title: "Premium Sedan",
    category: "Vehicles",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Performance Car",
    category: "Vehicles",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Modern Manufacturing",
    category: "Factory",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Production Line",
    category: "Factory",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Automotive Design",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Luxury Interior",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  },
];

function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <p className="gallery-subtitle">OUR COLLECTION</p>

          <h1>Gallery</h1>

          <p className="gallery-description">
            Explore our vehicles, manufacturing facilities, and automotive
            craftsmanship.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-heading">
            <p className="section-label">OUR WORLD</p>

            <h2>Built With Precision</h2>

            <p>
              Take a closer look at our vehicles, technology, manufacturing
              process, and attention to detail.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <article className="gallery-card" key={item.id}>
                <div className="gallery-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                  />

                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;