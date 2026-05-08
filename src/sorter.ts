import { IMerge } from "./interfaces/merge.interface";

export class Sorter implements IMerge {
  merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[],
  ): number[] {
    let CollectionOneCurrentIndex = 0;
    let CollectionTwoCurrentIndex = collection_2.length - 1; // Start from the end, to handle descending order
    let CollectionThreeCurrentIndex = 0;

    let resultArray: number[] = [];

    while (
      CollectionOneCurrentIndex < collection_1.length ||
      CollectionTwoCurrentIndex >= 0 ||
      CollectionThreeCurrentIndex < collection_3.length
    ) {
      const value1 =
        CollectionOneCurrentIndex < collection_1.length
          ? collection_1[CollectionOneCurrentIndex]
          : Infinity;
      const value2 =
        CollectionTwoCurrentIndex >= 0
          ? collection_2[CollectionTwoCurrentIndex]
          : Infinity;
      const value3 =
        CollectionThreeCurrentIndex < collection_3.length
          ? collection_3[CollectionThreeCurrentIndex]
          : Infinity;

      if (value1 <= value2 && value1 <= value3) {

        resultArray.push(value1);

        CollectionOneCurrentIndex++;

      } else if (value2 <= value1 && value2 <= value3) {

        resultArray.push(value2);

        CollectionTwoCurrentIndex--;

      } else {

        resultArray.push(value3);

        CollectionThreeCurrentIndex++;

      }
    }

    return resultArray;
  }
}
