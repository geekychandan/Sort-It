export default function quickSort(array: number[], low: number, high: number): void {
    if (low < high) {
      let pivotIndex = partition(array, low, high);
      quickSort(array, low, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, high);
    }
  }
  
  function partition(array: number[], low: number, high: number): number {
    let pivot = array[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
      }
    }
  
    swap(array, i + 1, high);
    return i + 1;
  }
  
  function swap(array: number[], i: number, j: number): void {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  