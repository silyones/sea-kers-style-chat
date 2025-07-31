import { Search, Mic, Camera, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  cartItemsCount: number;
  onSearchChange: (query: string) => void;
  onVoiceSearch: () => void;
  onCameraSearch: () => void;
}

const Header = ({ cartItemsCount, onSearchChange, onVoiceSearch, onCameraSearch }: HeaderProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-subtle backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Profile */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className="hover:scale-110 transition-transform"
            >
              <User className="h-5 w-5" />
            </Button>
            <h1 
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate("/")}
            >
              SEA-KERS
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for clothes, styles, occasions..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-20 h-10 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onVoiceSearch}
                  className="h-6 w-6 hover:scale-110 transition-transform"
                >
                  <Mic className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onCameraSearch}
                  className="h-6 w-6 hover:scale-110 transition-transform"
                >
                  <Camera className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex items-center">
            <Button
              variant="cart"
              size="icon"
              onClick={() => navigate("/cart")}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs animate-bounce-in"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;