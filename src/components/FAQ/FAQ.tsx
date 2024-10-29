"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is your design process?",
      answer:
        "Our design process involves research, planning, prototyping, and feedback to ensure the best results.",
    },
    {
      question: "What is the typical project timeline?",
      answer:
        "Timelines vary based on project scope, but we strive to deliver within a few weeks to a few months.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Pricing depends on the project scope, complexity, and timeline. We offer competitive rates tailored to each project.",
    },
    {
      question: "Can you handle urgent projects?",
      answer:
        "We can accommodate rush projects depending on our current workload. If you have an urgent deadline, let us know, and we’ll do our best to meet your requirements. Additional fees may apply for expedited work.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-16">FAQ</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span className="text-2xl">
                {openIndex === index ? "✕" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
