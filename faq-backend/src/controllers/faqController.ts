import { Request, Response } from "express";
import Faq from "../models/faq";
import redisClient from "../config/redisConfig";
import { acronyms } from "../../data.json";
import translate from "google-translate-api-x";

const updateFaqCache = async (lang: string) => {
  const faqs = await Faq.find();
  const translatedFaqs = faqs.map((faq) => ({
    id: faq.id,
    question: faq.getTranslatedText(lang),
    answer: faq.answer,
  }));

  await redisClient.set(`faqs_${lang}`, JSON.stringify(translatedFaqs), {
    EX: 3600,
  });
};

export const getFaqs = async (req: Request, res: Response): Promise<any> => {
  try {
    const lang = (req.query.lang as string) || "en";
    const cacheKey = `faqs_${lang}`;

    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("GET_CACHE_HIT");
      return res.json(JSON.parse(cachedData));
    }

    console.log("GET_CACHE_NO_HIT");

    const faqs = await Faq.find();
    
    const translatedFaqs = faqs.map((faq) => {
      return{
      id: faq.id,
      question: faq.getTranslatedText(lang) ,
      answer: faq.answer,
      }
    });

    await redisClient.set(cacheKey, JSON.stringify(translatedFaqs), {
      EX: 3600,
    });

    res.json(translatedFaqs);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const createFaq = async (req: Request, res: Response): Promise<any> => {
  try {
    const { question, answer } = req.body;
    const translations: { [key: string]: string } = {};

    for (const lang of acronyms) {
      // const translatedText = await googleTranslate(question, { to: lang });
      const translatedText = await translate(question, { to: lang });

      if (Array.isArray(translatedText)) {
        translations[lang] = translatedText[0].text;
      } else if (typeof translatedText === "object" && translatedText.text) {
        translations[lang] = translatedText.text.toString();
      } else {
        translations[lang] = question;
      }
    }

    const faq = new Faq({ question, answer, translations });
    await faq.save();

    for (const lang of acronyms) {
      await updateFaqCache(lang);
    }

    res.status(201).json(faq);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const editFaq = async (req: Request, res: Response): Promise<any> => {
  try {
    const { question, answer } = req.body;

    const id = req.query.id;

    const faq = await Faq.findOne({
      id,
    });
    if (!faq) return res.status(404).json({ error: "FAQ not found" });

    const isQuestionUpdated = question && question !== faq.question;

    if (isQuestionUpdated) {
      faq.question = question;
      const translations: { [key: string]: string } = {};

      for (const lang of acronyms) {
        const translatedText = await translate(question, { to: lang });

        if (Array.isArray(translatedText)) {
          translations[lang] = translatedText[0].text;
        } else if (typeof translatedText === "object" && translatedText.text) {
          translations[lang] = translatedText.text.toString();
        } else {
          translations[lang] = question;
        }
      }

      faq.translations = translations;
    }

    faq.answer = answer || faq.answer;
    await faq.save();

    for (const lang of acronyms) {
      await updateFaqCache(lang);
    }

    res.status(200).json(faq);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteFaq = async (req: Request, res: Response): Promise<any> => {
  try {
    // const { id } = req.params;
    const id = req.query.id;
    console.log(id + "to be deleted");
    const faq = await Faq.findOneAndDelete({
      id: id,
    });
    // const faq = await Faq.findByIdAndDelete(id);
    if (!faq) return res.status(404).json({ error: "FAQ not found" });

    for (const lang of acronyms) {
      await updateFaqCache(lang);
    }

    res.status(200).json({
      "message":"Successfully Deleted"
    });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};
