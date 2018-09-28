const codeIdMaker = (product_type) => {
  let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let res = "";
    for (let i = 0; i < 16; i++) {
      let id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return product_type+ '_' + res;
}

export default codeIdMaker;