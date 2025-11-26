import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-accent text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                🚀
              </div>
              <span className="text-xl font-bold">Digital Клуб</span>
            </div>
            <p className="text-white/80">
              Клуб для изучения информационной культуры и цифровых технологий
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition">
                  Курсы
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-white/80 hover:text-white transition">
                  Расписание
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/achievements" className="text-white/80 hover:text-white transition">
                  Достижения
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-white/80 hover:text-white transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@digitalclub.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Digital Клуб. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
