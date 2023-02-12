import React from 'react';

const Head = () => {
    return (
        <div className="flex p-5 justify-between ">
            <div className="flex">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
                    alt="hamburgerMenu"
                    className="w-10 h-10"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
                    alt="youtubeImg"
                    className="w-40 h-10"
                />
            </div>
            <div>
                <input type="text" 
                className='w-[35rem] border-gr'/>
                <button>🔍 Search</button>
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
