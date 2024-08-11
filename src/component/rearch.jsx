import React from 'react';
import black from "../images/black.jpg"

function Research({ prop, col, text, resourse, val }) {
  return (
    <>
     <div
      className="p-3 border-4 border-solid border-slate-900 flex flex-row flex-wrap justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${black})` }} >
        <div className=" lg:text-center text-center pt-5 text-3xl font-bold  flex flex-wrap text-yellow-200"> <h1 className=' lg:p-5 lg:text-center'>

          {text}
        </h1>
        </div>

        <div className={` gap-10 flex flex-col ${prop} lg:flex-row md:flex-row `}>

          <div className='  mt-4 pb-5 pt-1 '>
            <img className='  rounded-3xl  border-4 border-solid border-yellow-500 ' height={500} width={500} src={resourse}></img>
          </div>
          <div className='   content-center justify-center '>

            <p className="  border p-10 rounded-3xl borderp-10 max-w-lg text-xl v font-semibold leading-normal bg-black text-orange-200">{val}</p>

          </div>
        </div>

      </div>
    </>
  );
}

export default Research;
