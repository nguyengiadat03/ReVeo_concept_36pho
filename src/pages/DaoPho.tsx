import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import AppShell from '../layout/AppShell';
import PhoCard from '../components/pho/PhoCard';
import { streets } from '../data/streets';
import { useI18n } from '../app/providers/I18nProvider';

// Mock product data
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  phoId: string;
}

const mockProducts: Product[] = [
  { id: 'p1', name: 'Áo thun nam basic', price: '199.000đ', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', phoId: 'pho-thoi-trang' },
  { id: 'p2', name: 'Quần jean nữ', price: '399.000đ', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', phoId: 'pho-thoi-trang' },
  { id: 'p3', name: 'Giày sneaker', price: '599.000đ', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', phoId: 'pho-thoi-trang' },
  { id: 'p4', name: 'Serum vitamin C', price: '299.000đ', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', phoId: 'pho-my-pham' },
  { id: 'p5', name: 'Son môi matte', price: '159.000đ', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', phoId: 'pho-my-pham' },
  { id: 'p6', name: 'Kem dưỡng da', price: '249.000đ', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400', phoId: 'pho-my-pham' },
];

const DaoPho = () => {
  const navigate = useNavigate();
  const { phoId } = useParams();
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');

  const selectedPho = phoId ? streets.find(s => s.id === phoId) : null;
  const products = selectedPho ? mockProducts.filter(p => p.phoId === phoId) : [];

  const handleSelectProduct = (product: Product) => {
    // For now, navigate to old street workspace
    // TODO: Update to new Xưởng routes when ready
    navigate(`/streets/${product.phoId}`);
  };

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          {selectedPho && (
            <button
              onClick={() => navigate('/dao-pho')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">{t('back-to-pho')}</span>
            </button>
          )}

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {selectedPho ? (
                <>
                  {t('products-in')} <span className="text-gradient">{selectedPho.name}</span>
                </>
              ) : (
                t('explore-title')
              )}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              {selectedPho ? selectedPho.description : t('explore-subtitle')}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        {selectedPho && (
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        )}

        {/* Content */}
        {!selectedPho ? (
          /* Pho Grid */
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {t('select-pho')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {streets.map((street) => (
                <PhoCard
                  key={street.id}
                  street={street}
                  onClick={() => navigate(`/dao-pho/${street.id}`)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Product Grid */
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {products.length} {t('products')}
              </h2>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-primary dark:hover:border-primary transition-all duration-300">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                            <button className="w-full px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                              {t('create-video')}
                            </button>
                            <button className="w-full px-6 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                              {t('create-image')}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-primary font-bold">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Chưa có sản phẩm
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sản phẩm sẽ được thêm vào sớm
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default DaoPho;
