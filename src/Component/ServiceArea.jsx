import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Free",
      desc: "Have a go and test your superpowers",
      price: "$0",
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
    },
    {
      name: "Pro",
      desc: "For those who want to take it to the next level",
      price: "$25",
      span: "Save $50 a year",
      features: [
        "2 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
    },
    {
      name: "Business",
      desc: "Unveil new superpowers and join the Design League",
      price: "$50",
      features: [
        "All the features of Pro plan",
        "Account Success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration - Soon",
      ],
    },
  ],
  yearly: [
    {
      name: "Free",
      desc: "Have a go and test your superpowers",
      price: "$0",
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
    },
    {
      name: "Pro",
      desc: "For those who want to take it to the next level",
      price: "$150",
      span: "Save $50 a year",
      features: [
        "2 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
    },
    {
      name: "Business",
      desc: "Unveil new superpowers and join the Design League",
      price: "$250",
      features: [
        "All the features of Pro plan",
        "Account Success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration - Soon",
      ],
    },
  ],
};

const ServiceArea = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section
      id="service"
      className="service-area py-12 bg-background text-foreground"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-heading">
          Choose Plan That’s Right For You
        </h2>
        <p className="mb-6 text-center text-foreground/80">
          Choose the plan that works best for you. Feel free to contact us.
        </p>

        {/* Billing toggle */}
        <div className="flex gap-2 bg-card rounded-lg shadow p-2 w-max mb-10 mx-auto">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1 rounded cursor-pointer ${
              billing === "monthly"
                ? "bg-primary text-primary-foreground"
                : "text-foreground"
            }`}
          >
            Bill Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-1 rounded cursor-pointer ${
              billing === "yearly"
                ? "bg-primary text-primary-foreground"
                : "text-foreground"
            }`}
          >
            Bill Yearly
          </button>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans[billing].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow p-6 flex flex-col transition ${
                plan.name === "Pro"
                  ? "bg-fifth text-black dark:border-2 border-primary "
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <h3 className="text-2xl text-center font-bold mb-2 text-heading">
                {plan.name}
              </h3>
              <p className="text-center mb-1 text-foreground/80">{plan.desc}</p>
              <p className="text-2xl text-center font-bold mb-2 text-heading">
                {plan.price}
              </p>
              {plan.span && (
                <span className="block text-center text-primary text-sm mb-2">
                  {plan.span}
                </span>
              )}

              <div className="grid bg-background rounded-2xl p-6 mb-6">
                <ul className="mb-6 space-y-2 text-foreground/80 mt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="#"
                    className="block w-full text-center px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-fourth dark:hover:text-white transition-colors duration-300"
                  >
                    {plan.name === "Free"
                      ? "Signup For Free"
                      : `Go to ${plan.name}`}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
