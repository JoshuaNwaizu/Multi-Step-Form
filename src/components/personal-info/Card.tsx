import Form from "./Form";

const Card = () => {
  return (
    <section className="mx-5 translate-y-[4rem] rounded-xl bg-[#fff] px-5 py-9">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#022959]"> Personal info</h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            Please provide your name, email address, and phone number.
          </p>
        </span>

        <span className="flex flex-col gap-3">
          <Form title="Name" placeholder="e.g. Stephen King" type="text" />
          <Form
            title="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
          />
          <Form
            title="Phone Number"
            placeholder="e.g. +1 234 567 890"
            type="tel"
          />
        </span>
      </div>
    </section>
  );
};

export default Card;
