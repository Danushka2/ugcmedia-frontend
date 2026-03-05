import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowRight, Sparkles } from "lucide-react";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({ title: "Invalid email", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "You're in! 🎉", description: "Thanks for subscribing to our newsletter." });
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Join 10,000+ marketers
        </div>

        <h2 className="text-5xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Never miss a{" "}
          <span className="text-gradient-hero">game-changing</span>
          <br />
          UGC update
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
          Weekly insights on AI video trends, creator tips, and strategies that top brands use to 3x their ROAS.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md gap-2">
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full border-border/50 bg-background pl-5 pr-4 text-sm shadow-lg shadow-accent/5 focus-visible:ring-accent"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="h-12 rounded-full bg-foreground px-6 font-semibold text-background shadow-lg hover:bg-foreground/90"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground/50">
          Free forever · No spam · Unsubscribe anytime
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
