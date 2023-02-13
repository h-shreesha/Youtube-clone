import React from 'react';
import { useSelector } from 'react-redux';


const SideBar = () => {
    
  const isMenuOpen  = useSelector((state) => state.app.isMenuOpen)

  if(!isMenuOpen) return null

      return (
        <div>
            <div className="px-5 shadow-xl pt-5">
                <ul>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Video</li>
                    <li>Live</li>
                </ul>
                <h1 className="font-bold text-lg pt-5">Subscriptions</h1>
                <ul>
                    <li>Musics</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
                <h1 className="font-bold text-lg pt-5">Watch Later</h1>
                <ul>
                    <li>Musics</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
