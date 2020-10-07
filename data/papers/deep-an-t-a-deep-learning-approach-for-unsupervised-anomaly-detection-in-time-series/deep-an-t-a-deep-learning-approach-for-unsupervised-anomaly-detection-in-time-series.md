---
{
  "title": "DeepAnT: A Deep Learning Approach for Unsupervised Anomaly Detection in Time Series",
  "authors": [
    "Mohsin Munir",
    "S. Siddiqui",
    "A. Dengel",
    "S. Ahmed"
  ],
  "abstract": "Traditional distance and density-based anomaly detection techniques are unable to detect periodic and seasonality related point anomalies which occur commonly in streaming data, leaving a big gap in time series anomaly detection in the current era of the IoT. To address this problem, we present a novel deep learning-based anomaly detection approach (DeepAnT) for time series data, which is equally applicable to the non-streaming cases. DeepAnT is capable of detecting a wide range of anomalies, i.e., point anomalies, contextual anomalies, and discords in time series data. In contrast to the anomaly detection methods where anomalies are learned, DeepAnT uses unlabeled data to capture and learn the data distribution that is used to forecast the normal behavior of a time series. DeepAnT consists of two modules: time series predictor and anomaly detector. The time series predictor module uses deep convolutional neural network (CNN) to predict the next time stamp on the defined horizon. This module takes a window of time series (used as a context) and attempts to predict the next time stamp. The predicted value is then passed to the anomaly detector module, which is responsible for tagging the corresponding time stamp as normal or abnormal. DeepAnT can be trained even without removing the anomalies from the given data set. Generally, in deep learning-based approaches, a lot of data are required to train a model. Whereas in DeepAnT, a model can be trained on relatively small data set while achieving good generalization capabilities due to the effective parameter sharing of the CNN. As the anomaly detection in DeepAnT is unsupervised, it does not rely on anomaly labels at the time of model generation. Therefore, this approach can be directly applied to real-life scenarios where it is practically impossible to label a big stream of data coming from heterogeneous sensors comprising of both normal as well as anomalous points. We have performed a detailed evaluation of 15 algorithms on 10 anomaly detection benchmarks, which contain a total of 433 real and synthetic time series. Experiments show that DeepAnT outperforms the state-of-the-art anomaly detection methods in most of the cases, while performing on par with others.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8581424"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/f37bc75aa1833e1330c39c4f04b131baca08d67b"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "deep-an-t-a-deep-learning-approach-for-unsupervised-anomaly-detection-in-time-series-thumb.jpg",
  "card": "deep-an-t-a-deep-learning-approach-for-unsupervised-anomaly-detection-in-time-series-card.jpg",
  "s2_paper_id": "f37bc75aa1833e1330c39c4f04b131baca08d67b"
}
---

