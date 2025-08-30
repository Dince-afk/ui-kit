declare global {
  declare namespace React {
    namespace JSX {
      interface Test {
        testProp: string;
      }
      interface IntrinsicElements {
        dino: React.DetailedHTMLProps<
          React.ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
        >;
      }
    }
  }
}

type Test = {
  testProp: string;
};

function Test() {
  console.log("HELLLO");
}

export { Test };
