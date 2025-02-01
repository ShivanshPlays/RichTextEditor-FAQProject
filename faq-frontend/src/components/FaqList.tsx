import React, { useEffect, useState } from "react";
import { fetchFaqs } from "../api";

interface FaqI{
    question:string,
    answer:string
}
const FaqList: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqI[]>([]);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    fetchFaqs(lang).then(setFaqs);
  }, [lang]);

  return (
    <div>
      <select onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
      </select>
      <ul>
        {faqs.map((faq, idx) => (
          <li key={idx}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqList;
