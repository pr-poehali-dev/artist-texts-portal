import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Тексты песен",
      price: "от 5000 ₽",
      description: "Профессиональные тексты для любых жанров: поп, рок, рэп, баллады",
      features: ["Уникальный контент", "Рифма и ритм", "Доработка до результата"]
    },
    {
      title: "Стихи на заказ",
      price: "от 3000 ₽",
      description: "Авторские стихи для любых случаев: праздники, признания, подарки",
      features: ["Любая тематика", "Персональный подход", "Быстрые сроки"]
    },
    {
      title: "Рерайт и доработка",
      price: "от 2000 ₽",
      description: "Улучшение существующих текстов, адаптация под стиль",
      features: ["Сохранение идеи", "Улучшение рифмы", "Консультации"]
    }
  ];

  const poems = [
    {
      title: "Осенний вальс",
      excerpt: "Листья кружат в танце золотом,\nВетер шепчет нежные слова...",
      genre: "Лирика"
    },
    {
      title: "Городские огни",
      excerpt: "Неоновый свет освещает пути,\nВ ритме города бьётся сердце...",
      genre: "Урбанистика"
    },
    {
      title: "Морской бриз",
      excerpt: "Волны шепчут тайны глубин,\nЧайки кружат над водой...",
      genre: "Природа"
    }
  ];

  const songs = [
    {
      title: "Звёздная ночь",
      genre: "Поп-баллада",
      excerpt: "Под звёздным небом мы с тобой,\nЗабыли всё, что было...",
      mood: "Романтика"
    },
    {
      title: "Свобода",
      genre: "Рок",
      excerpt: "Я сломаю все преграды,\nРазрушу стены лжи...",
      mood: "Энергия"
    },
    {
      title: "Дождь в городе",
      genre: "Инди",
      excerpt: "Капли стучат по стеклу,\nРисуют узоры печали...",
      mood: "Меланхолия"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Певица",
      text: "Потрясающие тексты! Песня попала в топ-10 чартов. Профессионализм на высшем уровне.",
      rating: 5
    },
    {
      name: "Максим Соколов",
      role: "Музыкант",
      text: "Работать было легко и приятно. Все пожелания учтены, результат превзошёл ожидания.",
      rating: 5
    },
    {
      name: "Елена Краснова",
      role: "Блогер",
      text: "Заказала стихи для юбилея мамы. Слёзы радости гарантированы! Очень душевно и красиво.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-magenta to-orange bg-clip-text text-transparent">
            Слова в Искусстве
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#poems" className="hover:text-primary transition-colors">Стихи</a>
            <a href="#songs" className="hover:text-primary transition-colors">Песни</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-magenta hover:opacity-90">
            Связаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-magenta/10 to-orange/10 animate-fade-in">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-magenta text-white border-0">
            Профессиональный автор текстов
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-magenta to-orange bg-clip-text text-transparent">
            Превращаю эмоции
            <br />в слова
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаю уникальные тексты песен и стихи, которые трогают сердца и остаются в памяти
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-magenta hover:opacity-90">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Заказать текст
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-magenta bg-clip-text text-transparent">
                Обо мне
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Более 10 лет я создаю тексты, которые вдохновляют и запоминаются. Моя страсть — находить идеальные слова для выражения самых глубоких эмоций и мыслей.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Работал с известными артистами, написал более 200 песен и стихотворений. Каждый текст — это уникальное произведение искусства, созданное специально для вас.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">10+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Music" className="text-magenta" size={24} />
                  <span className="font-semibold">200+ текстов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-orange" size={24} />
                  <span className="font-semibold">150+ клиентов</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/33ce4b5a-9ad5-4ba9-aa7a-019d0d0e934e/files/518e05e3-7e41-44a1-ae43-32d77ff498bb.jpg"
                alt="Автор" 
                className="rounded-2xl shadow-2xl w-full animate-scale-in"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-magenta p-6 rounded-xl text-white shadow-xl">
                <Icon name="Quote" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-magenta/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              Услуги и цены
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий вариант или закажите индивидуальное предложение
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <Badge className="bg-gradient-to-r from-primary to-magenta text-white border-0">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-magenta hover:opacity-90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="poems" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-magenta to-orange bg-clip-text text-transparent">
              Избранные стихи
            </h2>
            <p className="text-lg text-muted-foreground">
              Примеры моих работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {poems.map((poem, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {poem.title}
                    </CardTitle>
                    <Badge variant="outline">{poem.genre}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground mb-4">
                    {poem.excerpt}
                  </p>
                  <Button variant="ghost" className="text-primary">
                    Читать полностью
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="songs" className="py-20 px-4 bg-gradient-to-br from-orange/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange to-primary bg-clip-text text-transparent">
              Тексты песен
            </h2>
            <p className="text-lg text-muted-foreground">
              Мои лучшие работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {songs.map((song, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary via-magenta to-orange"></div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {song.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{song.genre}</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary">{song.mood}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground mb-4">
                    {song.excerpt}
                  </p>
                  <Button variant="ghost" className="text-primary">
                    Читать полностью
                    <Icon name="Music" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-magenta bg-clip-text text-transparent">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Что говорят те, кто уже работал со мной
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-magenta flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-orange fill-orange" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary via-magenta to-orange text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы создать что-то особенное?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь со мной, и мы обсудим ваш проект. Первая консультация бесплатно!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="text-primary">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Слова в Искусстве. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
