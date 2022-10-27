import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="blue"
      subtitle="profile"
      title="Jordi Bustos"
      description="15 public playlists"
      image="https://sm.ign.com/ign_es/gallery/r/rick-and-m/rick-and-morty-season-5-gallery_6vj7.jpg"
      roundImage
    >
      <div>home page</div>
    </GradientLayout>
  );
};

export default Home;
