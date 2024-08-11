import React from 'react';

function ProductSection({prop,col ,resource,val}) {
  return (
   <>
   <div  className={` p-4 content-center  border-4 border-solid border-slate-900 flex-wrap flex-row justify-center mt-5 h{ w-full md:justify_center ${prop} gap-10 `}>
    <div className=' m-3 mt-10 pb-5'>
    <img className=' rounded-3xl  border-4 border-solid border-yellow-500 ' height={500} width={500} src={resource}></img>
    </div>
    <div className= ' content-center justify-center '>
    
<p className="  border rounded-3xl p-8 max-w-lg text-xl v font-semibold leading-normal bg-black text-orange-200">{val}</p>

    </div>

   </div>
   </>
  );
}

export default ProductSection;
