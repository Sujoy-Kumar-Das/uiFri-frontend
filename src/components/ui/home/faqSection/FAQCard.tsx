export default function FAQCard({
  spacialClass: spacialClass,
}: {
  spacialClass: boolean;
}) {
  return (
    <div
      className={`px-5 py-6 rounded-lg shadow-xl ${
        spacialClass ? "bg-[#FF6666] text-white" : " bg-gray-300 text-black"
      }`}
    >
      <h1 className=" text-2xl font-bold ">
        The Best Financial Accounting App Ever!
      </h1>
      <p>
        Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
        Ultrices Malesuada Elit Mauris.
      </p>
    </div>
  );
}
