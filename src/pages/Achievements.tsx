import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Achievements = () => {
  const achievements = [
    {
      title: 'Первый шаг',
      emoji: '👟',
      description: 'Посетил первое занятие',
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Программист',
      emoji: '💻',
      description: 'Написал первую программу',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Художник',
      emoji: '🎨',
      description: 'Создал свой первый дизайн',
      color: 'from-pink-400 to-rose-500',
    },
    {
      title: 'Робототехник',
      emoji: '🤖',
      description: 'Собрал первого робота',
      color: 'from-teal-400 to-cyan-500',
    },
    {
      title: 'Блогер',
      emoji: '🎬',
      description: 'Снял первое видео',
      color: 'from-red-400 to-orange-500',
    },
    {
      title: 'Командный игрок',
      emoji: '🤝',
      description: 'Завершил командный проект',
      color: 'from-purple-400 to-violet-500',
    },
    {
      title: 'Мастер кода',
      emoji: '⭐',
      description: 'Прошёл 10 занятий',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      title: 'Звезда клуба',
      emoji: '🌟',
      description: 'Закончил полный курс',
      color: 'from-indigo-400 to-purple-500',
    },
  ];

  const students = [
    {
      name: 'Максим',
      age: 11,
      achievements: 12,
      project: 'Игра "Космические приключения"',
      image: '🧑‍🚀',
    },
    {
      name: 'София',
      age: 11,
      achievements: 15,
      project: 'Сайт про животных',
      image: '👩‍💻',
    },
    {
      name: 'Артём',
      age: 11,
      achievements: 10,
      project: 'Робот-помощник',
      image: '🧑‍🔧',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Достижения 🏆
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Зарабатывай награды за успехи и становись лучшим в клубе!
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Собери все значки! 🎖️</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-4xl shadow-lg`}
                    >
                      {achievement.emoji}
                    </div>
                    <h3 className="font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Звёзды нашего клуба ⭐</h2>
            <p className="text-center text-muted-foreground mb-12">
              Посмотри, чего достигли наши ученики!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {students.map((student, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-secondary transition-all hover:shadow-xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{student.image}</div>
                    <h3 className="font-bold text-2xl mb-2">{student.name}</h3>
                    <p className="text-muted-foreground mb-4">{student.age} лет</p>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon name="Award" size={20} className="text-primary" />
                        <span className="font-bold text-2xl text-primary">
                          {student.achievements}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Достижений</p>
                    </div>
                    <p className="font-medium">Проект:</p>
                    <p className="text-sm text-muted-foreground">{student.project}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 overflow-hidden">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/19832d95-4dc4-480a-97b2-f4374e53ecea/files/ea24f0a1-82a2-4040-97bb-69eb92bf7ebc.jpg"
                alt="Achievements"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Твои достижения ждут тебя!</h2>
                <p className="text-lg">Присоединяйся и начинай собирать награды уже сегодня!</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-3xl">
                  🎁
                </div>
                <h3 className="font-bold text-xl mb-2">Призы</h3>
                <p className="text-muted-foreground">
                  За достижения получай классные призы и сувениры
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4 text-3xl">
                  🏅
                </div>
                <h3 className="font-bold text-xl mb-2">Конкурсы</h3>
                <p className="text-muted-foreground">
                  Участвуй в конкурсах и выигрывай крутые награды
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 text-3xl">
                  📜
                </div>
                <h3 className="font-bold text-xl mb-2">Сертификаты</h3>
                <p className="text-muted-foreground">
                  Получай сертификаты за завершение курсов
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;
