window.onload = () => {
  document.querySelector("#website").innerHTML = domainName();
};

let domainName = () => {
  let article = ["the", "three", "last", "even"];
  let adj = ["wonderful", "cool", "grand", "great", "amazing"];
  let noun = ["gamers", "women", "cats", "knights", "mages"];
  let ext = [".org", ".com", ".net", ".gov"];

  let articleIndex = Math.floor(Math.random() * article.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extIndex = Math.floor(Math.random() * ext.length);

  return (
    article[articleIndex] + adj[adjIndex] + noun[nounIndex] + ext[extIndex]
  );
};
