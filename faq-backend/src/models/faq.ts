import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IFaq extends Document {
  id: string;
  question: string;
  answer: string;
  translations: { [key: string]: string };
  getTranslatedText(lang: string): string;
}

const FaqSchema: Schema = new Schema({
  id: { type: String, default: () => uuidv4() },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: { type: Map, of: String },
});

FaqSchema.methods.getTranslatedText = function (lang: string): string {
  return this.translations.get(lang) || this.question;
};

export default mongoose.model<IFaq>("Faq", FaqSchema);
