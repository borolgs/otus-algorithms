# Sorts

## Random

`npm run start:sort`

| Реализация      | #0  | #1  | #2  | #3  | #4   | #5     | #6    | #7          |
| --------------- | --- | --- | --- | --- | ---- | ------ | ----- | ----------- |
| selectionSort   | 0ms | 0ms | 1ms | 3ms | 60ms | 5265ms | -     | -           |
| insertionSort   | 0ms | 0ms | 0ms | 2ms | 37ms | 3309ms | -     | -           |
| shellSort (1.5) | 1ms | 0ms | 0ms | 2ms | 6ms  | 39ms   | 502ms | 5458ms      |
| shellSort (2)   | 0ms | 0ms | 0ms | 0ms | 4ms  | 52ms   | 544ms | 6274ms      |
| shellSort (3)   | 1ms | 0ms | 0ms | 0ms | 3ms  | 45ms   | 504ms | fail 6036ms |
| heapSort        | 0ms | 0ms | 3ms | 5ms | 14ms | 98ms   | 826ms | 11742ms     |

## Digits

`npm run start:sort d`

| Реализация      | #0  | #1  | #2  | #3  | #4   | #5     | #6    | #7          |
| --------------- | --- | --- | --- | --- | ---- | ------ | ----- | ----------- |
| selectionSort   | 0ms | 0ms | 1ms | 3ms | 58ms | 5479ms | -     | -           |
| insertionSort   | 0ms | 0ms | 0ms | 2ms | 33ms | 2915ms | -     | -           |
| shellSort (1.5) | 0ms | 0ms | 0ms | 2ms | 3ms  | 18ms   | 227ms | 2439ms      |
| shellSort (2)   | 0ms | 0ms | 0ms | 0ms | 2ms  | 18ms   | 203ms | 2101ms      |
| shellSort (3)   | 0ms | 0ms | 0ms | 0ms | 1ms  | 19ms   | 175ms | fail 1801ms |
| heapSort        | 0ms | 0ms | 1ms | 4ms | 10ms | 55ms   | 428ms | 4805ms      |

## Sorted

`npm run start:sort s`

| Реализация      | #0  | #1  | #2  | #3  | #4   | #5     | #6    | #7          |
| --------------- | --- | --- | --- | --- | ---- | ------ | ----- | ----------- |
| selectionSort   | 1ms | 0ms | 0ms | 2ms | 58ms | 5126ms | -     | -           |
| insertionSort   | 0ms | 0ms | 0ms | 0ms | 5ms  | 105ms  | -     | -           |
| shellSort (1.5) | 5ms | 0ms | 1ms | 3ms | 4ms  | 33ms   | 466ms | 5421ms      |
| shellSort (2)   | 0ms | 0ms | 0ms | 1ms | 11ms | 55ms   | 456ms | 5087ms      |
| shellSort (3)   | 0ms | 0ms | 0ms | 1ms | 3ms  | 38ms   | 411ms | fail 4591ms |
| heapSort        | 0ms | 0ms | 3ms | 5ms | 13ms | 87ms   | 656ms | 7367ms      |

## Reversed

`npm run start:sort r`

| Реализация      | #0  | #1  | #2  | #3  | #4   | #5     | #6    | #7          |
| --------------- | --- | --- | --- | --- | ---- | ------ | ----- | ----------- |
| selectionSort   | 0ms | 0ms | 1ms | 3ms | 63ms | 6112ms | -     | -           |
| insertionSort   | 0ms | 0ms | 0ms | 3ms | 72ms | 6643ms | -     | -           |
| shellSort (1.5) | 1ms | 0ms | 0ms | 6ms | 5ms  | 32ms   | 400ms | 4385ms      |
| shellSort (2)   | 0ms | 0ms | 0ms | 1ms | 2ms  | 35ms   | 356ms | 3795ms      |
| shellSort (3)   | 0ms | 0ms | 0ms | 1ms | 3ms  | 36ms   | 342ms | fail 3500ms |
| heapSort        | 0ms | 0ms | 1ms | 4ms | 15ms | 88ms   | 642ms | 7183ms      |

## Conclusion

- selectionSort - самый понятный.
- shellSort - получился самым быстрым.
- heapSort - самый интересный. Двоичная куча классная шутка.
