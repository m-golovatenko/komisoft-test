import { MouseEventHandler } from 'react';

function Category({ title, handleClick }: { title: string; handleClick: MouseEventHandler }) {
  return (
    <li
      className="list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </li>
  );
}

export default Category;
