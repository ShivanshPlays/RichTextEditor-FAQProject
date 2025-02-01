import { Router } from "express";
import { createFaq, deleteFaq, getFaqs } from "../controllers/faqController";

const router = Router();

router.get("/", getFaqs);
router.post("/", createFaq);
router.delete("/:id", deleteFaq);

export default router;
