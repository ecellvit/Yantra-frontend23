"use client";
import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className={`text-white flex justify-between w-full py-2 px-4 text-left font-semibold bg-black-200 hover:bg-black-300 transition-colors ${
          isOpen ? "bg-black-300" : "bg-black-200"
        }`}
        onClick={toggleAccordion}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
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
        <h1 className="p-4 text-xl font-bold text-white">
          Commonly Asked Questions
        </h1>
        <div className="divide-y divide-black-300">
          <Accordion
            title=" Do I need a team to register for the workshop?"
            content="No, You can register for all of the workshops as an individual."
          />
          <Accordion
            title="Do I need to register along with a team for The Ignitia Hack?"
            content="Yes, you need a minimum of two members to register for The Ignitia Hack."
          />
          <Accordion
            title="I want to participate in The Ignitia Hack but I can’t find any teammates, What do I do?"
            content="If you’re not able to find a teammate, we’ll find you one through the Ignitia Discord server."
          />
          <Accordion
            title="When is The Ignitia Hack scheduled?"
            content="It is scheduled to commence at 4 PM on 31st May and will continue until 10 PM, 4th June."
          />
          <Accordion
            title="Is there any registration fee for the event?"
            content="No, All the events are completely free."
          />
          <Accordion
            title="How long will The Ignitia Hack last?"
            content="It is a 36 hour hackathon."
          />
          <Accordion
            title="Will ODs be provided for the event?"
            content="Yes, ODs will be provided."
          />{" "}
          <Accordion
            title="Can I participate in multiple events during Ignitia?"
            content="Yes, you can participate in multiple events as the events are scheduled on different dates."
          />{" "}
          <Accordion
            title="Do I need any prior knowledge to participate in the hackathon?"
            content="Some elementary knowledge will be appreciated."
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
