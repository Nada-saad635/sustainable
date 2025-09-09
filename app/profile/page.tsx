import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Edit,
  Leaf,
  Trophy,
  ShoppingBag,
  Recycle,
  Heart,
  Star,
  Gift,
  Settings,
  LogOut,
  Home,
  User,
  ShoppingCart,
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="p-3 hover:bg-white/20 active:bg-white/30 rounded-full transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg sm:text-xl font-bold">البروفايل الشخصي</h1>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 active:bg-white/30 p-3">
            <Edit className="h-5 w-5" />
          </Button>
        </div>

        {/* User Info */}
        <div className="text-center">
          <Avatar className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-4 border-4 border-white shadow-lg">
            <AvatarImage src="/user-profile-avatar.png" />
            <AvatarFallback className="bg-green-700 text-white text-xl sm:text-2xl">أح</AvatarFallback>
          </Avatar>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">أحمد محمد العلي</h2>
          <p className="text-green-100 mb-3 text-sm sm:text-base">{""}</p>
          <Badge className="bg-yellow-400 text-green-800 hover:bg-yellow-300 text-base sm:text-lg px-4 py-2">
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            محارب البيئة
          </Badge>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Points & Achievements */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-green-200 bg-gradient-to-br from-green-100 to-emerald-50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-3xl font-bold text-green-700 mb-1">561</div>
              <p className="text-green-600 text-sm sm:text-sm">النقاط الحالية</p>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-gradient-to-br from-yellow-100 to-amber-50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-3xl font-bold text-yellow-700 mb-1">12</div>
              <p className="text-yellow-600 text-sm sm:text-sm">الإنجازات</p>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Impact */}
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-green-800 flex items-center gap-2 text-base sm:text-lg">
              <Recycle className="h-5 w-5" />
              تأثيرك البيئي
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex justify-between items-center py-2">
              <span className="text-green-700 text-sm sm:text-base">الكربون المُوفر</span>
              <span className="font-bold text-green-800 text-sm sm:text-base">45.2 كجم</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-green-700 text-sm sm:text-base">المنتجات المحلية</span>
              <span className="font-bold text-green-800 text-sm sm:text-base">89%</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-green-700 text-sm sm:text-base">الأكياس المُوفرة</span>
              <span className="font-bold text-green-800 text-sm sm:text-base">23 كيس</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-green-800 flex items-center gap-2 text-base sm:text-lg">
              <Trophy className="h-5 w-5" />
              الإنجازات الأخيرة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors active:bg-green-200">
              <div className="p-2 bg-green-200 rounded-full">
                <Star className="h-4 w-4 text-green-700" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-green-800 text-sm sm:text-base">محارب البيئة</p>
                <p className="text-xs sm:text-sm text-green-600">وصلت إلى 500 نقطة</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors active:bg-blue-200">
              <div className="p-2 bg-blue-200 rounded-full">
                <ShoppingBag className="h-4 w-4 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-blue-800 text-sm sm:text-base">متسوق محلي</p>
                <p className="text-xs sm:text-sm text-blue-600">50 عملية شراء محلية</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors active:bg-yellow-200">
              <div className="p-2 bg-yellow-200 rounded-full">
                <Heart className="h-4 w-4 text-yellow-700" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-yellow-800 text-sm sm:text-base">صديق البيئة</p>
                <p className="text-xs sm:text-sm text-yellow-600">وفرت 40 كجم كربون</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopping Stats */}
        <Card className="border-green-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2 text-base sm:text-lg">
              <ShoppingBag className="h-5 w-5" />
              إحصائيات التسوق
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex justify-between items-center py-2">
              <span className="text-green-700 text-sm sm:text-base">إجمالي المشتريات</span>
              <span className="font-bold text-green-800 text-sm sm:text-base">127 عملية</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-green-700 text-sm sm:text-base">المبلغ المُوفر</span>
              <span className="font-bold text-green-800 text-sm sm:text-base">342 درهم</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-green-700 text-sm sm:text-base">المتاجر المفضلة</span>
              <span className="font-bold text-green-800 text-sm sm:text-base">8 متاجر</span>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-green-800 text-base sm:text-lg">إعدادات الحساب</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <Button
              variant="ghost"
              className="w-full justify-start text-green-700 hover:bg-green-50 active:bg-green-100 h-12 text-sm sm:text-base"
            >
              <Settings className="h-5 w-5 mr-3" />
              الإعدادات العامة
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-green-700 hover:bg-green-50 active:bg-green-100 h-12 text-sm sm:text-base"
            >
              <Gift className="h-5 w-5 mr-3" />
              استبدال النقاط
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-green-700 hover:bg-green-50 active:bg-green-100 h-12 text-sm sm:text-base"
            >
              <ShoppingBag className="h-5 w-5 mr-3" />
              تاريخ المشتريات
            </Button>
            <Separator className="my-3" />
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:bg-red-50 active:bg-red-100 h-12 text-sm sm:text-base"
            >
              <LogOut className="h-5 w-5 mr-3" />
              تسجيل الخروج
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
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
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-green-600 p-2 rounded-lg hover:bg-green-50 active:bg-green-100 transition-colors"
          >
            <Home className="h-6 w-6" />
            <span className="text-xs">الرئيسية</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-green-800 p-2 rounded-lg bg-green-50">
            <User className="h-6 w-6" />
            <span className="text-xs font-semibold">البروفايل</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
