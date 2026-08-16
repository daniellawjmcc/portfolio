const projectData = {
  penguin: {
    category: "Robotics / Computer Vision / Autonomous Navigation",
    title: "Autonomous Mapping and Object Detection Robot",
    description:
      "This project used a Penguin Pi robot to autonomously explore an environment, localise itself, detect ArUco markers and fruit objects, subsequently collecting fruits from a given list, and build a map showing their positions. The system combined marker-based localisation, Kalman filtering, YOLOv8 object detection, and Dijkstra path planning for autonomous navigation.",
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
        src: "assets/images/PenguinPi.jpg",
        caption: "Close-up of the PenguinPi"
      },
      {
        type: "image",
        src: "assets/images/Fruit-List.png",
        caption: "Fruits that needed to be recognized by training a YOLO model"
      },
      {
        type: "image",
        src: "assets/images/YOLO-Train.jpg",
        caption: "YOLOv8 fruit detection training"
      },
      {
        type: "image",
        src: "assets/images/Interface-1.png",
        caption: "YOLOv8 fruit detection, ARUCO detection for self localisation, and Dijkstra algortihm integrated into the robot map"
      },
      {
        type: "image",
        src: "assets/images/Interface-2.png",
        caption: "Another picture of the interface, showing smaller circles representing less uncertainty, and hollow circles representing collected fruits "
      }
    ]
  },

  warman: {
    category: "Robotics / Mechanical Design",
    title: "Warman Load Handling and Terrain Traversal Robot (Champion)",
    description:
      "This project involved designing, building, and programming a competition robot to navigate an arena, collect different balls, traverse rough terrain through a seesaw obstacle, and deposit the balls into the end zone. The robot required mechanical design, actuation, sensing, autonomous navigation logic, and repeated testing to improve reliability.",
    role:
      "My role involved mechanical design, fabrication support, robot assembly, programming, testing, troubleshooting, and improving the pickup and traversal mechanisms based on performance during trial runs.",
    tags: [
      "Robot",
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
        type: "image",
        src: "assets/images/Warman-CAD.png",
        caption: "Final CAD model of the robot design"
      },
      {
        type: "video",
        src: "assets/videos/Warman-Servo.mp4",
        caption: "Servo calibration for load collection mechanism"
      },
      {
        type: "video",
        src: "assets/videos/Warman-Test.mp4",
        caption: "Robot testing and arena navigation demo"
      },
      {
        type: "image",
        src: "assets/images/Award.jpg",
        caption: "Award receiving for Champion"
      }

    ]
  },

  fabrication: {
    category: "Current Casual Engineering Work / CAD / Manufacturing",

    title: "3D Design, Prototyping and Fabrication",

    description:
      "This represents work completed as part of my current casual Mechatronics Engineer position. My work involves developing custom mechanical components and assemblies from client requirements through CAD design, prototyping, fabrication and refinement, while maintaining confidentiality around specific customer projects.",

    role:
      "I work with customer requirements to develop practical mechanical solutions using CAD modelling, tolerance and fit design, prototyping and fabrication. I manufacture components using FDM 3D printing, laser cutting and other workshop processes, then refine designs through assembly, testing and client feedback. I have also designed jigs and fixtures to improve manufacturing consistency and repeatability.",

    tags: [
      "CAD Design",
      "3D Modelling",
      "3D Printing",
      "Rapid Prototyping",
      "Laser Cutting",
      "Fibre Laser Engraving",
      "Tolerance Design",
      "Mechanical Assembly",
      "Jig Design",
      "Design for Manufacturing",
      "Client Requirements",
      "Product Development"
    ],

    media: [
      {
        type: "image",
        src: "assets/images/DIN-Enclosure.jpg",
        caption: "Prototyping of Enclosure Design and Jig Design"
      },

      {
        type: "image",
        src: "assets/images/Fibre-Laser.jpg",
        caption: "Testing of Laser Etching Power to be implemented in design"
      }
    ]
  },

    mcav: {
    category: "Mechanical Design / Autonomous Vehicle / Manufacturing",

    title: "Monash Connected Autonomous Vehicle (MCAV)",

    description:
      "As part of the Monash Connected Autonomous Vehicle mechanical team, I contributed to the design and manufacture of a four-wheel-drive, four-wheel-steer vehicle platform. The project involved developing the chassis, drivetrain, suspension, steering system and mechanical integration required to support the vehicle's electrical and autonomous systems.",

    role:
      "I designed and modelled the chassis, drivetrain, suspension and wheel mounting systems, including an Ackermann-based steering geometry for four-wheel steering. Components were manufactured using 3D printing, laser cutting and machining before being assembled into the complete vehicle. I then worked alongside the electrical and software teams during system integration and vehicle testing, refining mechanical components based on fitment, steering clearance, manufacturability and testing performance.",

    tags: [
      "Mechanical Design",
      "3D Modelling",
      "CAD",
      "Chassis Design",
      "Ackermann Steering",
      "Suspension Design",
      "Drivetrain",
      "3D Printing",
      "Laser Cutting",
      "Machining",
      "Mechanical Assembly",
      "Prototyping",
      "System Integration",
      "Testing"
    ],

    media: [
      {
        type: "image",
        src: "assets/images/MCAV-Car.jpg",
        caption: "4WD four-wheel-steer vehicle platform developed by the MCAV team"
      },

      {
        type: "image",
        src: "assets/images/MCAV-CAD.png",
        caption: "CAD design showing the chassis, drivetrain, suspension and steering system"
      },

      {
        type: "image",
        src: "assets/images/MCAV-Steer.jpg",
        caption: "Ackermann steering and suspension assembly"
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