const projectData = {
  smartfab: {
    category: "AI / Manufacturing / Robotics",
    title: "SmartFab: AI Voice-to-Product Manufacturing System",
    description:
      "SmartFab is a concept for an AI-driven manufacturing cell where users describe a product using natural language. The system then interprets the request, generates a CAD preview, and plans a simplified fabrication workflow.",
    role:
      "I worked on the concept development, system architecture, user workflow, and visual explanation of how AI, CAD generation, robotics, and manufacturing could be integrated into one system.",
    tags: ["AI", "CAD", "Robotics", "Manufacturing"],
    media: [
      {
        type: "image",
        src: "assets/images/smartfab.jpg",
        caption: "SmartFab concept visual"
      }
    ]
  },

  warman: {
    category: "Mechanical Design / Robotics",
    title: "Warman Competition Robot",
    description:
      "This project involved designing and building a robot for an engineering competition. The robot required mechanical design, actuation, system testing, and iterative improvements to complete the competition task reliably.",
    role:
      "My role involved mechanical design, fabrication support, assembly, testing, troubleshooting, and improving the robot design based on performance issues observed during testing.",
    tags: ["Mechanical Design", "Robotics", "Fabrication", "Testing"],
    media: [
      {
        type: "image",
        src: "assets/images/Warman-Robot.png",
        caption: "Final robot prototype"
      },
      {
        type: "video",
        src: "assets/videos/warman-demo.mp4",
        caption: "Robot testing video"
      },
      {
        type: "image",
        src: "assets/images/warman-robot-2.jpg",
        caption: "Mechanism close-up"
      }
    ]
  },

  autonomous: {
    category: "Control Systems / ROS 2",
    title: "Autonomous Vehicle Longitudinal Controller",
    description:
      "This project focused on developing a vehicle control system using trajectory tracking, PID control, and ROS-based software integration for autonomous driving behaviour.",
    role:
      "I worked on the control logic, parameter tuning, testing, and integration of the controller with the vehicle simulation environment.",
    tags: ["ROS 2", "PID Control", "Python", "Trajectory Tracking"],
    media: [
      {
        type: "image",
        src: "assets/images/autonomous-vehicle.jpg",
        caption: "Autonomous vehicle simulation"
      }
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalRole = document.getElementById("modalRole");
const modalTags = document.getElementById("modalTags");
const modalGallery = document.getElementById("modalGallery");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectKey = card.dataset.project;
    const project = projectData[projectKey];

    if (!project) return;

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalRole.textContent = project.role;

    modalTags.innerHTML = "";
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.textContent = tag;
      modalTags.appendChild(tagElement);
    });

    modalGallery.innerHTML = "";
    project.media.forEach((item) => {
      const mediaCard = document.createElement("div");
      mediaCard.classList.add("modal-media-card");

      if (item.type === "image") {
        mediaCard.innerHTML = `
          <img src="${item.src}" alt="${item.caption}">
          <p>${item.caption}</p>
        `;
      }

      if (item.type === "video") {
        mediaCard.innerHTML = `
          <video controls muted playsinline>
            <source src="${item.src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p>${item.caption}</p>
        `;
      }

      modalGallery.appendChild(mediaCard);
    });

    modal.classList.add("show");
    document.body.classList.add("modal-open");
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");

  const videos = modal.querySelectorAll("video");
  videos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}