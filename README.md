# [SIH 2020 - The Sentinels]()

Real Time image processing and forensic verification of Fake Videos

Cyber Criminals are using Image processing tools and techniques for producing the variety of
crimes, including Image Modification, Fabrication using Cheap Deep Fake Videos/Image
Desired
Solution The solution should focus on help the Image/Video verifier/examiner find out and differentiate a
fabricated Image/Video with an original one Technology that can help address the issue AI/ML techniques can be used.

Our method is based on the observations that current DeepFake algorithm can only generate images of limited resolutions, which need to be further warped to match the original faces in the source video Such transforms leave distinctive artifacts in the resulting DeepFake videos Our method detects such artifacts by comparing the generated face areas and their surrounding regions with a dedicated Convolutional Neural Network ( model Along with detection of DeepFake images and video, we also propose a solution to detect
DeepFake audio to discern between real and fake audio, the detector uses visual representations of audio clips called spectrograms
Which is later classified by another CNN model as real or fake The models are deployed on the flask based web app which consists of ReactJS (front end) interface It is the most efficient and economical solution for implementing it It works on the principle “Train once, use anywhere” These models can also be extended in the future to be implemented as a API service for third party applications

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">
