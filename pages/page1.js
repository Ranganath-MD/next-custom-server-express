export default function ({ characters }) {
  console.log(characters);
  return (
    <div>
      <h1>Hello: Page 1</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const characters = await(await fetch("http://localhost:3000/server/character")).json()
  return {
    props: {
      characters,
    },
  };
}