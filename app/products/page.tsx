import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Filter, Home, User, ShoppingCart, Settings, Star, Plus } from "lucide-react"

export default function ProductsPage() {
  const categories = [
    { name: "خضروات", icon: "🥬", count: 24 },
    { name: "فواكه", icon: "🍎", count: 18 },
    { name: "منتجات الألبان", icon: "🥛", count: 12 },
    { name: "حبوب", icon: "🌾", count: 15 },
    { name: "لحوم", icon: "🥩", count: 8 },
    { name: "أعشاب", icon: "🌿", count: 10 },
  ]

  const featuredProducts = [
    {
      name: "طماطم كرزية",
      price: "4.5",
      originalPrice: "5.5",
      discount: "18%",
      points: 20,
      rating: 4.8,
      image: "🍅",
    },
    {
      name: "أفوكادو طازج",
      price: "8.0",
      originalPrice: "10.0",
      discount: "20%",
      points: 35,
      rating: 4.9,
      image: "🥑",
    },
    {
      name: "سبانخ عضوية",
      price: "3.2",
      originalPrice: "4.0",
      discount: "20%",
      points: 15,
      rating: 4.7,
      image: "🥬",
    },
    {
      name: "موز محلي",
      price: "2.8",
      originalPrice: "",
      discount: "",
      points: 12,
      rating: 4.6,
      image: "🍌",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="p-2 hover:bg-white/20 rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold">المنتجات</h1>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600" />
          <Input
            placeholder="ابحث عن المنتجات..."
            className="w-full pr-10 bg-white border-0 text-green-800 placeholder:text-green-600"
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold text-green-800 mb-4">الفئات</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <Card key={index} className="border-green-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-green-800 text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-green-600">{category.count} منتج</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <h2 className="text-xl font-bold text-green-800 mb-4">المنتجات المميزة</h2>
          <div className="grid grid-cols-3 gap-2">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden border-green-200 relative hover:shadow-md transition-shadow">
                {product.discount && (
                  <div className="absolute top-1 right-1 z-10">
                    <Badge className="bg-red-500 text-white text-[10px] px-1 py-0">خصم {product.discount}</Badge>
                  </div>
                )}
                <CardContent className="p-0">
                  <div className="w-full h-16 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-2xl">{product.image}</span>
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold text-green-800 text-xs mb-1 leading-tight">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] text-gray-600">{product.rating}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 mb-1">
                      <p className="text-green-600 font-bold text-xs">{product.price} د.إ/كيلو</p>
                      {product.originalPrice && (
                        <p className="text-gray-400 line-through text-[10px]">{product.originalPrice} د.إ</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-green-500">+{product.points} نقطة</p>
                      <Button size="sm" className="h-5 w-5 p-0 bg-green-600 hover:bg-green-700">
                        <Plus className="h-2.5 w-2.5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🎁</div>
              <div>
                <h3 className="font-bold text-orange-800">عروض خاصة</h3>
                <p className="text-sm text-orange-600">اشتري 3 واحصل على خصم 25%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 px-6 py-3">
        <div className="flex justify-around items-center">
          <Link href="/settings" className="flex flex-col items-center gap-1 text-green-600">
            <Settings className="h-6 w-6" />
            <span className="text-xs">الإعدادات</span>
          </Link>
          <Link href="/products" className="flex flex-col items-center gap-1 text-green-800">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs font-semibold">المنتجات</span>
          </Link>
          <Link href="/" className="flex flex-col items-center gap-1 text-green-600">
            <Home className="h-6 w-6" />
            <span className="text-xs">الرئيسية</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-green-600">
            <User className="h-6 w-6" />
            <span className="text-xs">البروفايل</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
