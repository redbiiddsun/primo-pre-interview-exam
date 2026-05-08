import { Sorter } from "../src/sorter";

describe("Test case Sorter.merge", () => {
  it("Given collection_1 and collection_3 sorted ascending and collection_2 sorted descending, should merge them into one ascending array", () => {
    // Given
    const sorter = new Sorter();
    const collection1 = [1, 3, 5];
    const collection2 = [9, 6, 2];
    const collection3 = [4, 7, 8];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Given all collections are empty, should return an empty array", () => {
    // Given
    const sorter = new Sorter();
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([]);
  });

  it("Given collections with duplicate values, should merge them correctly", () => {
    // Given
    const sorter = new Sorter();
    const collection1 = [1, 2, 2];
    const collection2 = [5, 2];
    const collection3 = [2, 3, 4];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([1, 2, 2, 2, 2, 3, 4, 5]);
  });

  it("Given collections with negative numbers, should merge them correctly (Edge Case)", () => {
    // Given
    const sorter = new Sorter();
    const collection1 = [-10, -3, 0];
    const collection2 = [5, -1, -8];
    const collection3 = [-4, 1, 2];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([-10, -8, -4, -3, -1, 0, 1, 2, 5]);
  });

  it("Given only collection_2 has values in descending order, should return them in ascending order (Edge Case)", () => {
    // Given
    const sorter = new Sorter();
    const collection1: number[] = [];
    const collection2 = [10, 7, 3, 0];
    const collection3: number[] = [];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([0, 3, 7, 10]);
  });

  it("Given collections with uneven lengths, should merge all values correctly (Edge Case)", () => {
    // Given
    const sorter = new Sorter();
    const collection1 = [1];
    const collection2 = [20, 18, 11, 6, 2];
    const collection3 = [3, 4, 5, 7, 8, 9, 10];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 20]);
  });

  it("Given collections contain zero and repeated boundary values, should preserve all values (Edge Case)", () => {
    // Given
    const sorter = new Sorter();
    const collection1 = [0, 0, 1];
    const collection2 = [2, 1, 0];
    const collection3 = [0, 2, 2];

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toEqual([0, 0, 0, 0, 1, 1, 2, 2, 2]);
  });

  it("Given one hundred elements in each collection, should merge into three hundred sorted values (Edge Case)", () => {
    // Given
    const sorter = new Sorter();
    const collection1 = Array.from({ length: 100 }, (_, index) => index * 3);
    const collection2 = Array.from(
      { length: 100 },
      (_, index) => 299 - index * 3,
    );
    const collection3 = Array.from({ length: 100 }, (_, index) => index * 3 + 1);
    const expected = Array.from({ length: 300 }, (_, index) => index);

    // When
    const result = sorter.merge(collection1, collection2, collection3);

    // Then
    expect(result).toHaveLength(300);
    expect(result).toEqual(expected);
  });
});
