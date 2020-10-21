---
{
  "title": "BRAKER1: Unsupervised RNA-Seq-Based Genome Annotation with GeneMark-ET and AUGUSTUS",
  "date": "2015-01-11",
  "authors": [
    "K. Hoff",
    "Simone Lange",
    "Alexandre Lomsadze",
    "M. Borodovsky",
    "M. Stanke"
  ],
  "abstract": "MOTIVATION\nGene finding in eukaryotic genomes is notoriously difficult to automate. The task is to design a work flow with a minimal set of tools that would reach state-of-the-art performance across a wide range of species. GeneMark-ET is a gene prediction tool that incorporates RNA-Seq data into unsupervised training and subsequently generates ab initio gene predictions. AUGUSTUS is a gene finder that usually requires supervised training and uses information from RNA-Seq reads in the prediction step. Complementary strengths of GeneMark-ET and AUGUSTUS provided motivation for designing a new combined tool for automatic gene prediction.\n\n\nRESULTS\nWe present BRAKER1, a pipeline for unsupervised RNA-Seq-based genome annotation that combines the advantages of GeneMark-ET and AUGUSTUS. As input, BRAKER1 requires a genome assembly file and a file in bam-format with spliced alignments of RNA-Seq reads to the genome. First, GeneMark-ET performs iterative training and generates initial gene structures. Second, AUGUSTUS uses predicted genes for training and then integrates RNA-Seq read information into final gene predictions. In our experiments, we observed that BRAKER1 was more accurate than MAKER2 when it is using RNA-Seq as sole source for training and prediction. BRAKER1 does not require pre-trained parameters or a separate expert-prepared training step.\n\n\nAVAILABILITY AND IMPLEMENTATION\nBRAKER1 is available for download at http://bioinf.uni-greifswald.de/bioinf/braker/ and http://exon.gatech.edu/GeneMark/\n\n\nCONTACT\nkatharina.hoff@uni-greifswald.de or borodovsky@gatech.edu\n\n\nSUPPLEMENTARY INFORMATION\nSupplementary data are available at Bioinformatics online.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26559507"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/34ce19d2e987a2862c7c9bd1c1139ce44dd8593d"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "braker1-unsupervised-rna-seq-based-genome-annotation-with-gene-mark-et-and-augustus-thumb.jpg",
  "card": "braker1-unsupervised-rna-seq-based-genome-annotation-with-gene-mark-et-and-augustus-card.jpg",
  "s2_paper_id": "34ce19d2e987a2862c7c9bd1c1139ce44dd8593d"
}
---

