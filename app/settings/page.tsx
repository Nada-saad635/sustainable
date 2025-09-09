import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Bell,
  Globe,
  Shield,
  CreditCard,
  HelpCircle,
  Info,
  LogOut,
  Home,
  User,
  ShoppingCart,
  SettingsIcon,
  Moon,
  Volume2,
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="p-2 hover:bg-white/20 rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold">الإعدادات</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Account Settings */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <User className="h-5 w-5" />
              إعدادات الحساب
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">الإشعارات</p>
                  <p className="text-sm text-green-600">تلقي إشعارات العروض والنقاط</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">الأصوات</p>
                  <p className="text-sm text-green-600">تشغيل الأصوات في التطبيق</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">الوضع الليلي</p>
                  <p className="text-sm text-green-600">تفعيل الثيم الداكن</p>
                </div>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* App Settings */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              إعدادات التطبيق
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-50">
              <Globe className="h-5 w-5 mr-3" />
              اللغة والمنطقة
            </Button>
            <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-50">
              <CreditCard className="h-5 w-5 mr-3" />
              طرق الدفع
            </Button>
            <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-50">
              <Shield className="h-5 w-5 mr-3" />
              الخصوصية والأمان
            </Button>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              المساعدة والدعم
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-50">
              <HelpCircle className="h-5 w-5 mr-3" />
              الأسئلة الشائعة
            </Button>
            <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-50">
              <Info className="h-5 w-5 mr-3" />
              حول التطبيق
            </Button>
            <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-50">
              <Globe className="h-5 w-5 mr-3" />
              تواصل معنا
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-red-200">
          <CardContent className="p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5 mr-3" />
              تسجيل الخروج
            </Button>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center text-sm text-green-600">
          <p>إصدار التطبيق 1.2.0</p>
          <p>© 2024 تطبيق الاستدامة</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 px-6 py-3">
        <div className="flex justify-around items-center">
          <Link href="/settings" className="flex flex-col items-center gap-1 text-green-800">
            <SettingsIcon className="h-6 w-6" />
            <span className="text-xs font-semibold">الإعدادات</span>
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
