function Category({ title }: { title: string }) {
  return (
    <li className="list-none p-3 bg-light rounded-lg w-44 text-base hover:opacity-70 hover:cursor-pointer">
      {title}
    </li>
  );
}

export default Category;
