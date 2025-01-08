// src/components/FAQ.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What Are The Benefits Of Online Trading?",
      answer: "Online trading offers convenience, real-time market data, and lower transaction costs.",
    },
    {
      question: "What Are The Challenges Of Online Trading?",
      answer: "Online trading may require technical knowledge, discipline, and risk management skills.",
    },
    {
      question: "How Do I Start Online Trading?",
      answer: "To start online trading, you need to open a brokerage account, fund it, and choose your preferred investment options.",
    },
    {
      question: "What Is An Online Trading Account, How Does It Work?",
      answer: "An online trading account allows you to buy and sell stocks, bonds, and other securities from your computer or mobile device.",
    },
    {
      question: "How To Create A Trading Account?",
      answer: "Visit a trusted brokerage, complete their application, and submit the necessary identification documents.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-8">Frequently <span className="text-red-500 font-bold ">Asked Questions</span></h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">{faq.question}</h4>
                  <span className="text-green-500">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <motion.p
                    className="mt-2 text-green-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center hover:-translate-y-1 hover:scale-110 duration-300 pl-20">
        <img src="assets/fqa.png" alt="FAQ Illustration" className="w-full h-auto rounded-lg " />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
