---
{
  "title": "Transition state clustering: Unsupervised surgical trajectory segmentation for robot learning",
  "date": "2017-12-01",
  "authors": [
    "S. Krishnan",
    "Animesh Garg",
    "Sachin Patil",
    "C. Lea",
    "Gregory Hager",
    "P. Abbeel",
    "K. Goldberg"
  ],
  "abstract": "Demonstration trajectories collected from a supervisor in teleoperation are widely used for robot learning, and temporally segmenting the trajectories into shorter, less-variable segments can improve the efficiency and reliability of learning algorithms. Trajectory segmentation algorithms can be sensitive to noise, spurious motions, and temporal variation. We present a new unsupervised segmentation algorithm, transition state clustering (TSC), which leverages repeated demonstrations of a task by clustering segment endpoints across demonstrations. TSC complements any motion-based segmentation algorithm by identifying candidate transitions, clustering them by kinematic similarity, and then correlating the kinematic clusters with available sensory and temporal features. TSC uses a hierarchical Dirichlet process Gaussian mixture model to avoid selecting the number of segments a priori. We present simulated results to suggest that TSC significantly reduces the number of false-positive segments in dynamical systems observed with noise as compared with seven probabilistic and non-probabilistic segmentation algorithms. We additionally compare algorithms that use piecewise linear segment models, and find that TSC recovers segments of a generated piecewise linear trajectory with greater accuracy in the presence of process and observation noise. At the maximum noise level, TSC recovers the ground truth 49% more accurately than alternatives. Furthermore, TSC runs 100× faster than the next most accurate alternative autoregressive models, which require expensive Markov chain Monte Carlo (MCMC)-based inference. We also evaluated TSC on 67 recordings of surgical needle passing and suturing. We supplemented the kinematic recordings with manually annotated visual features that denote grasp and penetration conditions. On this dataset, TSC finds 83% of needle passing transitions and 73% of the suturing transitions annotated by human experts.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://doi.org/10.1177/0278364917743319"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/694d284d7c63c7f29c48b540bc4ece9f63b79160"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "transition-state-clustering-unsupervised-surgical-trajectory-segmentation-for-robot-learning-thumb.jpg",
  "card": "transition-state-clustering-unsupervised-surgical-trajectory-segmentation-for-robot-learning-card.jpg",
  "s2_paper_id": "694d284d7c63c7f29c48b540bc4ece9f63b79160"
}
---

