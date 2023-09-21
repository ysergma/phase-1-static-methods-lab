class Formatter {
  static capitalize(string){
    let first =string.charAt(0).toUpperCase()
   let rest = string.slice(1)
    return string.charAt(0).toUpperCase() + string.slice(1);
x  }

static sanitize(string) {
      return string.replace(/[^a-zA-Z0-9-\'\s]/g, '');
}

static titleize(string) {
    const stopWords = ['a','the','an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    // Split the string into words.
    const words = string.split(/\s+/);

    // Capitalize all words except for the stop words.
    const capitalizedWords = words.map((word) => {
      if (stopWords.includes(word.toLowerCase())) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });

    // Join the words back into a string.
    return capitalizedWords.join(' ');
  }


}
