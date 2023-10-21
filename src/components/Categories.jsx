import React, { useState } from 'react';
import { data } from '../data/data';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const Categories = ({ item }) => {
  const [categories, setCategories] = useState(data);

  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  const activityID = doc(db, 'users', `${user?.email}`);

  const saveActivity = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(activityID, {
        savedActivities: arrayUnion({
          id: uuidv4(),
          // name: item.name,
          // img: item.image,
        }),
      });
    } else {
      alert('Please log in to save an activity! :)');
    }
  };

  // filtering categories
  const filterType = (category) => {
    setCategories(
      data.filter((item) => {
        return item.category === category;
      }),
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setCategories(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };

  //   const saveShow = async () => {
  //     if (user?.email) {
  //         setLike(!like);
  //     }
  //   }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="font-bold text-4xl text-center">Browse by Categories</h1>

      {/* Filter Row  */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-green-800 m-1">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setCategories(data)}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              {' '}
              All{' '}
            </button>
            <button
              onClick={() => filterType('physical')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              {' '}
              Physical{' '}
            </button>
            <button
              onClick={() => filterType('social')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              {' '}
              Social{' '}
            </button>
            <button
              onClick={() => filterType('culinary')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              {' '}
              Culinary{' '}
            </button>
            <button
              onClick={() => filterType('technology')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              {' '}
              Technology{' '}
            </button>
            <button
              onClick={() => filterType('humor')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              {' '}
              Humor{' '}
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-green-800 m-1">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-green-700  hover:bg-green-300 font-bold"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display categories  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg relative"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <p onClick={saveActivity}>
              {like ? (
                <FaHeart className="absolute top-4 left-4 text-gray-100" />
              ) : (
                <FaRegHeart className="absolute top-4 left-4 text-gray-100" />
              )}
            </p>
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-green-900 text-white rounded-full p-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
