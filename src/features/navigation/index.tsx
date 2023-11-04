import { Link } from 'react-router-dom';
import logo from './ui/logo.jpg';
import cart from './ui/shopping-cart.svg';
import user from './ui/user.svg';

function Navigation() {
  return (
    <nav className="container max-w-screen-xl box-border flex items-center justify-between py-[16px] px-[80px]">
      <Link to="/">
        <img src={logo} alt="Логотип Комисофт." loading="lazy" />
      </Link>

      <ul className="list-style-none flex gap-2" data-te-navbar-nav-ref>
        <li className="py-[2px] px-[12px]">
          <Link
            to={''}
            className="flex flex-col transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 items-center"
            data-te-nav-item-ref
          >
            <img src={cart} alt="Иконка корзины." className="w-[24px] h-[24px]" />
            <p className="text-sm text-blue">Корзина</p>
          </Link>
        </li>
        <li className="py-[2px] px-[12px]">
          <Link
            to={''}
            className="flex flex-col transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 items-center"
            data-te-nav-item-ref
          >
            <img src={user} alt="Иконка профиля." className="w-[24px] h-[24px]" />
            <p className="text-sm text-blue">Профиль</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
