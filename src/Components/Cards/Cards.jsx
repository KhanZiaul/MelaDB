import React from 'react';

const Cards = ({ datas }) => {

    console.log(datas)

    return (

        <div className='grid grid-cols-3 my-8 gap-5 px-5'>
            {
                datas ? datas.map((data) => {
                    return (
                        <div key={data.idMeal} className='border-2 rounded-xl p-5'>
                            <img className='rounded-xl' src={data.strMealThumb
                            } alt="" />
                            <h2 className='text-3xl text-center my-5'>{data.strMeal}</h2>
                        </div>
                    )
                }) : ''
            }

        </div>
    );
};

export default Cards;
















// import React from 'react';

// const Cards = (props) => {

//     console.log(props)

//     // const {strMealThumb , strMeal , shipping , ratings , quantity , price} = props.food;

//     // const addToCart = props.addToCart;

//     // return (
//     //     <div className='border-2 border-gray-500 p-5 '>
//     //         <div className='mb-4'>
//     //        <img className='rounded-xl' src={strMealThumb} alt=""/>
//     //        <h2 className='text-center text-xl font-bold my-4'>{strMeal}</h2>
//     //        <p className='text-xl font-medium mb-3'>Price : ${price}</p>
//     //        <p className='text-xl font-medium mb-3'>Ratings : {ratings} stars</p>
//     //         </div>
//     //        {/* <p onClick={()=>addToCart(props.food)} className='text-center text-white bg-slate-600 p-3 hover:bg-green-900 relative cursor-pointer'>Add To Cart</p> */}
//     //     </div>
//     // );
// };

// export default Cards;