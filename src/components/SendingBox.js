const SendingBox=()=>{
    return <div className="ml-0 mb-0 w-full h-[10%]">
        <input type="text" className=" h-10 w-[80vh] px-2  my-1 rounded-lg bg-zinc-300" width={3} placeholder="Enter Your Messages"/>
        <button className=" bg-green-500 h-10 p-2 mx-4 my-2 rounded-lg text-white">Send</button>
    </div>
}
export default SendingBox;