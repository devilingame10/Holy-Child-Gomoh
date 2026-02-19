import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['all', 'events', 'sports', 'classrooms', 'campus'];

  const images = [
    { url: 'https://images.pexels.com/photos/3627486/pexels-photo-3627486.jpeg', category: 'campus', title: 'School Campus' },
    { url: 'https://images.pexels.com/photos/8199765/pexels-photo-8199765.jpeg', category: 'classrooms', title: 'Library' },
    { url: 'https://images.pexels.com/photos/8500413/pexels-photo-8500413.jpeg', category: 'classrooms', title: 'Smart Classroom' },
    { url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77', category: 'sports', title: 'Sports Day' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', category: 'events', title: 'Annual Function' },
    { url: 'https://images.unsplash.com/photo-1427504746383-796b2a796dcd', category: 'classrooms', title: 'Study Hall' },
    { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d', category: 'classrooms', title: 'Science Lab' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', category: 'classrooms', title: 'Computer Lab' },
    { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da', category: 'campus', title: 'Library Interior' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4', category: 'events', title: 'Workshop' },
    { url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc', category: 'sports', title: 'Basketball Court' },
    { url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b', category: 'events', title: 'Art Exhibition' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent" data-testid="gallery-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div className="text-sm font-medium tracking-wider uppercase text-primary mb-4">Our Campus</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Glimpses of life at Holy Child School Gomoh
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-slate-100" data-testid="gallery-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category}`}
                className={`px-6 py-2 rounded-full font-medium transition-all ${ 
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white" data-testid="gallery-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(image)}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox">
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}>
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={lightboxImage.url}
            alt={lightboxImage.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
