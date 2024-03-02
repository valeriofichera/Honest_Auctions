const RenderIfHtml = ({ inputText }: { inputText: string }) => {
  try {
    new URL(inputText);
  } catch (_) {
    return <div>Not an image</div>; // If the URL is not valid, return nothing
  }

  return (
    <div>
      <img src={inputText} alt="Conditional content" />
    </div>
  );
};

export default RenderIfHtml;
