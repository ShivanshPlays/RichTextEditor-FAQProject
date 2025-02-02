"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2 } from "lucide-react";
import { deleteFAQ, FAQ, fetchFAQs } from "@/api/faqsAPI";
import { languages } from "./faqList";
import toast, { Toaster } from "react-hot-toast";
import FaqEditForm from "./faqEditForm";

export default function AdminFaqList() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await fetchFAQs({ lang: `${language}` });
        console.log(data);
        setFaqs(data);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
      }
    };
    loadFAQs();
  }, [language]);

  const handleDelete = async (id: string) => {
    const loadingToast = toast.loading("Deleting FAQ...");

    try {
      await deleteFAQ(id);

      setFaqs(faqs.filter((faq) => faq.id !== id));

      toast.success("FAQ deleted successfully!", {
        id: loadingToast,
      });
    } catch (error) {
      toast.error("Failed to delete FAQ. Please try again.", {
        id: loadingToast,
      });
      console.error("Error deleting FAQ:", error); // Log the error for debugging
    }
  };
  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq); // Set the FAQ being edited
  };

  const handleCancelEdit = () => {
    setEditingFaq(null); // Reset edit state
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Toaster />
      {editingFaq ? (
        <div className="p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-semibold mb-4">Edit FAQ</h2>
          <FaqEditForm
            id={editingFaq.id}
            originalQuestion={editingFaq.question}
            originalAnswer={editingFaq.answer}
            setEditingFaq={setEditingFaq}
          />
          <Button variant="outline" className="mt-2" onClick={handleCancelEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              placeholder="Search FAQs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px] text-black">
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredFaqs.map((faq) => (
              <Card key={faq.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <CardDescription>Language: {faq.language}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    className="prose"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(faq)}
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(faq.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
