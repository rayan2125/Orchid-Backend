// Function to compute cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
    // Calculate dot product of vecA and vecB
    const dotProduct = vecA.reduce((sum, value, index) => sum + value * vecB[index], 0);

    // Calculate the magnitude (norm) of vecA and vecB
    const magnitudeA = Math.sqrt(vecA.reduce((sum, value) => sum + value * value, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, value) => sum + value * value, 0));

    // Return cosine similarity: dotProduct / (|A| * |B|)
    return dotProduct / (magnitudeA * magnitudeB);
}

// Example vectors (replace with actual embeddings)
const vecA = [1, 2, 3];
const vecB = [4, 5, 6];

// Compute cosine similarity
 export const similarity = cosineSimilarity(vecA, vecB);

console.log("Cosine Similarity:", similarity);
