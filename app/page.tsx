import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Home, User, Settings, Leaf, Plus } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 sm:p-6 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="h-14 w-14 sm:h-16 sm:w-16 border-2 border-white">
            <AvatarImage src="/diverse-user-avatars.png" />
            <AvatarFallback className="bg-green-700 text-white text-lg sm:text-xl">أح</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold">مرحباً، أحمد!</h1>
            <Badge className="bg-yellow-400 text-green-800 hover:bg-yellow-300 mt-1">
              <Leaf className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              محارب البيئة
            </Badge>
          </div>
        </div>
        <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-green-100 mb-1 text-sm">نقاطك الحالية</p>
          <p className="text-3xl sm:text-4xl font-bold text-yellow-300">561 نقطة</p>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 pb-24">
        <Button className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white py-6 text-lg rounded-2xl shadow-lg transition-all duration-200 transform active:scale-95">
          <ShoppingCart className="h-6 w-6 mr-3" />
          إنشاء قائمة التسوق
        </Button>

        {/* Recommended Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-green-800">المنتجات المقترحة</h2>
            <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100">
              <Plus className="h-4 w-4 mr-1" />
              المزيد
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Card className="overflow-hidden border-green-200 relative shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 transform">
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-red-500 text-white text-xs px-2 py-1">خصم 20%</Badge>
              </div>
              <CardContent className="p-0">
                <img src="/fresh-tomatoes.png" alt="طماطم" className="w-full h-28 sm:h-32 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-green-800 text-sm sm:text-base">طماطم طازجة</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-green-600 font-bold text-sm sm:text-base">2.4 درهم/كيلو</p>
                    <p className="text-gray-400 line-through text-xs">3 درهم</p>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+15 نقطة</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-green-200 relative shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 transform">
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-red-500 text-white text-xs px-2 py-1">خصم 15%</Badge>
              </div>
              <CardContent className="p-0">
                <img src="/fresh-lettuce.png" alt="خس" className="w-full h-28 sm:h-32 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-green-800 text-sm sm:text-base">خس أخضر</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-green-600 font-bold text-sm sm:text-base">1.7 درهم/كيلو</p>
                    <p className="text-gray-400 line-through text-xs">2 درهم</p>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+10 نقاط</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <Card className="overflow-hidden border-green-200 relative shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 transform">
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-orange-500 text-white text-xs px-2 py-1">عرض خاص</Badge>
              </div>
              <CardContent className="p-0">
                <div className="w-full h-28 sm:h-32 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl">🥕</span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-green-800 text-sm sm:text-base">جزر عضوي</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-green-600 font-bold text-sm sm:text-base">2.5 درهم/كيلو</p>
                    <p className="text-gray-400 line-through text-xs">3.2 درهم</p>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+18 نقطة</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-green-200 relative shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 transform">
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-green-600 text-white text-xs px-2 py-1">محلي</Badge>
              </div>
              <CardContent className="p-0">
                <div className="w-full h-28 sm:h-32 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl">🥒</span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-green-800 text-sm sm:text-base">خيار طازج</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-green-600 font-bold text-sm sm:text-base">1.8 درهم/كيلو</p>
                  </div>
                  <p className="text-xs text-green-500 mt-1">+12 نقطة</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Stock */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-4">مخزوني</h2>
          <Card className="border-green-200 shadow-sm">
            <CardContent className="p-6 text-center text-green-600">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-sm sm:text-base">لا توجد منتجات في المخزون حالياً</p>
              <Button
                variant="outline"
                className="mt-3 text-green-600 border-green-300 hover:bg-green-50 bg-transparent"
              >
                إضافة منتجات
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-green-200 px-4 py-2 pb-safe">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link
            href="/settings"
            className="flex flex-col items-center gap-1 text-green-600 p-2 rounded-lg hover:bg-green-50 active:bg-green-100 transition-colors"
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs">الإعدادات</span>
          </Link>
          <Link
            href="/products"
            className="flex flex-col items-center gap-1 text-green-600 p-2 rounded-lg hover:bg-green-50 active:bg-green-100 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs">المنتجات</span>
          </Link>
          <Link href="/" className="flex flex-col items-center gap-1 text-green-800 p-2 rounded-lg bg-green-50">
            <Home className="h-6 w-6" />
            <span className="text-xs font-semibold">الرئيسية</span>
          </Link>
          <Link
            href="/profile"
            className="flex flex-col items-center gap-1 text-green-600 p-2 rounded-lg hover:bg-green-50 active:bg-green-100 transition-colors"
          >
            <User className="h-6 w-6" />
            <span className="text-xs">البروفايل</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
