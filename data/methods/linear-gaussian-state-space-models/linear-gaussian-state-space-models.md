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
  "links": [],
  "thumbnail": null,
  "card": null,
  "also_known_as": [
    "LGSSM"
  ]
}
---
**Linear Gaussian state space models** (LGSSMs) are widely used to model sequences of vectors $a=a1:T= [a1,..,aT]$. LGSSMs model temporal correlations through a first-order Markov process on latent states $z= [z1,..,zT]$, which are potentially further controlled with external inputs $u= [u1,..,uT]$, through the Gaussian distributions
$$$
pγt(zt|zt−1,ut) =N(zt;Atzt−1+Btut,Q),pγt(at|zt) =N(at;Ctzt,R).
$$$
Matrices $γt= [At,Bt,Ct]$ are the state transition, control and emission matrices at time $t$. $Q$ and $R$ are the covariance matrices of the process and measurement noise respectively. With a starting state $z1∼N(z1;0,Σ)$, the joint probability distribution of the LGSSM is given by 
$$$
pγ(a,z|u) =pγ(a|z)pγ(z|u) =∏Tt=1pγt(at|zt)·p(z1)∏Tt=2pγt(zt|zt−1,ut),
$$$
where $γ= [γ1,..,γT]$. LGSSMs have very appealing properties: the filtered and smoothed posteriors $p(zt|a1:t,u1:t)$ and $p(zt|a,u)$ can be computed exactly with the classical Kalman filter and smoother algorithms, and provide a natural way to handle missing data.  

Source: [A Disentangled Recognition and Nonlinear Dynamics Model for Unsupervised Learning](https://www.semanticscholar.org/paper/A-Disentangled-Recognition-and-Nonlinear-Dynamics-Fraccaro-Kamronn/0d150431c662d7ddc18afa8648e684db25db7d78) [[PDF](https://arxiv.org/pdf/1710.05741.pdf)]  
