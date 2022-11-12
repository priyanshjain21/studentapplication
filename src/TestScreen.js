import React, { useState } from 'react'
import trashBin from '../src/trashBin.png'
import ScoreBoard from './ScoreBoard';



const questionBank = [
  {
    
    question:
      "Which type of JavaScript language is ___",
    answers: ["Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"],
    correct: "Object-Based",
    index: 0
  },
  {
    
    question:
      "The function and var are known as:",
    answers: ["Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"],
    correct: "Declaration statements",
    index: 1
  },
  {
    question:
      "Which type of JavaScript language is ___",
    answers: ["Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"],
    correct: "Object-Based",
    index: 2
  },
  {
    question:
      "The function and var are known as:",
    answers: ["Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"],
    correct: "Declaration statements",
    index: 3
  }
 
];

const TestScreen = () => {
  const [list, setList] = useState(questionBank);
  const [admin,setAdmin]=useState(true);
  const [open,setOpen]=useState(false)
  
 const handleRemove=(index)=>{
  setList(current =>
    current.filter(item => {
      return item.index !==index ;
    }),
  );
 }
 const handleAddMore=()=>{
  // const updated_list=list.push({
  //   question:
  //     "The function and var are known as:",
  
  // })
  // setList(updated_list)
  
 }
  return (
    <>
    <div className="justify-center flex items-center min-h-screen drop-shadow-2xl">
      <form
        // onSubmit={handleSubmit}
        className="bg-white p-5 md:p-8 max-w-[500px] space-y-6 border-4 w-11/12"
      >
        <h2 className="text-3xl p-2 hover:bg-green-100 animate-bounce ">Javascript Quiz</h2>
        {list.map((ques, index) => {
          return (
            <>
              <div key={ques.index}className="flex flex-col space-y-2">
                <label className="text-black">
                  {ques.question}
                </label>

                <select
                  id="category"
                  name="category"
                  className="bg-gray-200 p-4 rounded-md focus:bg-gray-300 "
                >
                  {ques.answers.map((e) => {
                    return (
                      <option value="">{e}</option>
                    )
                  })}

                </select>
              </div>
             { admin && <button type="button" onClick={() => handleRemove(ques.index)}>
                <img src={trashBin} style={{ height: "30px", paddingRight: "10px" }}/>
              </button>  }         
               </>
          )
        })}
        <button
          type="submit"
          className="bg-green-600 rounded-md w-full p-4 text-white hover:bg-green-400 hover:animate-pulse"
          // onClick={()=>{setOpen(true)}}
        >
          Submit
        </button>
        <button
          type="submit"
          className="bg-green-600 rounded-md w-full p-4 text-white hover:bg-green-400 hover:animate-pulse"
          onClick={()=>handleAddMore()}
        >
          Add More Questions
        </button>
      </form>
    </div>
    {open && <ScoreBoard/>}
    </>
    
  );
};

export default TestScreen