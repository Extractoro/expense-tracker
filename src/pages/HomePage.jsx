import Container from "../components/Container";
import Header from "../components/Header";
import Main from "../components/Main";

const HomePage = () => {
  return (
    <>
      <Header isActive={`header`} />
      <section className="bg-gradient-to-t from-[#69AEA9] to-[#3F8782] text-white h-[300px] pt-5">
        <Container>
          <Main />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
