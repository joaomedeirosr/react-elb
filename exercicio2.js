function capWord(sentenca) {
  return (
    sentenca && sentenca[0].toUpperCase() + sentenca.slice(1).toLowerCase()
  );
}
capWord();
