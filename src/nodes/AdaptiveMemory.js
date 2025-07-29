const memoryLog = [];

/**
 * Stores the user input and the generated reflection.
 * Also adds a basic memory weight that can be used for relevance later.
 */
export function storeMemory(input, reflection) {
  memoryLog.push({ input, reflection, timestamp: new Date(), weight: 1 });
}

/**
 * Retrieves a memory that might be relevant to current input.
 * For now: returns the last 3 interactions.
 */
export function getRecentMemories() {
  return memoryLog.slice(-3).reverse();
}

/**
 * Option to evolve weight over time (placeholder).
 * Later we can add logic to strengthen or fade memory relevance.
 */
export function evolveMemoryWeights() {
  for (let mem of memoryLog) {
    if (mem.weight < 5) mem.weight += 0.1;
  }
}
