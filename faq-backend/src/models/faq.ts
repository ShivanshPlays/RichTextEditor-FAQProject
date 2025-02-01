import mongoose, { Schema, Document } from "mongoose";

interface IFaq extends Document {
  question: string;
  answer: string;
  translations: { [key: string]: string };
  getTranslatedText(lang: string): string;
}

const FaqSchema: Schema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: { type: Map, of: String },
});

// Method to get translation
FaqSchema.methods.getTranslatedText = function (lang: string): string {
  return this.translations.get(lang) || this.question;
};

export default mongoose.model<IFaq>("Faq", FaqSchema);
