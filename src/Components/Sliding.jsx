function Sliding() {
  return (
    <>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        className="w-full my-20 text-gray-400 overflow-auto font-serif text-3xl"
      >
        <div className="flex gap-10 lg:gap-30 hover:text-gray-600">
          <p className="tracking-widest">Affordable</p>
          <p className="tracking-widest">Stylish</p>
          <p className="tracking-widest">Easy order</p>
          <p className="tracking-widest">Affordable</p>
          <p className="tracking-widest">Minimalist</p>
          <p className="tracking-widest">Trendy</p>
          <p className="tracking-widest">Modern Design</p>
          <p className="tracking-widest">Comfort First</p>
        </div>
      </marquee>
    </>
  );
}

export default Sliding;
