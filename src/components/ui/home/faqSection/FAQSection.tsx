import FAQCard from "./FAQCard";

export default function FAQSection() {
  return (
    <section className=" py-20 px-2 md:px-0">
      <div className=" mx-auto w-full max-w-7xl">
        <div className=" w-full md:w-5/12">
          <h1 className=" text-2xl font-light text-[#FF6666]">FAQ</h1>
          <h1 className=" text-4xl md:text-6xl font-extrabold my-3">
            Frequently Asked Questions
          </h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <FAQCard spacialClass={true} />
          <FAQCard spacialClass={false} />
          <FAQCard spacialClass={false} />
          <FAQCard spacialClass={true} />
          <FAQCard spacialClass={true} />
          <FAQCard spacialClass={false} />
        </div>
      </div>
    </section>
  );
}
