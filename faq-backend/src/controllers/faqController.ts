import { Request, Response } from "express";
import Faq from "../models/faq";
// import translate from "google-translate-api";
import redisClient from "../config/redisConfig";
import { translate } from "@vitalets/google-translate-api";

export const getFaqs = async (req: Request, res: Response): Promise<any> => {
  try {
    const lang = req.query.lang as string || "en";
    const cachedData = await redisClient.get(`faqs_${lang}`);

    if (cachedData) return res.json(JSON.parse(cachedData));

    const faqs = await Faq.find();
    const translatedFaqs = faqs.map(faq => ({
      question: faq.getTranslatedText(lang),
      answer: faq.answer
    }));

    await redisClient.set(`faqs_${lang}`, JSON.stringify(translatedFaqs));

    res.json(translatedFaqs);
  } catch (error: unknown) {
    const e = error as Error;
    res.status(500).json({ error: e.message });
  }
};

// Create FAQ with auto-translation
export const createFaq = async (req: Request, res: Response) => {
  try {
    const { question, answer } = req.body;

    console.log(req.body)
    const translations: { [key: string]: string } = {};

    for (const lang of ["hi", "bn"]) {
      const translatedText = await translate(question, { to: lang });
      translations[lang] = translatedText.text;
    }

    const faq = new Faq({ question, answer, translations });
    await faq.save();

    res.status(201).json(faq);
  } catch (error) {
    console.log(error)
    const e = error as Error
    res.status(500).json({ error: e.message });
  }
};

// Delete FAQ
export const deleteFaq = async (req: Request, res: Response) => {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    const e = error as Error
    res.status(500).json({ error: e.message });
  }
};
