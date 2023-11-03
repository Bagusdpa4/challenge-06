import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarHome } from '../../assets/component/Header/NavbarHome';
import { Footer } from '../../assets/component/Header/Footer';
import { GetMe } from '../../redux/action/login/authLogin';
import { VscAccount } from 'react-icons/vsc';

export const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(GetMe());
  }, []);

  return (
    <div className="bg-slate-400">
      <div className="pt-16 pb-16">
        {user && (
          <div className="flex flex-col justify-center items-center rounded-md p-10">
            <div className="bg-white border-2 border-black rounded-lg p-20 text-center flex flex-col items-center">
              <VscAccount size={146} />
              <p className="font-semibold mb-2 mt-6 italic text-xl">
                Hello, Selamat Datang ...
              </p>
              <p className="text-4xl font-bold">{user.name}</p>
              <p className="text-xl font-semibold mt-2">{user.email}</p>
            </div>
          </div>
        )}
      </div>
      <NavbarHome style={{ zIndex: 2 }} />
      <Footer />
    </div>
  );
};
