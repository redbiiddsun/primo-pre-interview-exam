import { Sorter } from "./sorter";

// Playground

const sorter = new Sorter();
const collection1 = [1, 2, 2];
const collection2 = [5, 2];
const collection3 = [2, 3, 4];

const result = sorter.merge(collection1, collection2, collection3);

console.log(result);
