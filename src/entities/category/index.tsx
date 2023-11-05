import { MouseEventHandler } from 'react';

function Category({
  title,
  handleClick,
  active,
  id
}: {
  title: string;
  handleClick: MouseEventHandler;
  active: string;
  id: string;
}) {
  return (
    <li
      className={
        active === id
          ? 'list-none p-3 bg-blue rounded-lg w-48 text-base text-white hover:opacity-70 hover:cursor-pointer'
          : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
      }
      onClick={handleClick}
    >
      {title}
    </li>
  );
}

export default Category;
