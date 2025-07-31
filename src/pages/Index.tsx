import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import QuizBox from "@/components/QuizBox";
import AIAssistant from "@/components/AIAssistant";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";

interface IndexProps {
  cartItems: any[];
  onAddToCart: (product: Product) => void;
}

// Sample product data - in real app, this would come from your backend/Supabase
const sampleProducts: Product[] = [
  // T-Shirts & Tops
  {
    id: "1",
    name: "Organic Cotton Basic Tee",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 128,
    category: "tshirts",
    colors: ["#000000", "#FFFFFF", "#8B4513", "#228B22"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    isSale: true,
  },
  {
    id: "2", 
    name: "Vintage Band Graphic Tee",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4036?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 89,
    category: "tshirts",
    colors: ["#000000", "#8B4513", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  // Jeans & Denim
  {
    id: "3",
    name: "High-Waisted Mom Jeans",
    price: 68.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "jeans",
    colors: ["#4169E1", "#000080", "#8B4513"],
    sizes: ["24", "26", "28", "30", "32"],
    isSale: true,
  },
  // Dresses
  {
    id: "4",
    name: "Flowy Summer Midi Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 203,
    category: "dresses",
    colors: ["#FFFFFF", "#FFB6C1", "#90EE90", "#8B4513"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
];

const productCategories = {
  tshirts: sampleProducts.filter(p => p.category === "tshirts"),
  jeans: sampleProducts.filter(p => p.category === "jeans"),
  dresses: sampleProducts.filter(p => p.category === "dresses"),
  jackets: [], // Space for future expansion
  accessories: [], // Space for future expansion
  shoes: [], // Space for future expansion
};

const Index = ({ cartItems, onAddToCart }: IndexProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const { toast } = useToast();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(sampleProducts);
    } else {
      const filtered = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleVoiceSearch = () => {
    // Implementation for voice search - you can connect to speech recognition API
    toast({
      title: "Voice Search",
      description: "Voice search feature coming soon!",
      duration: 3000,
    });
  };

  const handleCameraSearch = () => {
    // Implementation for visual search - you can connect to image recognition API
    toast({
      title: "Camera Search",
      description: "Visual search feature coming soon!",
      duration: 3000,
    });
  };

  const handleStartQuiz = () => {
    // This will connect to your quiz backend functionality
    toast({
      title: "Style Quiz",
      description: "Quiz feature coming soon! Connect to your backend for personalized recommendations.",
      duration: 4000,
    });
  };

  const handleAIMessage = async (message: string): Promise<string> => {
    // This will connect to your AI backend service
    // For now, return a mock response
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    const responses = [
      "Thanks for your question! I'd love to help you find the perfect outfit. What occasion are you shopping for?",
      "Our latest collection features sustainable fabrics and trendy cuts perfect for Gen Z style!",
      "I recommend checking out our style quiz to get personalized recommendations based on your preferences!",
      "For size guidance, our size chart is available on each product page. Need help with anything specific?",
      "Our return policy is super flexible - 30 days for exchanges and returns. Anything else I can help with?",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header
        cartItemsCount={cartItems.length}
        onSearchChange={handleSearchChange}
        onVoiceSearch={handleVoiceSearch}
        onCameraSearch={handleCameraSearch}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {searchQuery ? (
              <CategorySection
                title={`Search Results for "${searchQuery}"`}
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            ) : (
              <>
                <CategorySection
                  title="New Arrivals - T-Shirts & Tops"
                  products={productCategories.tshirts}
                  onAddToCart={handleAddToCart}
                  onViewAll={() => toast({ title: "View All", description: "Category pages coming soon!" })}
                />
                
                <CategorySection
                  title="Trending - Jeans & Denim"
                  products={productCategories.jeans}
                  onAddToCart={handleAddToCart}
                  onViewAll={() => toast({ title: "View All", description: "Category pages coming soon!" })}
                />
                
                <CategorySection
                  title="Summer Collection - Dresses"
                  products={productCategories.dresses}
                  onAddToCart={handleAddToCart}
                  onViewAll={() => toast({ title: "View All", description: "Category pages coming soon!" })}
                />

                {/* Space for future categories */}
                <CategorySection
                  title="Outerwear - Jackets & Coats"
                  products={productCategories.jackets}
                  onAddToCart={handleAddToCart}
                />
                
                <CategorySection
                  title="Accessories"
                  products={productCategories.accessories}
                  onAddToCart={handleAddToCart}
                />
                
                <CategorySection
                  title="Footwear"
                  products={productCategories.shoes}
                  onAddToCart={handleAddToCart}
                />
              </>
            )}
          </div>

          {/* Quiz Box - Right Side */}
          <div className="hidden lg:block w-80 space-y-6">
            <div className="sticky top-24">
              <QuizBox onStartQuiz={handleStartQuiz} />
            </div>
          </div>
        </div>
      </main>

      {/* AI Assistant - Fixed bottom right */}
      <AIAssistant onSendMessage={handleAIMessage} />
    </div>
  );
};

export default Index;
