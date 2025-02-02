import { Router } from "express";
import {
  createFaq,
  deleteFaq,
  editFaq,
  getFaqs,
} from "../controllers/faqController";

const router = Router();

router.get("/", getFaqs);
router.post("/", createFaq);
router.delete("/", deleteFaq);
router.put("/", editFaq);

export default router;
