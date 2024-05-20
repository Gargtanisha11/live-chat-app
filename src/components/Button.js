const Button = ({ name, onClickFunc }) => {
  return (
    <div>
      <button onClick={()=>onClickFunc()} className="  bg-slate-900 font-semibold rounded-xl px-4 py-2 my-[2%] mx-5  ">{name}</button>
    </div>
  );
};

export default Button;
