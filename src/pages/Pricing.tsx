
import { useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with AI",
      price: "$99",
      period: "per month",
      features: [
        "1 AI model",
        "5,000 API calls per month",
        "Basic analytics dashboard",
        "Email support",
        "2 team members",
        "7-day data retention",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      price: "$299",
      period: "per month",
      features: [
        "3 AI models",
        "50,000 API calls per month",
        "Advanced analytics & reporting",
        "Priority email & chat support",
        "10 team members",
        "30-day data retention",
        "Custom model training",
        "API rate limit increase",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Unlimited AI models",
        "Custom API call limits",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Unlimited team members",
        "Custom data retention",
        "SLA guarantees",
        "On-premise deployment option",
        "Custom integration services",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Pricing Plans
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              Simple, Transparent Pricing
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              Choose the right plan for your business needs. No hidden fees or
              long-term commitments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-xl overflow-hidden border ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
                variants={fadeIn}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div
                  className={`p-6 ${plan.popular ? "pt-10" : "pt-6"}`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our pricing and plans."
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question: "Can I switch plans at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated and reflected in your next billing cycle.",
              },
              {
                question: "What happens if I exceed my API call limit?",
                answer:
                  "If you exceed your monthly API call limit, additional calls will be charged at our standard overage rate. You'll be notified when you reach 80% of your limit so you can upgrade if needed.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes, we offer a 14-day free trial on our Professional plan so you can experience the full power of our platform before committing.",
              },
              {
                question: "Are there any long-term contracts?",
                answer:
                  "No, all our plans are month-to-month with no long-term commitment required. You can cancel at any time.",
              },
              {
                question: "Can I get a custom plan for my specific needs?",
                answer:
                  "Absolutely! Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored solution.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started with Adept AI?"
        description="Choose the plan that's right for you and start transforming your business today."
        primaryButtonText="View Plans"
        primaryButtonLink="#"
        secondaryButtonText="Contact Sales"
        secondaryButtonLink="/contact"
        background="light"
      />
    </div>
  );
};

export default Pricing;
