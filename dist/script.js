import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

const n1 = document.querySelector("#xoogler");
const wiz = document.querySelector("#wizards");
const n2 = document.querySelector("#google");
const n3 = document.querySelector("#uf");
const simple = document.querySelector("#simple");
const n4 = document.querySelector("#del");
const n6 = document.querySelector("#tech2");
const n7 = document.querySelector("#tech3");
const n8 = document.querySelector("#flex");
const n9 = document.querySelector("#clar");
const n10 = document.querySelector("#colab");
const n11 = document.querySelector("#hire");
const n12 = document.querySelector("#intern");

const a1 = annotate(n1, { type: "highlight", color: "#f8c9e3" });
const a2 = annotate(n2, { type: "underline", color: "green", padding: 1 });
const a3 = annotate(n3, { type: "highlight", color: "#f9c5c0" });
const aWiz = annotate(wiz, { type: "underline", color: "#0c3475", padding: 1 });
const a4 = annotate(n4, { type: "highlight", color: "#fce37c" });
const a6 = annotate(n6, { type: "highlight", color: "#e5cefc" });
const a7 = annotate(n7, { type: "highlight", color: "#f8c9e3" });
const a8 = annotate(n8, { type: "highlight", color: "#f9c5c0" });
const a9 = annotate(n9, { type: "highlight", color: "#fce37c" });
const a10 = annotate(n10, { type: "highlight", color: "#e5cefc" });
const a11 = annotate(n11, { type: "circle", color: "#f9c5c0" });
const a12 = annotate(n12, { type: "underline", color: "green", padding: 1 });
const aSimple = annotate(simple, { type: "highlight", color: "#bad6ff" });

const ag = annotationGroup([a2, a1]);
ag.show();
aWiz.show();

const ag2 = annotationGroup([a6, a7, a8, a9, a10]);
aSimple.show();
a3.show();
a4.show();

ag2.show();
a11.show();
a12.show();
