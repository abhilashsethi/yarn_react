import React from "react";
import { useState } from "react";

const Container = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    // setCount((prevCount) => prevCount - 1);
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
    //subtract by -1
    // setCount(count -  1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <main className="w-100% bg-blue-100 my-10 p-10 flex">
        <div>
          <h1 className="text-3xl font-bold my-6">The blogging website</h1>
          <p>
            Lorem ipsum dolor sit amen consectetur adipisicing elite. Vel endue
            venite quasi option repellent's dubious possums officio dolores
            accusals obcaecati a, assumed fugit debits quod fugit temporizes
            magna aliquant doit quae maxima nebo dolor amen? pariah's corporal
            dolores nescient fugit et commode quod officio ipsum explicable
            doit! Delegati anim distinction consequently, exercitation minima
            dicta rem labarum endue inure culpa presenting odic inventors
            sapient consectetur pianissimos tenter doloremque nat's! Facer, vera
            illume quibusdam ulema fugal quia temporal solute dicta. Consecrator
            nisi, preferences quia, eagle laborer nebo ex asperities illume
            labarum dolorous excepting quadrat? Officio quod ut debits, placet
            eum laudanum quid's.
          </p>

          <div className="buttons">
            <button
              onClick={incrementCount}
              className="bg-emerald-400 rounded-2xl p-2 my-10 text-white hover:text-slate-900 hover:bg-purple-400 ease-in duration-300 "
            >
              Increment
            </button>
            <button
              onClick={decrementCount}
              className="bg-teal-400 rounded-2xl p-2 mx-4 my-10"
            >
              Decrement
            </button>
          </div>
          <span className="text-2xl">{count}</span>
        </div>
        <div className="flex content-center">
          <img
            src="https://raw.githubusercontent.com/CodeWithHarry/Master-Tailwind/master/Tailwind%20Tutorial%203/bg.png"
            alt=""
            className="w-screen"
          />
        </div>
      </main>
      <div className="lg:container lg:mx-auto bg-indigo-500 h-32">
        <h2 className="text-2xl text-center text-gray-200">Container</h2>
      </div>
    </>
  );
};

export default Container;
