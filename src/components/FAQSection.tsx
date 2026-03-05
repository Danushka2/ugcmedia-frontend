import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can UGC help to build an online presence or personal brand?",
    answer:
      "Yes, it showcases your voice, creativity, and expertise to a wider audience.",
  },
  {
    question: "Why is UGC considered more authentic and trustworthy than branded content?",
    answer:
      "Because it comes from content creators with genuine experiences, which relate to a larger audience.",
  },
  {
    question: "Is UGC actually worth it?",
    answer:
      "Absolutely. It feels authentic, builds trust, and outperforms traditional branded ads by 2x–4x in ROAS.",
  },
  {
    question: "How much does UGC Videos cost?",
    answer:
      "UGC video costs can vary, but typically range from $100 to $500 per video, depending on the creator, video length, and content type. Packages or bulk orders may offer better value.",
  },
  {
    question: "Can UGC videos be used for B2B marketing, or are they just for consumer brands?",
    answer:
      "Absolutely — UGC works in both B2C and B2B. In B2B, people still connect with people. Whether it's client testimonials, explainer content, or behind-the-scenes videos, authentic storytelling builds trust — which is critical in high-stakes decision-making.",
  },
  {
    question: "What's the difference between influencer content and true UGC?",
    answer:
      "Influencer content is usually branded, polished, and tied to a creator's personal following. True UGC is raw, relatable, and made to feel organic — often by everyday people, not influencers. It's designed to build trust, not just promote.",
  },
  {
    question: "Who creates the UGC videos — influencers or everyday creators?",
    answer:
      "UGC videos are usually made by everyday creators, not just influencers. They focus on real, relatable content that feels authentic and natural to the audience.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group rounded-2xl border border-border bg-card px-6 transition-all duration-300 hover:border-accent/40 hover:shadow-md data-[state=open]:border-accent data-[state=open]:shadow-xl data-[state=open]:shadow-accent/5 shadow-sm"
          >
            <AccordionTrigger className="py-4 text-left text-base font-bold text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]]:text-accent">
              {faq.question}
              <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-data-[state=open]:text-accent" />
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
