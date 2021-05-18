export const nPharagraphOfLorem = (n = 4) => {
  return Array(n).fill(0).map((_, index) => index)
    .map((value) => (
      <p key={`lorem-${value + 1}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem facere fuga magnam,
        nihil veniam. Aperiam aspernatur cumque cupiditate id ipsa veniam vitae. Accusantium eum, harum
        magni quidem rem vel.
      </p>
    ));
};

export const divWithNPharagraphOfLorem = (n) => {
  return (
    <div style={{ display: "grid", gap: "4rem" }}>
      {nPharagraphOfLorem(n)}
    </div>
  )
};
