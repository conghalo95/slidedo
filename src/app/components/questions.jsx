"use client"
import { useState } from "react";
import questionData from "../../../public/data/questionUI";

const Questions = () => {

    const [showAnswer, setShowAnswer] = useState(false);
    

    return (
        <div className="flex h-fit border-y  bg-white text-neutral-600">
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
            <div className="grow px-5 2xl:px-0 my-20">
                <div className="sm:grid sm:grid-cols-12">
                    <div className="w-full sm:w-[80%] sm:col-span-5 mx-auto sm:mx-0 lg:mx-0 text-center sm:text-left">
                        <p className="font-semibold text-blue-600 tracking-tight">Các câu hỏi thường gặp</p>
                        <p className="font-bold text-4xl tracking-tight text-neutral-800 my-4">Những vấn đề bạn cần quan tâm</p>
                    </div>
                    <div className="sm:col-span-7 sm:divide-y sm:-mt-5">
                        {questionData.map((questionItem, questionIndex) => {
                            return (
                                <div key={questionIndex} className="sm:pt-5">
                                    <button onClick={() => setShowAnswer(questionItem)} className="flex w-full text-left relative pb-5 hover:text-blue-600">
                                        <p className="font-semibold w-[90%] lg:grow">{questionItem.question}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute right-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                    {showAnswer === questionItem && <p className="mb-5">{questionItem.answer}</p>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-0 2xl:flex-none 2xl:w-[15%]"></div>
        </div>
    );
};

export default Questions;