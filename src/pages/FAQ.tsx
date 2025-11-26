import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: 'С какого возраста можно записаться?',
      answer:
        'Наши курсы разработаны специально для школьников 11 лет. Но мы также принимаем ребят 10 и 12 лет, если они интересуются технологиями!',
    },
    {
      question: 'Нужен ли свой компьютер?',
      answer:
        'Нет, все необходимое оборудование есть в клубе! Но если хочешь делать домашние задания, можешь заниматься и на своём компьютере.',
    },
    {
      question: 'Сколько стоит обучение?',
      answer:
        'Стоимость зависит от курса. Обычно это 3000-4000 рублей в месяц за 8 занятий. Первое пробное занятие всегда бесплатное!',
    },
    {
      question: 'Как проходят занятия?',
      answer:
        'Занятия длятся 1,5 часа. Мы учимся через игры, проекты и задания. Группы маленькие - до 10 человек, поэтому всем уделяется внимание!',
    },
    {
      question: 'Что если я пропущу занятие?',
      answer:
        'Ничего страшного! Мы отправим тебе материалы занятия, и ты сможешь изучить их дома. А на следующем занятии преподаватель поможет разобраться с вопросами.',
    },
    {
      question: 'Можно ли попробовать несколько курсов?',
      answer:
        'Конечно! Многие ребята ходят сразу на 2-3 курса. Мы поможем составить удобное расписание, чтобы всё успевать.',
    },
    {
      question: 'Нужно ли иметь опыт в программировании?',
      answer:
        'Совсем не обязательно! Наши курсы начинаются с самых основ. Мы научим всему с нуля. Главное - желание учиться!',
    },
    {
      question: 'Есть ли домашние задания?',
      answer:
        'Да, но они не скучные! Это интересные проекты, которые можно делать в своё удовольствие. Обычно на домашку уходит 30-60 минут в неделю.',
    },
    {
      question: 'Что делать, если не понравится?',
      answer:
        'Мы уверены, что тебе понравится! Но если вдруг нет - можно сменить курс или вернуть деньги в первый месяц обучения.',
    },
    {
      question: 'Можно ли родителям присутствовать?',
      answer:
        'На первом занятии - да! Потом мы рекомендуем детям заниматься самостоятельно, так они лучше учатся. Но мы всегда на связи и рассказываем об успехах!',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Вопросы и ответы 💬
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые частые вопросы о нашем клубе
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <Card className="border-2">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-primary/50 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Позвони нам</h3>
                <p className="text-muted-foreground mb-4">
                  Ответим на все вопросы по телефону
                </p>
                <a href="tel:+79991234567" className="text-primary font-semibold">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/50 hover:border-secondary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Напиши нам</h3>
                <p className="text-muted-foreground mb-4">Отправь вопрос на почту</p>
                <a href="mailto:info@digitalclub.ru" className="text-secondary font-semibold">
                  info@digitalclub.ru
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/50 hover:border-accent transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">Приезжай к нам</h3>
                <p className="text-muted-foreground mb-4">Посети наш клуб лично</p>
                <Link to="/contacts" className="text-accent font-semibold">
                  Смотреть адрес
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Не нашёл ответ на свой вопрос?</h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Свяжись с нами любым удобным способом, и мы с радостью всё объясним!
              </p>
              <Link to="/contacts">
                <Button size="lg" variant="secondary" className="text-lg px-10">
                  Связаться с нами
                  <Icon name="MessageCircle" size={20} className="ml-2" />
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

export default FAQ;
