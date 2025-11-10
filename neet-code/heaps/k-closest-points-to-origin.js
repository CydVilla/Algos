/**
 * K Closest Points to Origin
 * Return the k closest points to the origin (0, 0).
 * 
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(point, distance) {
        this.heap.push({ point, distance });
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

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].distance <= this.heap[parentIndex].distance) break;
            
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let largest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length && this.heap[leftChild].distance > this.heap[largest].distance) {
                largest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild].distance > this.heap[largest].distance) {
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
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxHeap();
        
        for (let point of points) {
            const distance = point[0] * point[0] + point[1] * point[1];
            maxHeap.push(point, distance);
            
            // Keep only k closest points
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        
        // Extract points from heap
        const result = [];
        while (maxHeap.size() > 0) {
            result.push(maxHeap.pop().point);
        }
        
        return result;
    }
}

export default Solution;
