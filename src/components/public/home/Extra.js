import React from 'react';

const Extra = () => {
    return (
        <div className='justify-center pb-10 space-y-3'>
            
            <div className='bg-slate-400/10 rounded p-3 fromLeft flex flex-wrap gap-x-10 gap-y-5 justify-center'>
                <img src="https://i.pinimg.com/originals/f1/13/90/f113905fe574931e323146cbf829edc1.jpg" alt="" className='max-w-sm w-full object-cover object-top rounded'/>
                <div className='max-w-sm w-full'>
                <h3 className='text-xl text-gray-900 font-medium my-3 uppercase'>Chittagong Office :</h3>
                <p className='text-lg font-medium text-gray-800 underline decoration-2'>Address :</p><address className='text-lg font-medium text-gray-700 no-underline'>Lane No. 02, Road No. 01, K-Block R/A, Halishahar, Chittagong</address>
                </div>
            </div>


            <div className='bg-slate-400/10 rounded p-3 fromLeft flex flex-wrap-reverse justify-center gap-x-10 gap-y-5'>
                <div className='max-w-sm w-full'>
                <h3 className='text-xl text-gray-900 font-medium my-3 uppercase'>Dhaka Office :</h3>
                <p className='text-lg font-medium text-gray-800 underline decoration-2'>Address :</p><address className='text-lg font-medium text-gray-700 no-underline'>14/a, Road No. 05, Elephant Road, Dhaka</address>
                </div>
                <img src="https://thumbs.dreamstime.com/b/bangladesh-april-top-views-empty-shapla-chattar-motijheel-coronavirus-shutdown-movement-dhaka-178442642.jpg" alt="" className='max-w-sm w-full object-cover object-top rounded' />
            </div>

        </div>
    );
};

export default Extra;