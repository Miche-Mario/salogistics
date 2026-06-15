import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <input type="range" className="w-full" />
              </div>

              {/* Location */}
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>All Countries</option>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Benin</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Showing 1-12 of 240 products</p>
              <select className="border rounded-lg px-4 py-2">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="text-center py-12 text-gray-500">
              Product grid will be displayed here
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
