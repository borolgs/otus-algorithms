export class PrioirityQueue<T> {
  private store: T[][] = [];
  private priorities: number[] = [];
  private maxPriority = Number.MIN_VALUE;
  private minPriority = Number.MIN_VALUE;

  private count = 0;

  get size(): number {
    return this.count;
  }

  enqueue(priority: number, val: T): void {
    this.count++;
    const priorityIndex = this.priorities.indexOf(priority);
    let subQueue: T[];
    if (priorityIndex < 0) {
      subQueue = this.createSubQueue(priority);
    } else {
      subQueue = this.store[priorityIndex];
    }

    subQueue.push(val);
  }

  private createSubQueue(priority: number): T[] {
    const subQueue: T[] = [];

    if (this.priorities.length == 0) {
      // First queue
      this.priorities.push(priority);
      this.store.push(subQueue);
      this.maxPriority = priority;
      this.minPriority = priority;
    } else if (priority > this.maxPriority) {
      // Insert at start
      this.maxPriority = priority;
      this.priorities.splice(0, 0, priority);
      this.store.splice(0, 0, subQueue);
    } else if (priority < this.minPriority) {
      // Add to end
      this.minPriority = priority;
      this.priorities.push(priority);
      this.store.push(subQueue);
    } else {
      // Find place
      for (let i = 0; i < this.priorities.length; i++) {
        const existPriority = this.priorities[i];
        if (priority > existPriority) {
          this.priorities.splice(i, 0, priority);
          this.store.splice(i, 0, subQueue);
          break;
        }
      }
    }

    return subQueue;
  }

  dequeue(): T {
    if (this.size == 0) {
      throw new Error('The Queue is empty');
    }

    this.count--;

    return this.getNext();
  }

  private getNext(): T {
    while (this.priorities.length > 0) {
      this.maxPriority = this.priorities[0];
      const subQueue = this.store[0];
      if (subQueue.length == 0) {
        this.priorities.shift();
        this.store.shift();
      } else {
        const item = subQueue.shift()!;

        const isLast: boolean = this.priorities.length == 1 && subQueue.length == 0;
        if (isLast) {
          this.maxPriority = Number.MIN_VALUE;
          this.minPriority = Number.MAX_VALUE;
        }

        return item;
      }
    }

    throw new Error('The Queue is empty');
  }
}
