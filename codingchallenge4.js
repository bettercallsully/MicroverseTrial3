function utopianTree(n) {
    let height = 1;
      let i=0; 

      while (i < n) {
          if (i % 2 == 0) {
              height *= 2
          } else {
              height += 1;
          }
          i++;
      }

  return height;
}

/* Did not have enough time to complete this challenge */