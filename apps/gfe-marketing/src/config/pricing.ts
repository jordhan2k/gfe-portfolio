import { PlanType } from "@repo/ui/src/components/marketing/pricing-section-tiers";

const PRICING_SUPPORTING_TEXT = "Pricing Tiers";
const PRICING_TITLE = "Fit for all your needs";
const PRICING_DESC =
  "Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.";

const PRICING_PLANS: PlanType[] = [
  {
    type: "monthly",
    plans: [
      {
        plan: "basic",
        description: "Access to a curated selection of abstract images",
        price: 9.99,
        features: [
          "Standard quality images",
          "Limited to personal use",
          "Email support",
        ],
        buttonProps: {
          children: "Buy now",
        },
      },
      {
        plan: "standard",
        description: "Next-level Integrations, priced economically",
        popular: true,
        price: 19.99,
        features: [
          "Expanded library with more diverse abstract images",
          "High-resolution images available",
          "Suitable for commercial use",
          "Priority email support",
          "Advanced analytics",
        ],
        buttonProps: {
          children: "Buy now",
        },
      },
      {
        plan: "premium",
        description: "Experience limitless living for power users",
        price: 29.99,
        features: [
          "Full access to the entire image library, including exclusive content",
          "Highest quality images, including premium collections",
          "Commercial and resale rights",
          "Dedicated customer support line",
          "24/7 support response time",
          "Advanced analytics and insights",
        ],
        buttonProps: {
          children: "Buy now",
        },
      },
    ],
  },
  {
    type: "annually",
    plans: [
      {
        plan: "basic",
        description: "Access to a curated selection of abstract images",
        price: 6.99,
        totalPrice: 84,
        features: [
          "Standard quality images",
          "Limited to personal use",
          "Email support",
        ],
        buttonProps: {
          children: "Buy now",
        },
      },
      {
        plan: "standard",
        description: "Next-level Integrations, priced economically",
        popular: true,
        price: 15.99,
        totalPrice: 192,
        features: [
          "Expanded library with more diverse abstract images",
          "High-resolution images available",
          "Suitable for commercial use",
          "Priority email support",
          "Advanced analytics",
        ],
        buttonProps: {
          children: "Buy now",
        },
      },
      {
        plan: "premium",
        description: "Experience limitless living for power users",
        price: 25.99,
        totalPrice: 312,
        features: [
          "Full access to the entire image library, including exclusive content",
          "Highest quality images, including premium collections",
          "Commercial and resale rights",
          "Dedicated customer support line",
          "24/7 support response time",
          "Advanced analytics and insights",
        ],
        buttonProps: {
          children: "Buy now",
        },
      },
    ],
  },
];

export { PRICING_PLANS, PRICING_DESC, PRICING_SUPPORTING_TEXT, PRICING_TITLE };
