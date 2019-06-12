// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    this.expandButton.innerHTML = "expand";
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.addEventListener("click", this.expandArticle);
    // Set a click handler on the expandButton reference, calling the expandArticle method.
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    event.target.parentElement.classList.toggle("article-open");
    event.target.parentElement.classList.toggle("open");
    if (event.target.innerHTML === "expand") {
      return (event.target.innerHTML = "collapse");
    } else {
      return (event.target.innerHTML = "expand");
    }
  }
}

// START HERE:
let articles = document.querySelector(".articles").querySelectorAll(".article");
//- Select all classes named ".article" and assign that value to the articles variable.
articles.forEach(function(e) {
  return new Article(e);
});
//- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
