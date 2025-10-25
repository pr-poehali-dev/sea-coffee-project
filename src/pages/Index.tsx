import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', label: 'Главная', icon: 'Home' },
    { id: 'logo', label: 'Логотип', icon: 'Anchor' },
    { id: 'pattern', label: 'Паттерн', icon: 'Grid3x3' },
    { id: 'business-card', label: 'Визитка', icon: 'CreditCard' },
    { id: 'menu', label: 'Меню', icon: 'Coffee' },
    { id: 'about', label: 'О нас', icon: 'Info' },
    { id: 'gallery', label: 'Галерея', icon: 'Images' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' },
  ];

  const coffeeMenu = [
    { name: 'Эспрессо', price: '120₽', desc: 'Классический итальянский кофе' },
    { name: 'Капучино', price: '180₽', desc: 'Эспрессо с молочной пеной' },
    { name: 'Латте', price: '200₽', desc: 'Нежный кофе с молоком' },
    { name: 'Американо', price: '140₽', desc: 'Эспрессо с горячей водой' },
    { name: 'Раф', price: '220₽', desc: 'Сливочный кофе с ванилью' },
    { name: 'Флэт Уайт', price: '210₽', desc: 'Двойной эспрессо с микропеной' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/10 to-sand/30">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ocean/20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Icon name="Waves" className="text-ocean" size={32} />
              <h1 className="text-2xl font-bold text-ocean">Морская Пена</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-ocean text-white'
                      : 'text-anchor hover:bg-ocean/10'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'hero' && (
          <section className="animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean to-ocean-dark text-white p-12 md:p-20 mb-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-wave"></div>
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="Anchor" size={64} />
                  <div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-2">Морская Пена</h2>
                    <p className="text-xl text-ocean-light">Кофейня у берега мечты</p>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                  Фирменный стиль кофейни, вдохновлённый морем, свободой и ароматом свежесваренного кофе
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => setActiveSection('logo')} size="lg" className="bg-white text-ocean hover:bg-sand">
                    <Icon name="Anchor" size={20} className="mr-2" />
                    Посмотреть логотип
                  </Button>
                  <Button onClick={() => setActiveSection('menu')} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="Coffee" size={20} className="mr-2" />
                    Наше меню
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-ocean/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name="Palette" size={48} className="text-ocean mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-anchor mb-2">Морская палитра</h3>
                  <p className="text-muted-foreground">Глубокий синий океана и тёплый песочный берег</p>
                </CardContent>
              </Card>
              <Card className="border-ocean/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name="Waves" size={48} className="text-ocean mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-anchor mb-2">Морские мотивы</h3>
                  <p className="text-muted-foreground">Волны, якоря и морская романтика</p>
                </CardContent>
              </Card>
              <Card className="border-ocean/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name="Coffee" size={48} className="text-ocean mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-anchor mb-2">Свежий кофе</h3>
                  <p className="text-muted-foreground">Лучшие сорта с доставкой морем</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'logo' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="Anchor" className="text-ocean" />
              Концепции названий и логотипов
            </h2>
            
            <Card className="border-ocean/20 bg-gradient-to-br from-ocean/5 to-sand/20 mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-anchor mb-6 text-center">Варианты названий кофейни</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 border-2 border-ocean shadow-sm">
                      <h4 className="text-xl font-bold text-ocean mb-2">Морская Пена</h4>
                      <p className="text-sm text-muted-foreground mb-2">Романтичное, легкое звучание. Ассоциации с морем и воздушной кофейной пеной.</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Оригинальное</span>
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Текущий выбор</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-ocean/20">
                      <h4 className="text-xl font-bold text-anchor mb-2">Tide & Coffee</h4>
                      <p className="text-sm text-muted-foreground mb-2">Современное англоязычное название. «Прилив и кофе» — динамика и энергия.</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Современное</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-ocean/20">
                      <h4 className="text-xl font-bold text-anchor mb-2">Гавань</h4>
                      <p className="text-sm text-muted-foreground mb-2">Короткое, запоминающееся. Место уюта и отдыха, как пристань для души.</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Лаконичное</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 border border-ocean/20">
                      <h4 className="text-xl font-bold text-anchor mb-2">Captain's Brew</h4>
                      <p className="text-sm text-muted-foreground mb-2">«Напиток капитана» — авторитет, качество, морские путешествия.</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Премиальное</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-ocean/20">
                      <h4 className="text-xl font-bold text-anchor mb-2">Sea Bean</h4>
                      <p className="text-sm text-muted-foreground mb-2">Игра слов: «морской боб» — кофейное зерно, принесённое морем.</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Креативное</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-ocean/20">
                      <h4 className="text-xl font-bold text-anchor mb-2">Маяк</h4>
                      <p className="text-sm text-muted-foreground mb-2">Символ надежды и света. Кофейня как ориентир и место встречи.</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-ocean/10 text-ocean rounded">Символичное</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-anchor mb-6">Варианты логотипов под концепции</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-ocean/20 hover:border-ocean transition-all cursor-pointer hover:shadow-xl">
                <CardContent className="p-4">
                  <img
                    src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/ea88b29e-d731-489c-9ac0-22e089f602f4.jpg"
                    alt="Морская Пена"
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-bold text-anchor text-center">Морская Пена</h4>
                  <p className="text-xs text-muted-foreground text-center">Якорь и чашка</p>
                </CardContent>
              </Card>

              <Card className="border-ocean/20 hover:border-ocean transition-all cursor-pointer hover:shadow-xl">
                <CardContent className="p-4">
                  <img
                    src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/5282e48c-c2da-46e0-9d7a-90ac331819b4.jpg"
                    alt="Маяк/Гавань"
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-bold text-anchor text-center">Маяк / Гавань</h4>
                  <p className="text-xs text-muted-foreground text-center">Маяк и кофе</p>
                </CardContent>
              </Card>

              <Card className="border-ocean/20 hover:border-ocean transition-all cursor-pointer hover:shadow-xl">
                <CardContent className="p-4">
                  <img
                    src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/b3585a66-e8cd-492d-8482-ed371c60a56f.jpg"
                    alt="Tide & Coffee"
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-bold text-anchor text-center">Tide & Coffee</h4>
                  <p className="text-xs text-muted-foreground text-center">Волна и капля</p>
                </CardContent>
              </Card>

              <Card className="border-ocean/20 hover:border-ocean transition-all cursor-pointer hover:shadow-xl">
                <CardContent className="p-4">
                  <img
                    src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/8eb0ebeb-c257-4def-b03d-40ee010280f9.jpg"
                    alt="Captain's Brew"
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-bold text-anchor text-center">Captain's Brew</h4>
                  <p className="text-xs text-muted-foreground text-center">Парусник и пар</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-ocean/20 mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/546d820a-4daa-4e2f-9c37-2974f3898c84.jpg"
                      alt="Sea Bean концепт"
                      className="w-full rounded-xl shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-anchor mb-2">Sea Bean Cafe</h3>
                    <p className="text-muted-foreground text-sm">
                      Кофейное зерно превращается в морскую волну. Креативная игра слов и образов — зерно, принесённое морем.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-anchor mb-4">Фирменная палитра</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-ocean rounded-lg shadow"></div>
                        <div>
                          <p className="font-semibold text-anchor">Ocean Blue</p>
                          <p className="text-sm text-muted-foreground">#0EA5E9</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-sand rounded-lg shadow"></div>
                        <div>
                          <p className="font-semibold text-anchor">Sand Beige</p>
                          <p className="text-sm text-muted-foreground">#FEF7CD</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-anchor rounded-lg shadow"></div>
                        <div>
                          <p className="font-semibold text-white">Anchor Gray</p>
                          <p className="text-sm text-muted-foreground">#403E43</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-anchor mb-3">Рекомендации</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-ocean mt-0.5" />
                        <span>Минимальный размер: 40×40px</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-ocean mt-0.5" />
                        <span>Форматы: SVG, PNG, PDF</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-ocean mt-0.5" />
                        <span>Защитная зона: 10% от размера</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'pattern' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="Grid3x3" className="text-ocean" />
              Фирменный паттерн
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-ocean/20">
                <CardContent className="p-0 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/60347d1e-dc55-44d1-9a0a-c3d77a7a8d89.jpg"
                    alt="Морской паттерн"
                    className="w-full h-[400px] object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="border-ocean/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-anchor mb-4">Элементы паттерна</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Icon name="Anchor" size={32} className="text-ocean" />
                      <div>
                        <p className="font-semibold text-anchor">Якоря</p>
                        <p className="text-sm text-muted-foreground">Символ надёжности и морской романтики</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Waves" size={32} className="text-ocean" />
                      <div>
                        <p className="font-semibold text-anchor">Волны</p>
                        <p className="text-sm text-muted-foreground">Динамика и свобода океана</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Coffee" size={32} className="text-ocean" />
                      <div>
                        <p className="font-semibold text-anchor">Кофейные зёрна</p>
                        <p className="text-sm text-muted-foreground">Основа нашего бизнеса</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-anchor mb-3">Применение</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-ocean mt-0.5" />
                      <span>Упаковка кофе и сопутствующих товаров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-ocean mt-0.5" />
                      <span>Фон для меню и печатных материалов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-ocean mt-0.5" />
                      <span>Оформление интерьера кофейни</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'business-card' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="CreditCard" className="text-ocean" />
              Дизайн визиток
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-ocean to-ocean-dark rounded-2xl p-8 text-white shadow-2xl aspect-[1.75/1] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <Icon name="Waves" size={200} className="absolute -top-10 -right-10" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="Anchor" size={24} />
                      <span className="text-xl font-bold">Морская Пена</span>
                    </div>
                    <p className="text-ocean-light text-sm">Coffee & Sea</p>
                  </div>
                  <div className="relative z-10">
                    <p className="text-2xl font-bold mb-1">Иван Морской</p>
                    <p className="text-ocean-light mb-3">Бариста-капитан</p>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Icon name="Phone" size={14} />
                        +7 (900) 123-45-67
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Mail" size={14} />
                        info@seafoam.coffee
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-ocean rounded-2xl p-8 shadow-2xl aspect-[1.75/1] flex flex-col justify-between">
                  <div className="text-center">
                    <Icon name="Anchor" size={48} className="text-ocean mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-ocean">Морская Пена</h3>
                    <p className="text-anchor text-sm">Кофейня у берега мечты</p>
                  </div>
                  <div className="text-center space-y-2 text-sm text-anchor">
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="MapPin" size={16} className="text-ocean" />
                      ул. Набережная, 42
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="Globe" size={16} className="text-ocean" />
                      www.seafoam.coffee
                    </p>
                    <div className="flex justify-center gap-3 mt-3">
                      <div className="w-8 h-8 bg-ocean rounded-full flex items-center justify-center">
                        <Icon name="Instagram" size={16} className="text-white" />
                      </div>
                      <div className="w-8 h-8 bg-ocean rounded-full flex items-center justify-center">
                        <Icon name="Facebook" size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-ocean/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-anchor mb-4">Спецификации</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-anchor mb-2">Размеры</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Стандарт: 90×50 мм</li>
                        <li>• С припуском: 94×54 мм</li>
                        <li>• Разрешение: 300 dpi</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-anchor mb-2">Печать</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Бумага: 350 г/м² мелованная</li>
                        <li>• Отделка: матовая ламинация</li>
                        <li>• Двусторонняя печать</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'menu' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="Coffee" className="text-ocean" />
              Меню кофейни
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-ocean/20 mb-8 overflow-hidden">
                <div className="bg-gradient-to-br from-ocean to-ocean-dark p-8 text-white text-center">
                  <Icon name="Anchor" size={48} className="mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">Морская Пена</h3>
                  <p className="text-ocean-light">Кофейное меню</p>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {coffeeMenu.map((item, index) => (
                      <div key={index} className="border-b border-ocean/10 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-anchor">{item.name}</h4>
                          <span className="text-xl font-bold text-ocean">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-ocean/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="Milk" size={40} className="text-ocean mx-auto mb-3" />
                    <h4 className="font-bold text-anchor mb-2">Альтернативное молоко</h4>
                    <p className="text-sm text-muted-foreground">Овсяное, миндальное, кокосовое +30₽</p>
                  </CardContent>
                </Card>
                <Card className="border-ocean/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="Cookie" size={40} className="text-ocean mx-auto mb-3" />
                    <h4 className="font-bold text-anchor mb-2">Десерты</h4>
                    <p className="text-sm text-muted-foreground">Свежая выпечка каждый день от 90₽</p>
                  </CardContent>
                </Card>
                <Card className="border-ocean/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="IceCream" size={40} className="text-ocean mx-auto mb-3" />
                    <h4 className="font-bold text-anchor mb-2">Холодные напитки</h4>
                    <p className="text-sm text-muted-foreground">Фраппе, айс-латте, лимонады</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="Info" className="text-ocean" />
              О нас
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-ocean/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-anchor mb-4">Наша история</h3>
                  <p className="text-muted-foreground mb-4">
                    «Морская Пена» — это не просто кофейня. Это место, где встречаются море и кофе, 
                    где каждая чашка наполнена ароматом свободы и морской романтики.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Мы создали пространство, вдохновлённое морскими путешествиями и культурой кофе. 
                    Наш фирменный стиль отражает эту философию в каждой детали — от логотипа до упаковки.
                  </p>
                  <p className="text-muted-foreground">
                    Мы верим, что хороший кофе, как и море, может изменить настроение, вдохновить 
                    на новые открытия и подарить моменты настоящего счастья.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-ocean/20">
                <CardContent className="p-0 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/a553cbb2-b72b-404a-a1c0-a88e3c78976c.jpg"
                    alt="Интерьер кофейни"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-ocean/20">
                <CardContent className="p-6">
                  <Icon name="Award" size={40} className="text-ocean mb-3" />
                  <h4 className="font-bold text-anchor mb-2">Качество</h4>
                  <p className="text-sm text-muted-foreground">Отборные зёрна со всего мира, обжаренные с любовью</p>
                </CardContent>
              </Card>
              <Card className="border-ocean/20">
                <CardContent className="p-6">
                  <Icon name="Heart" size={40} className="text-ocean mb-3" />
                  <h4 className="font-bold text-anchor mb-2">Атмосфера</h4>
                  <p className="text-sm text-muted-foreground">Уютное пространство с видом на море</p>
                </CardContent>
              </Card>
              <Card className="border-ocean/20">
                <CardContent className="p-6">
                  <Icon name="Users" size={40} className="text-ocean mb-3" />
                  <h4 className="font-bold text-anchor mb-2">Команда</h4>
                  <p className="text-sm text-muted-foreground">Профессиональные бариста-энтузиасты</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'gallery' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="Images" className="text-ocean" />
              Галерея
            </h2>
            <Tabs defaultValue="branding" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="branding">Брендинг</TabsTrigger>
                <TabsTrigger value="interior">Интерьер</TabsTrigger>
                <TabsTrigger value="products">Продукция</TabsTrigger>
              </TabsList>
              <TabsContent value="branding" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-ocean/20 overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/1c68b406-29a0-4128-a221-5266dee995c4.jpg"
                        alt="Логотип"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-anchor">Основной логотип</h4>
                        <p className="text-sm text-muted-foreground">Якорь и кофейная чашка</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-ocean/20 overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/60347d1e-dc55-44d1-9a0a-c3d77a7a8d89.jpg"
                        alt="Паттерн"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-anchor">Фирменный паттерн</h4>
                        <p className="text-sm text-muted-foreground">Морские элементы и кофейные зёрна</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="interior" className="space-y-6">
                <Card className="border-ocean/20 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="https://cdn.poehali.dev/projects/556eb957-006c-4f84-ad20-e2b85c178258/files/a553cbb2-b72b-404a-a1c0-a88e3c78976c.jpg"
                      alt="Интерьер"
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-anchor mb-2">Главный зал</h4>
                      <p className="text-muted-foreground">
                        Уютное пространство с панорамными окнами и видом на море. 
                        Интерьер выполнен в морской тематике с использованием натуральных материалов.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="products" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {['Упаковка кофе', 'Фирменные стаканы', 'Сувенирная продукция'].map((item, index) => (
                    <Card key={index} className="border-ocean/20">
                      <CardContent className="p-6 text-center">
                        <div className="bg-gradient-to-br from-ocean/10 to-sand/30 rounded-xl h-48 flex items-center justify-center mb-4">
                          <Icon name="Package" size={64} className="text-ocean" />
                        </div>
                        <h4 className="font-bold text-anchor">{item}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl font-bold text-anchor mb-8 flex items-center gap-3">
              <Icon name="Mail" className="text-ocean" />
              Контакты
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-ocean/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-anchor mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-ocean mt-1" />
                      <div>
                        <p className="font-semibold text-anchor">Адрес</p>
                        <p className="text-muted-foreground">ул. Набережная, 42<br />Морской город, 123456</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-ocean mt-1" />
                      <div>
                        <p className="font-semibold text-anchor">Телефон</p>
                        <p className="text-muted-foreground">+7 (900) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-ocean mt-1" />
                      <div>
                        <p className="font-semibold text-anchor">Email</p>
                        <p className="text-muted-foreground">info@seafoam.coffee</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-ocean mt-1" />
                      <div>
                        <p className="font-semibold text-anchor">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Вс: 08:00 - 22:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-ocean/20">
                    <p className="font-semibold text-anchor mb-3">Мы в соцсетях</p>
                    <div className="flex gap-3">
                      <Button size="icon" className="bg-ocean hover:bg-ocean-dark">
                        <Icon name="Instagram" size={20} />
                      </Button>
                      <Button size="icon" className="bg-ocean hover:bg-ocean-dark">
                        <Icon name="Facebook" size={20} />
                      </Button>
                      <Button size="icon" className="bg-ocean hover:bg-ocean-dark">
                        <Icon name="Twitter" size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-ocean/20 overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="bg-gradient-to-br from-ocean/20 to-sand/40 h-full min-h-[500px] flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" size={80} className="text-ocean mx-auto mb-4" />
                      <p className="text-anchor font-semibold">Карта</p>
                      <p className="text-sm text-muted-foreground">Мы находимся на набережной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gradient-to-br from-ocean to-ocean-dark text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Anchor" size={32} />
                <span className="text-xl font-bold">Морская Пена</span>
              </div>
              <p className="text-ocean-light text-sm">
                Кофейня у берега мечты. Свежий кофе и морская атмосфера.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Меню</h4>
              <ul className="space-y-2 text-sm text-ocean-light">
                <li><a href="#" className="hover:text-white transition">Кофе</a></li>
                <li><a href="#" className="hover:text-white transition">Десерты</a></li>
                <li><a href="#" className="hover:text-white transition">Холодные напитки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm text-ocean-light">
                <li><a href="#" className="hover:text-white transition">Наша история</a></li>
                <li><a href="#" className="hover:text-white transition">Команда</a></li>
                <li><a href="#" className="hover:text-white transition">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-ocean-light">
                <li>+7 (900) 123-45-67</li>
                <li>info@seafoam.coffee</li>
                <li>ул. Набережная, 42</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-ocean-light/20 pt-6 text-center text-sm text-ocean-light">
            <p>© 2024 Морская Пена. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;