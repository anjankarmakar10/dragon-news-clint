import React, { useRef, useState, useEffect } from "react";
import ButtonLogin from "../../components/buttons/ButtonLogin";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { RxAvatar } from "react-icons/rx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

const Profile = () => {
  const { logOut, user, updateProfilePhoto } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const fileRef = useRef();

  const handleUpload = async (e) => {
    e.preventDefault();
    const photo = fileRef.current.files[0];

    if (!photo) return;

    try {
      setError("");
      setMessage("");
      const imageRef = ref(storage, `profile/${photo?.name}`);
      await uploadBytes(imageRef, photo);
      const url = await getDownloadURL(imageRef);
      await updateProfilePhoto(user, url);
      setMessage("Photo sucessfully updated !!!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header isNavbar={false} isBreaking={false} />
      <div className="max-w-2xl flex-col items-center gap-4 py-8  mx-auto px-4 flex justify-center">
        <div className="flex flex-col gap-4 justify-center items-center border-2 rounded-sm p-3">
          <div>
            {user?.photoURL ? (
              <img
                className="w-60 border-8  border-cyan-900 h-60 object-contain rounded-full"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <RxAvatar size={240} />
            )}
          </div>

          <form>
            <label>
              <input
                ref={fileRef}
                type="file"
                className="text-sm text-gray-500
            file:mr-5 file:py-2 file:px-8
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
            hover:file:cursor-pointer transition-all hover:file:opacity-80 
          "
              />
            </label>
            <button
              onClick={handleUpload}
              className="p-2 rounded-md mx-2 px-4 bg-gradient-to-r from-blue-600 to-amber-600 text-sm text-white font-semibold"
            >
              Upload
            </button>
          </form>
          {error && (
            <div className="bg-[#E8F0FE] p-2 rounded-md text-sm font-semibold text-[#fd3636] mb-2">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-[#06bb4b] p-2 rounded-md text-sm font-semibold text-[#ffffff] mb-2 hidden">
              {message}
            </div>
          )}
        </div>

        <div onClick={handleSignOut}>
          <ButtonLogin>Sign out</ButtonLogin>
        </div>
      </div>
    </>
  );
};

export default Profile;
