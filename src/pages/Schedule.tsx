import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const schedule = [
    {
      day: 'Понедельник',
      emoji: '💻',
      sessions: [
        { time: '15:00 - 16:30', course: 'Основы программирования', level: 'Группа 1' },
        { time: '17:00 - 18:30', course: 'Веб-разработка', level: 'Группа 2' },
      ],
    },
    {
      day: 'Вторник',
      emoji: '🎨',
      sessions: [
        { time: '15:00 - 16:30', course: 'Цифровой дизайн', level: 'Группа 1' },
        { time: '17:00 - 18:30', course: 'Видеоблогинг', level: 'Группа 1' },
      ],
    },
    {
      day: 'Среда',
      emoji: '🤖',
      sessions: [
        { time: '15:00 - 16:30', course: 'Робототехника', level: 'Группа 1' },
        { time: '17:00 - 18:30', course: 'Робототехника', level: 'Группа 2' },
      ],
    },
    {
      day: 'Четверг',
      emoji: '🎮',
      sessions: [
        { time: '15:00 - 16:30', course: 'Разработка игр', level: 'Группа 1' },
        { time: '17:00 - 18:30', course: 'Основы программирования', level: 'Группа 2' },
      ],
    },
    {
      day: 'Пятница',
      emoji: '🌐',
      sessions: [
        { time: '15:00 - 16:30', course: 'Веб-разработка', level: 'Группа 1' },
        { time: '17:00 - 18:30', course: 'Разработка игр', level: 'Группа 2' },
      ],
    },
    {
      day: 'Суббота',
      emoji: '⭐',
      sessions: [
        { time: '10:00 - 11:30', course: 'Проектная работа', level: 'Все группы' },
        { time: '12:00 - 13:30', course: 'Мастер-классы', level: 'Все группы' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Расписание занятий 📅
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирай удобное время и приходи учиться новому!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {schedule.map((day, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{day.emoji}</span>
                    <h3 className="font-bold text-2xl">{day.day}</h3>
                  </div>
                  <div className="space-y-4">
                    {day.sessions.map((session, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-border"
                      >
                        <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                          <Icon name="Clock" size={16} />
                          <span className="text-sm">{session.time}</span>
                        </div>
                        <p className="font-medium mb-1">{session.course}</p>
                        <p className="text-sm text-muted-foreground">{session.level}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Маленькие группы</h3>
                <p className="text-muted-foreground">До 10 человек в группе для лучшего обучения</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Удобное время</h3>
                <p className="text-muted-foreground">После школы и в выходные дни</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Coffee" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">Перерывы</h3>
                <p className="text-muted-foreground">С чаем, печеньками и играми</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Есть вопросы по расписанию?</h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Мы можем подобрать индивидуальное время или добавить тебя в удобную группу!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+79991234567">
                  <div className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition">
                    <Icon name="Phone" size={20} />
                    +7 (999) 123-45-67
                  </div>
                </a>
                <a href="mailto:info@digitalclub.ru">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition">
                    <Icon name="Mail" size={20} />
                    info@digitalclub.ru
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
