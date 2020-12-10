---
{
  "area": "general",
  "title": "Linear Gaussian state space models",
  "year": null,
  "categories": [
    "generative-models"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "State Space Models",
      "resource": "Department of Statistics | University of Pittsburgh",
      "description": "",
      "icon": "pdf",
      "url": "https://www.stat.pitt.edu/stoffer/tsa4/Chapter6.pdf"
    }
  ],
  "thumbnail": "linear-gaussian-state-space-models-thumb.jpg",
  "card": "linear-gaussian-state-space-models-card.jpg",
  "also_known_as": [
    "LGSSM"
  ]
}
---
**Linear Gaussian state space models** (LGSSMs) are widely used to model sequences of vectors $\mathbf{a} = \mathbf{a}_{1:T}=[\mathbf{a}_{1},..,\mathbf{a}_{T}]$. LGSSMs model temporal correlations through a first-order Markov process on latent states $\mathbf{z} = [\mathbf{z}_{1},..,\mathbf{z}_{T}]$, which are potentially further controlled with external inputs $\mathbf{u} = [\mathbf{u}_{1},..,\mathbf{u}_{T}]$, through the Gaussian distributions
$$$
p_{\gamma_{t}}(\mathbf{z}_{t}|\mathbf{z}_{t-1},\mathbf{u}_{t}) = \mathcal{N}(\mathbf{z}_{t};\mathbf{A}_{t}\mathbf{z}_{t-1}+\mathbf{B}_{t}\mathbf{u}_{t}, \mathbf{Q}),\qquad p_{\gamma_{t}}(\mathbf{a}_t|\mathbf{z}_t) = \mathcal{N}(\mathbf{a}_t;\mathbf{C}_t\mathbf{z}_t, \mathbf{R})))\ .
$$$
Matrices $\gamma_{t}=[\mathbf{A}_t,\mathbf{B}_t,\mathbf{C}_t]$ are the state transition, control and emission matrices at time $t$. $\mathbf{Q}$ and $\mathbf{R}$ are the covariance matrices of the process and measurement noise respectively. With a starting state $\mathbf{z}_1\sim \mathcal{N}(\mathbf{z}_1;\mathbf{0},\mathbf{\Sigma})$, the joint probability distribution of the LGSSM is given by 
$$$
p_\gamma(\mathbf{a},\mathbf{z}|\mathbf{u})=p_\gamma(\mathbf{a}|\mathbf{z})p_\gamma(\mathbf{z}|\mathbf{u})=\prod_{t=1}^{T}p_{\gamma_{t}}(\mathbf{a}_t|\mathbf{z}_t)\ \cdot\ p(\mathbf{z}_1) \prod_{t=2}^{T} p_{\gamma_t}(\mathbf{z}_t|\mathbf{z}_{t-1}, \mathbf{u}_t)\ ,
$$$
where $\gamma =[\gamma_1,..,\gamma_T]$. LGSSMs have very appealing properties: the filtered and smoothed posteriors $p(\mathbf{z_t}|\mathbf{a}_{1:t},\mathbf{u}_{1:t})$ and $p(\mathbf{z_t}|\mathbf{a},\mathbf{u})$ can be computed exactly with the classical Kalman filter and smoother algorithms, and provide a natural way to handle missing data.  

Source: [A Disentangled Recognition and Nonlinear Dynamics Model for Unsupervised Learning](https://www.semanticscholar.org/paper/A-Disentangled-Recognition-and-Nonlinear-Dynamics-Fraccaro-Kamronn/0d150431c662d7ddc18afa8648e684db25db7d78) [[PDF](https://arxiv.org/pdf/1710.05741.pdf)]  
Image Source: [An introduction to state-space modeling of ecological time series](https://www.semanticscholar.org/paper/An-introduction-to-state-space-modeling-of-time-Auger-M%C3%A9th%C3%A9-Newman/1e2c83661a8809d6f588be10889c497c6cf9fedc) [[PDF](https://arxiv.org/pdf/2002.02001.pdf)]  
