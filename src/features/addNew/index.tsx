import { MouseEventHandler } from 'react';

function AddNew({ handleOpen }: { handleOpen: MouseEventHandler }) {
  return (
    <div className="flex justify-center py-8">
      <button
        className="py-3 px-6 bg-blue rounded-lg text-white text-base hover:cursor-pointer transition duration-150 ease-in-out"
        type="button"
        onClick={handleOpen}
      >
        Добавить продукт
      </button>
    </div>
  );
}

export default AddNew;
