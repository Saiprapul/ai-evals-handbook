# AI Evals Handbook

> Anyone can build AI. Few can evaluate it.

A practical guide to evaluating AI systems in production. Patterns and frameworks from systems serving millions of users and processing billions of queries.

## Why This Exists

Most AI evaluation focuses on accuracy metrics—but accuracy is the wrong thing to optimize for. A wrong answer in a legal contract costs infinitely more than a wrong menu translation. Traditional benchmarks use static test sets while production data drifts constantly.

This handbook shares patterns I've learned from building and evaluating AI systems at scale:
- RAG systems processing 10M+ queries/month
- Multi-agent pipelines validated by aerospace R&D teams
- Enterprise AI platforms serving millions of users

All examples are anonymized. All code is open source.

## Frameworks

### 1. Consequence-Weighted Evaluation
Not all errors are equal. Learn to weight metrics by business impact.

### 2. Drift Monitoring
Query distribution shifts. Embeddings degrade. Catch drift before users do.

### 3. RAG-Specific Evaluation
Retrieval precision, answer faithfulness, hallucination detection.

### 4. Human-in-the-Loop Patterns
Confidence thresholds, escalation triggers, feedback loops.

### 5. LLM-as-Judge
Using LLMs to evaluate LLMs—when it works and when it doesn't.

### 6. AI Governance Framework
The Complexity-Criticality Matrix for determining oversight levels.

## Case Studies

- **Query Drift in a 150K MAU RAG System** - How distribution shifted from 70% generic to 40% edge cases
- **Embedding Drift Across Client Domains** - When terminology breaks your embeddings
- **Reducing Hallucinations from 8% to 2%** - Chain-of-thought verification patterns

## Code

```python
# Query Distribution Drift Detection
from sklearn.cluster import KMeans
from sentence_transformers import SentenceTransformer

class QueryDriftMonitor:
    def __init__(self, baseline_embeddings, threshold=0.15):
        self.baseline = baseline_embeddings
        self.threshold = threshold

    def detect_drift(self, new_queries):
        # Compare new query distribution against baseline
        drift_score = self._compute_distribution_shift(new_queries)
        return {
            "drift_score": drift_score,
            "is_drifted": drift_score > self.threshold
        }
```

## Setup

```bash
# Clone the repo
git clone https://github.com/saiprapul/ai-evals-handbook.git

# Open locally
cd ai-evals-handbook
open index.html
```

Or visit: [saiprapul.github.io/ai-evals-handbook](https://saiprapul.github.io/ai-evals-handbook)

## About

Created by [Saiprapul Thotapally](https://saiprapul.github.io), AI Product Manager building evaluation systems for production AI.

- [Published Research: Complexity-Criticality Matrix (IRJET 2024)](https://www.irjet.net/archives/V11/i12/IRJET-V11I1293.pdf)
- [LinkedIn](https://linkedin.com/in/saiprapul-r-thotapally)
- [Portfolio](https://saiprapul.github.io)

## License

MIT License - Use freely, attribution appreciated.
