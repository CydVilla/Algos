/**
 * Last Stone Weight
 * Smash the two heaviest stones together until one or none remain.
 * 
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let largest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeap();
        
        // Add all stones to heap
        for (let stone of stones) {
            maxHeap.push(stone);
        }
        
        // Smash stones until one or none remain
        while (maxHeap.size() > 1) {
            const first = maxHeap.pop();
            const second = maxHeap.pop();
            
            if (first !== second) {
                maxHeap.push(first - second);
            }
        }
        
        return maxHeap.size() === 0 ? 0 : maxHeap.pop();
    }
}

export default Solution;
