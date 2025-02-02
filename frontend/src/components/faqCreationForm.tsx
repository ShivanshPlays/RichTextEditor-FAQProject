"use client";

import  React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFAQ } from "@/api/faqsAPI";
import toast, { Toaster } from 'react-hot-toast';

export default function FaqCreationForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createFAQ({question,answer})
      setQuestion("");
      setAnswer("");
      toast.success("FAQ created successfully!");
    } catch (error) {
      console.error("Error creating FAQ:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Toaster />
      <div>
        <Label htmlFor="question">Question</Label>
        <Input id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="answer">Answer</Label>
        <div className="border  rounded-md p-2">
          <ReactQuill theme="snow" value={answer} onChange={setAnswer} />
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Publishing..." : "Publish FAQ"}
      </Button>
    </form>
  );
}
