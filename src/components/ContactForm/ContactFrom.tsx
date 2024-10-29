"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  const serviceOptions = [
    "UI/UX Design",
    "Web Design",
    "Motion",
    "Graphics",
    "Branding",
    "Video Edit",
  ];

  const budgetOptions = [
    "Under $1,999",
    "$2,000",
    "$5,000",
    "$10,000",
    "$20,000",
    "$50,000",
    "Above 50K",
  ];

  return (
    <div id="contact" className="mt-20 ">
      <h2 className="text-3xl font-bold text-center mb-6">CONTACT</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-[#C3C3C3]  p-4 rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              {...register("company", { required: true })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.company && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="WhatsApp (Optional)"
              {...register("whatsapp")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>

        <div className="border flex bg-white rounded-md items-center justify-between p-3">
          <label className="block font-medium mb-2 text-gray-400">
            Service Needed
          </label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((service) => (
              <button
                type="button"
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 rounded-lg ${selectedService === service ? "bg-gray-600 text-white" : "bg-gray-200"} transition-colors`}
              >
                {service}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            value={selectedService}
            {...register("service", { required: true })}
          />
          {errors.service && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="border flex bg-white rounded-md items-center justify-between p-3">
          <label className="block font-medium mb-2 text-gray-400">
            Estimate Budget
          </label>
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map((budget) => (
              <button
                type="button"
                key={budget}
                onClick={() => setSelectedBudget(budget)}
                className={`px-4 py-2 rounded-lg ${selectedBudget === budget ? "bg-gray-600 text-white" : "bg-gray-200"} transition-colors`}
              >
                {budget}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            value={selectedBudget}
            {...register("budget", { required: true })}
          />
          {errors.budget && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <textarea
          placeholder="About Project"
          {...register("aboutProject", { required: true })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {errors.aboutProject && (
          <span className="text-red-500">This field is required</span>
        )}

        <button
          type="submit"
          className="w-full h-[194px]    bg-white text-red-600 text-4xl font-bold rounded-lg  transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
