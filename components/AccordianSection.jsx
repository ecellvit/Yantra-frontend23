"use client"
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className={`text-white flex justify-between w-full py-2 px-4 text-left font-semibold bg-black-200 hover:bg-black-300 transition-colors ${
          isOpen ? 'bg-black-300' : 'bg-black-200'
        }`}
        onClick={toggleAccordion}
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-black text-white transition-opacity duration-300">
          {content}
        </div>
      )}
    </div>
  );
};

const AccordionPage = () => {
  return (
    <div className="flex justify-center items-center pb-10 p-8">
        <div className="hidden sm:flex md:flex w-1/2 text-white justify-center items-center text-5xl p-5">
            Answers to some commonly asked questions!!
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 bg-black-200">
        <h1 className="p-4 text-xl font-bold text-white">Commonly Asked Questions</h1>
        <div className="divide-y divide-black-300">
          <Accordion
            title="Question 1"
            content="Answer to question 1"
          />
          <Accordion
            title="Question 2"
            content="Answer to question 2"
          />
          <Accordion
            title="Question 3"
            content="Answer to question 3"
          />
          <Accordion
            title="Question 4"
            content="Answer to question 4"
          />
          <Accordion
            title="Question 5"
            content="Answer to question 5"
          />
          <Accordion
            title="Question 6"
            content="Answer to question 6"
          />
          <Accordion
            title="Question 7"
            content="Answer to question 7"
          />
        </div>
        </div>
    </div>
  );
};

export default AccordionPage;
