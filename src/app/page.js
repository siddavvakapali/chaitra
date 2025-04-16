import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProductList from "@/Components/ProductList";



export default function Home() {
  
  return (
    <>

      <main className="min-h-screen bg-red-50 font-sans">
       <Header/>
        
        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-red-50 rounded-xl shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-800 mb-8 text-center">
            Latest Products
          </h2>
          {/* Product Grid */}
          <ProductList />
        </section>
        <Footer />
      </main>
    </>
  );
}
