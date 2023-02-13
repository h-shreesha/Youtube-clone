import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';


const Head = () => {

    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="flex p-5 justify-between shadow-lg ">
            <div className="flex">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
                    alt="hamburgerMenu"
                    className="w-10 h-10 cursor-pointer"
                    onClick={() => toggleMenuHandler()}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
                    alt="youtubeImg"
                    className="w-40 h-10"
                />
            </div>
            <div>
                <input
                    type="text"
                    className="w-[35rem] outline-none rounded-l-full border border-gray-300 bg-slate-200 py-2 pl-5"
                />
                <button className="border border-gray-300 bg-slate-200 py-2 pl-2 pr-3 rounded-r-full  ">
                    🔍 
                </button>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQcP51A3ncwchFeonpESD-_s8Gg043M_a2g&usqp=CAU"
                    alt="userImg"
                    className="w-10 h-10"
                />
            </div>
        </div>
    );
};

export default Head;
