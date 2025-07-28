const HTML = {
  head: {
    meta: [
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    title: {
      textContent: "문서의 제목이오",
    },
  },
  body: {},
};

class PracHTMLObject {
  head() {
    return {
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      title: {
        textContent: "문서의 제목이오",
      },
    };
  }
  body() {
    return {};
  }
}

const test = new PracHTMLObject();
console.log(test.head());
console.log(test.body());
