import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FAQ, fetchFAQs } from "@/api/faqsAPI";

export const languages = [
  { title: "English", code: "en" },
  { title: "Bengali", code: "bn" },
  { title: "Hindi", code: "hi" },
  { title: "Kannada", code: "kn" },
  { title: "Malayalam", code: "ml" },
];

export default function FaqList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");

  const [faqs, setFaqs] = useState<FAQ[]>([]);

  // Fetch FAQs on component mount
  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await fetchFAQs({ lang: `${language}` });
        setFaqs(data);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
      }
    };
    loadFAQs();
  }, [language]);


  const filteredFaqs = faqs.filter(
    (faq) =>
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Input
          placeholder="Search FAQs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang, index) => (
              <SelectItem key={index} value={lang.code}>
                {lang.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <Card key={faq.id}>
            <CardHeader>
              <CardTitle>{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
