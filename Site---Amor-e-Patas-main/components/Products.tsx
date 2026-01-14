
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ração Premium para Cães',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Brinquedo Interativo',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400',
    tag: 'Novo'
  },
  {
    id: 3,
    name: 'Cama Ortopédica G',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1591768793355-74d7af236c1f?auto=format&fit=crop&q=80&w=400',
    tag: 'Mais Vendido'
  },
  {
    id: 4,
    name: 'Kit Higiene Premium',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400',
    tag: '-15%'
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Nossa Loja</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">Produtos Essenciais</h3>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            Ver Todo o Catálogo →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white text-gray-400 hover:text-primary transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2 truncate">{product.name}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-primary font-extrabold text-xl">R$ {product.price.toFixed(2)}</p>
                  <button className="bg-gray-900 text-white p-2 rounded-xl hover:bg-primary transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
