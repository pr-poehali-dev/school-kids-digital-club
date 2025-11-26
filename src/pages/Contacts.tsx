import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена! 🎉',
      description: 'Мы свяжемся с тобой в ближайшее время!',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
      color: 'primary',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@digitalclub.ru',
      link: 'mailto:info@digitalclub.ru',
      color: 'secondary',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 123',
      link: 'https://maps.google.com',
      color: 'accent',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Контакты 📞
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжись с нами любым удобным способом!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer">
                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full bg-${contact.color}/10 flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={contact.icon} size={32} className={`text-${contact.color}`} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{contact.title}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Запишись на пробное занятие</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Твоё имя</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Как тебя зовут?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон родителей</label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Сообщение (необязательно)
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажи, чем интересуешься..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-0 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/19832d95-4dc4-480a-97b2-f4374e53ecea/files/a94e0bf6-0e16-46cd-b1ba-73731c7ffba8.jpg"
                    alt="Digital Club"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-2xl mb-4">Приходи к нам в гости!</h3>
                    <p className="text-muted-foreground mb-4">
                      Мы находимся в самом центре города. У нас современные классы, мощные
                      компьютеры и дружелюбная атмосфера!
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <div>
                          <p className="font-medium">График работы</p>
                          <p className="text-sm text-muted-foreground">Пн-Сб: 15:00 - 20:00</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <div>
                          <p className="font-medium">Адрес</p>
                          <p className="text-sm text-muted-foreground">
                            г. Москва, ул. Примерная, д. 123
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Быстрые ответы 💬</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <p className="text-sm">Отвечаем на звонки с 9:00 до 20:00</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <p className="text-sm">На email отвечаем в течение 24 часов</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <p className="text-sm">Первое пробное занятие бесплатно!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
