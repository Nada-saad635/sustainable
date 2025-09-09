import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Search,
  Clock,
  Users,
  ChefHat,
  Home,
  User,
  ShoppingCart,
  Settings,
  Star,
  Bookmark,
} from "lucide-react"

export default function RecipesPage() {
  const recipes = [
    {
      name: "سلطة الخضار المحلية",
      time: "15 دقيقة",
      servings: "4 أشخاص",
      difficulty: "سهل",
      rating: 4.8,
      points: 25,
      image: "🥗",
      ingredients: ["طماطم", "خيار", "خس", "جزر"],
      sustainable: true,
    },
    {
      name: "شوربة العدس الأحمر",
      time: "30 دقيقة",
      servings: "6 أشخاص",
      difficulty: "متوسط",
      rating: 4.9,
      points: 35,
      image: "🍲",
      ingredients: ["عدس أحمر", "بصل", "جزر", "كركم"],
      sustainable: true,
    },
    {
      name: "سموثي الفواكه الطازجة",
      time: "5 دقائق",
      servings: "2 أشخاص",
      difficulty: "سهل",
      rating: 4.7,
      points: 20,
      image: "🥤",
      ingredients: ["موز", "فراولة", "مانجو", "زبادي"],
      sustainable: false,
    },
    {
      name: "طبق الخضار المشوية",
      time: "45 دقيقة",
      servings: "4 أشخاص",
      difficulty: "متوسط",
      rating: 4.6,
      points: 30,
      image: "🍆",
      ingredients: ["باذنجان", "كوسا", "فلفل", "بصل"],
      sustainable: true,
    },
  ]

  const categories = [
    { name: "سلطات", icon: "🥗", count: 12 },
    { name: "شوربات", icon: "🍲", count: 8 },
    { name: "مشروبات", icon: "🥤", count: 6 },
    { name: "أطباق رئيسية", icon: "🍽️", count: 15 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="p-2 hover:bg-white/20 rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold">الوصفات المستدامة</h1>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <ChefHat className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600" />
          <Input
            placeholder="ابحث عن الوصفات..."
            className="w-full pr-10 bg-white border-0 text-green-800 placeholder:text-green-600"
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold text-green-800 mb-4">فئات الوصفات</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <Card key={index} className="border-green-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-green-800 text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-green-600">{category.count} وصفة</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Tip */}
        <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-bold text-yellow-800">نصيحة اليوم</h3>
                <p className="text-sm text-yellow-700">استخدم المنتجات المحلية لتوفير النقاط وحماية البيئة</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recipes */}
        <div>
          <h2 className="text-xl font-bold text-green-800 mb-4">الوصفات المقترحة</h2>
          <div className="space-y-4">
            {recipes.map((recipe, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                      <span className="text-3xl">{recipe.image}</span>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-green-800">{recipe.name}</h3>
                        <div className="flex items-center gap-1">
                          {recipe.sustainable && <Badge className="bg-green-100 text-green-700 text-xs">مستدام</Badge>}
                          <Bookmark className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{recipe.servings}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{recipe.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                          {recipe.difficulty}
                        </Badge>
                        <p className="text-xs text-green-500 font-semibold">+{recipe.points} نقطة</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 px-6 py-3">
        <div className="flex justify-around items-center">
          <Link href="/settings" className="flex flex-col items-center gap-1 text-green-600">
            <Settings className="h-6 w-6" />
            <span className="text-xs">الإعدادات</span>
          </Link>
          <Link href="/products" className="flex flex-col items-center gap-1 text-green-600">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs">المنتجات</span>
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
