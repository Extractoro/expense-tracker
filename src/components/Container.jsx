const Container = ({ children }) => {
  return (
    <div className="w-[calc(100%-20px)] max-w-[700px] mx-auto md:w-[calc(100%-40px)] md:max-w-[900px] xl:w-full xl:max-w-[1100px]">
      {children}
    </div>
  );
};

export default Container;
