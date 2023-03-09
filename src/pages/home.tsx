import Paragraph from "../components/Paragraph/Paragraph";
import Title from "../components/Title/Title";

const Home = () => {
  return (
    <main>
      <Title>Cells Flasher</Title>
      <Paragraph emphasize_first_letter>
        Welcome to Cells Flasher, the game that makes Cells Flash!
      </Paragraph>
      <Paragraph>The goal of the game? There is none!</Paragraph>
      <Paragraph>
        This is just an "app" that you can use to draw flashing pixel art. You
        can click, or draw, and the grid you chose will fill itself with
        alternate-colored cells.
      </Paragraph>
      <Paragraph>
        For extra fun, triplets of neighbor cells will flash in unisson.
      </Paragraph>
      <Paragraph>
        For even more fun, a countdown is set between each move you make, so
        don't think too long.
      </Paragraph>
      <Paragraph>
        Finally, each time the countdown reaches zero, your "art" is
        automatically saved in your browser localStorage. You also have the
        possibility to save your "art" and see it later in the section "Previous
        Arts".
      </Paragraph>
      <Paragraph emphasize_first_letter>Have Fun!</Paragraph>
    </main>
  );
};

export default Home;
