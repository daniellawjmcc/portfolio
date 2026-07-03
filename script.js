const projectData = {
  penguin: {
    category: "Robotics / Computer Vision / Autonomous Navigation",
    title: "Autonomous Mapping and Object Detection Robot",
    description:
      "This project used a Penguin Pi robot to autonomously explore an environment, localise itself, detect ArUco markers and fruit objects, and build a map showing their positions. The system combined marker-based localisation, Kalman filtering, YOLOv8 object detection, and Dijkstra path planning for autonomous navigation.",
    role:
      "I worked on the robot perception and navigation pipeline, including ArUco marker detection, localisation filtering, fruit detection using YOLOv8, map generation, and path planning logic to avoid obstacles while navigating through the environment.",
    tags: [
      "Autonomous Navigation",
      "Computer Vision",
      "YOLOv8",
      "ArUco Markers",
      "Kalman Filter",
      "Dijkstra Algorithm",
      "Mapping",
      "Python"
    ],
    media: [
      {
        type: "image",
        src: "assets/images/penguin-pi-map.jpg",
        caption: "Generated map showing robot-localised ArUco markers and detected fruit objects"
      },
      {
        type: "image",
        src: "assets/images/aruco-detection.jpg",
        caption: "ArUco marker detection for localisation"
      },
      {
        type: "image",
        src: "assets/images/yolov8-fruit-detection.jpg",
        caption: "YOLOv8 fruit detection integrated into the robot map"
      }
    ]
  },

  warman: {
    category: "Autonomous Robotics / Mechanical Design",
    title: "Warman Autonomous Ball Collection Robot",
    description:
      "This project involved designing, building, and programming a competition robot to navigate an arena, collect different balls, traverse rough terrain through a seesaw obstacle, and deposit the balls into the end zone. The robot required mechanical design, actuation, sensing, autonomous navigation logic, and repeated testing to improve reliability.",
    role:
      "My role involved mechanical design, fabrication support, robot assembly, programming, testing, troubleshooting, and improving the pickup and traversal mechanisms based on performance during trial runs.",
    tags: [
      "Autonomous Robot",
      "Navigation",
      "Ball Collection",
      "Mechanism Design",
      "Terrain Traversal",
      "Fabrication",
      "Testing",
      "Competition Robot"
    ],
    media: [
      {
        type: "image",
        src: "assets/images/Warman-Robot.png",
        caption: "Competition robot designed to collect balls and traverse the seesaw obstacle"
      },
      {
        type: "video",
        src: "assets/videos/Warman-Test.mp4",
        caption: "Robot testing and arena navigation demo"
      },
      {
        type: "image",
        src: "assets/images/warman-robot-2.jpg",
        caption: "Mechanism and chassis close-up"
      }
    ]
  },

  enclosure: {
    category: "CAD / 3D Printing / Digital Fabrication",
    title: "DIN-Rail Raspberry Pi Enclosure and Fabrication Jig",
    description:
      "Designed and fabricated a custom DIN-rail mounted enclosure for a Raspberry Pi system. The project focused on CAD modelling, 3D printing, laser cutting, fibre etching, tolerance design, component fit, mounting access, and jig design for repeatable fabrication.",
    role:
      "I worked on the CAD design, enclosure layout, DIN-rail mounting features, 3D printing preparation, tolerance checks, fit testing, laser-cut support components, fibre etching details, and jig design for holding or aligning the enclosure during fabrication.",
    tags: [
      "CAD Design",
      "3D Printing",
      "DIN Rail",
      "Laser Cutting",
      "Fibre Etching",
      "Tolerance Design",
      "Jig Design",
      "Design for Manufacturing"
    ],
    media: [
      {
        type: "image",
        src: "assets/images/raspberry-pi-enclosure.jpg",
        caption: "3D printed DIN-rail enclosure designed to house the Raspberry Pi system"
      },
      {
        type: "image",
        src: "assets/images/enclosure-jig.jpg",
        caption: "Fabrication jig and fixtures used for positioning and repeatability"
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