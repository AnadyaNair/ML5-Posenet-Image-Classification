# ML5.js Image Classification through PoseNet

This repository provides a simple example of performing image classification using ML5.js and PoseNet. ML5.js is a JavaScript library that makes machine learning accessible for creative coding, and PoseNet is a pre-trained deep learning model that estimates human pose from images or videos.

In this example, we'll be using PoseNet to capture the pose of a person and then use that pose information for image classification. The code uses a pre-trained PoseNet model and a custom image classification model to demonstrate the integration of the two.

## Getting Started

Follow these steps to get started with using ML5.js and PoseNet for image classification:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/AnadyaNair/ML5-Posenet-Image-Classification.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ML5-Posenet-Image-Classification
   ```

3. Open the `index.html` file in a web browser to see the example in action.

## How It Works

1. **Loading PoseNet Model**: The example loads the PoseNet model using the ML5.js library. This model is responsible for estimating the pose of a person in the video feed.

2. **Capturing Pose Data**: As the video feed starts, PoseNet estimates the pose of the person. The relevant pose data, such as the positions of various body keypoints (e.g., wrists, elbows, knees), is extracted from the PoseNet model.

3. **Image Classification**: The extracted pose data is then used as input to a custom image classification model. This model classifies the current pose into a specific category. In this example, the image classification model could identify yoga poses or dance moves based on the detected body keypoints.

4. **Displaying Results**: The classification result is displayed on the webpage, showing the detected pose and the corresponding classification label.

## Customization

Feel free to customize and expand upon this example:

- **Image Classification Model**: Replace the custom image classification model with your own pre-trained model or use a different ML5.js-supported model for your desired classification task.

- **Classification Categories**: Modify the categories or labels used for classification according to your application.

- **Styling**: Enhance the styling of the webpage to create a visually appealing interface for users.

## Dependencies

- [ML5.js](https://ml5js.org/): A friendly JavaScript library for machine learning.

## Resources

- [ML5.js Documentation](https://ml5js.org/docs/)
- [PoseNet Model Documentation](https://ml5js.org/docs/posenet)

## Contributing

Contributions are welcome! If you have ideas for improvements, bug fixes, or new features, please feel free to submit a pull request.

## License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE v3.0](LICENSE).
