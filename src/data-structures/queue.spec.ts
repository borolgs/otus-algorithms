import { PrioirityQueue } from './queue';

describe('Prioirity Queue', () => {
  let queue: PrioirityQueue<string>;
  beforeEach(() => {
    queue = new PrioirityQueue();
  });

  it('should enqueue', () => {
    queue.enqueue(0, 'a');
    queue.enqueue(0, 'b');
    queue.enqueue(0, 'c');
    expect(queue.size).toBe(3);
  });

  it('should dequeue', () => {
    queue.enqueue(0, 'e');
    queue.enqueue(0, 'f');
    queue.enqueue(10, 'a');
    queue.enqueue(0, 'g');
    queue.enqueue(5, 'c');
    queue.enqueue(5, 'd');
    queue.enqueue(10, 'b');

    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
    expect(queue.dequeue()).toBe('d');
    expect(queue.dequeue()).toBe('e');
    expect(queue.dequeue()).toBe('f');
    expect(queue.dequeue()).toBe('g');
    expect(queue.size).toBe(0);
  });
});
