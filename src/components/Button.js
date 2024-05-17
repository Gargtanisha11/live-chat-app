const Button = ({ name, }) => {
  return (
    <div>
      <button className=" bg-slate-700 text-white font-semibold text-xl rounded-xl px-4 py-2 my-[2%]  w-[50%]">{name}</button>
    </div>
  );
};

export default Button;
