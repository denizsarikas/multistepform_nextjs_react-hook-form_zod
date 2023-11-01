"use client";

import { useState } from "react";

const steps = [
  { id: "Step 1", name: "Personal Information" },
  { id: "Step 2", name: "Address" },
  { id: "Step 3", name: "Complete" },
];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="flex flex-col">
        <div>burada stepler yanyana olacak sekilde maplenecek</div>
      <form className="">
        {currentStep === 0 && (
          <div>
            <div>
              <label htmlFor="name">Adınız:</label>
              <input type="text" placeholder="Adınız..." />
              <label htmlFor="surname">Soyadınız:</label>
              <input type="text" placeholder="Soyadınız..." />
            </div>
            <div>
              <label htmlFor="e-mail">E-Posta:</label>
              <input type="mail" placeholder="deniz@mail.com" />
              <label htmlFor="phone">Numaranız:</label>
              <input type="phone" placeholder="0XXX-XXX-XX-XX" />
            </div>
          </div>
        )}
      </form>

        <div className="">
          <button>ileri</button>
          <button>geri</button>
        </div>
    </section>
  );
}
