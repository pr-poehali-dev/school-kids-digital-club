import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      emoji: '💻',
      title: 'Основы программирования',
      description: 'Научись создавать свои первые игры и программы на Scratch и Python',
      duration: '3 месяца',
      level: 'Начальный',
      lessons: 24,
      color: 'from-purple-500 to-blue-500',
      topics: ['Scratch', 'Алгоритмы', 'Python', 'Создание игр'],
    },
    {
      emoji: '🎨',
      title: 'Цифровой дизайн',
      description: 'Создавай крутые картинки, логотипы и дизайн для сайтов',
      duration: '2 месяца',
      level: 'Начальный',
      lessons: 16,
      color: 'from-pink-500 to-orange-500',
      topics: ['Figma', 'Photoshop', 'Создание логотипов', 'UI/UX'],
    },
    {
      emoji: '🤖',
      title: 'Робототехника',
      description: 'Собирай и программируй настоящих роботов на базе Arduino',
      duration: '4 месяца',
      level: 'Средний',
      lessons: 32,
      color: 'from-green-500 to-teal-500',
      topics: ['Arduino', 'Датчики', 'Моторы', 'Автономные роботы'],
    },
    {
      emoji: '🎬',
      title: 'Видеоблогинг',
      description: 'Снимай классные видео и создавай свой канал на YouTube',
      duration: '2 месяца',
      level: 'Начальный',
      lessons: 16,
      color: 'from-red-500 to-yellow-500',
      topics: ['Съёмка видео', 'Монтаж', 'YouTube', 'Блогинг'],
    },
    {
      emoji: '🌐',
      title: 'Веб-разработка',
      description: 'Создай свой первый сайт с нуля и опубликуй его в интернете',
      duration: '3 месяца',
      level: 'Начальный',
      lessons: 24,
      color: 'from-blue-500 to-cyan-500',
      topics: ['HTML', 'CSS', 'JavaScript', 'Хостинг'],
    },
    {
      emoji: '🎮',
      title: 'Разработка игр',
      description: 'Создавай 2D и 3D игры на Unity и публикуй их',
      duration: '4 месяца',
      level: 'Средний',
      lessons: 32,
      color: 'from-indigo-500 to-purple-500',
      topics: ['Unity', 'C#', '2D игры', '3D моделирование'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Наши курсы 🎓
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирай направление, которое тебе нравится, и начинай своё цифровое приключение!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <span className="text-7xl">{course.emoji}</span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      {course.lessons} занятий
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>

                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Что изучим:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-muted text-foreground text-xs rounded-lg"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contacts">
                    <Button className="w-full" size="lg">
                      Записаться
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Не можешь выбрать курс?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Приходи на бесплатное пробное занятие, и мы поможем тебе определиться!
              </p>
              <Link to="/contacts">
                <Button size="lg" className="text-lg px-10">
                  Записаться на пробное занятие
                  <Icon name="Sparkles" size={20} className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
