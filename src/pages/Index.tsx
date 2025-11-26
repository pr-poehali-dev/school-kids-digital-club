import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: 'Laptop',
      title: 'Современные технологии',
      description: 'Изучаем программирование, дизайн и цифровые инструменты',
    },
    {
      icon: 'Users',
      title: 'Дружная команда',
      description: 'Работаем в команде и делаем крутые проекты вместе',
    },
    {
      icon: 'Trophy',
      title: 'Достижения и призы',
      description: 'Получай награды за успехи и участвуй в конкурсах',
    },
    {
      icon: 'Sparkles',
      title: 'Игровой формат',
      description: 'Обучение через игры, квесты и интересные задания',
    },
  ];

  const courses = [
    {
      emoji: '💻',
      title: 'Основы программирования',
      description: 'Создавай свои первые игры и программы',
      duration: '3 месяца',
    },
    {
      emoji: '🎨',
      title: 'Цифровой дизайн',
      description: 'Рисуй и создавай крутые картинки на компьютере',
      duration: '2 месяца',
    },
    {
      emoji: '🤖',
      title: 'Робототехника',
      description: 'Собирай и программируй настоящих роботов',
      duration: '4 месяца',
    },
    {
      emoji: '🎬',
      title: 'Видеоблогинг',
      description: 'Снимай и монтируй классные видео',
      duration: '2 месяца',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                ✨ Для школьников 11 лет
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Добро пожаловать в Digital Клуб!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Здесь ты научишься создавать игры, сайты, роботов и много чего крутого! 
                Присоединяйся к нашей команде цифровых героев! 🚀
              </p>
              <div className="flex gap-4">
                <Link to="/courses">
                  <Button size="lg" className="text-lg px-8">
                    Выбрать курс
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/schedule">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Расписание
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/19832d95-4dc4-480a-97b2-f4374e53ecea/files/dcad961b-fc81-40b5-93e3-e08cd2ba4da3.jpg"
                alt="Digital Club Hero"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Почему нам круто! 🌟
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Узнай, что делает наш клуб особенным
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Наши курсы 📚
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выбирай то, что тебе интересно!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-2 hover:border-secondary transition-all hover:shadow-xl hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{course.emoji}</div>
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                Все курсы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 text-center border-2 border-white">
              <h2 className="text-4xl font-bold mb-4">
                Готов начать своё цифровое приключение? 🎮
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Запишись на пробное занятие бесплатно и узнай, как это круто!
              </p>
              <Link to="/contacts">
                <Button size="lg" className="text-lg px-10">
                  Записаться на пробное занятие
                  <Icon name="Rocket" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
