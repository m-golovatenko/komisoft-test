import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-8 px-[80px] bg-dark flex justify-between items-center box-border">
      <p className="text-base text-white">Тестовое задание для Комисофт от Маши Головатенко</p>
      <ul className="flex gap-4">
        <li className="text-base text-white py-2 px-3 bg-black hover:opacity-70 rounded-lg">
          <Link to="https://github.com/m-golovatenko" target="_blank">
            Github &#8594;
          </Link>
        </li>
        <li className="text-base text-white py-2 px-3 bg-black hover:opacity-70 rounded-lg">
          <Link to="https://t.me/pikchay" target="_blank">
            Telegram &#8594;
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
