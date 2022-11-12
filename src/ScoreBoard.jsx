import React from 'react'
let score="50"
let correct="5"

const ScoreBoard = () => {
  return (
    <div> 
        <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">
          <div className=" text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12">
            <h4 className="text-3xl pb-3 text-center font-bold">
              Your score is{" "}
              <span className={score > 40 ? "text-green-600" : "text-red-600"}>
                {score}%
              </span>
            </h4>
            <p className="py-2">
              You got {correct}/10
            </p>
            {(score > 40) && <p className="py-2 font-medium animate-ping">Congrats!!!</p>}
            <button
              className="bg-yellow-600 py-2 px-7 rounded-xl text-white mt-2 hover:bg-yellow-500 animate-pulse"
              // onClick={closeModal}
            >
              Start Again
            </button>
          </div>
          </div>
      </div>
  )
}

export default ScoreBoard