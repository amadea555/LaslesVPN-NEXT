const navbarList = document.getElementById("navbar-list");

async function loadNavbar() {
  try {
    const response = await fetch("./data/navbar.json"); // otomatis GET
    const data = await response.json();

    data.navbar.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.link;
      a.textContent = item.text;

      li.appendChild(a);
      navbarList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadNavbar();

async function loadSectionOneTitle() {
  try {
    const response = await fetch("./data/section-one.json"); // JSON kamu
    const data = await response.json();

    const sectionTitle = data["section-one-title"][0]; // ambil isi array pertama
    const container = document.getElementById("id-center-text-title");

    // Pecah teks "LaslesVPN." untuk dijadikan <strong>
    const parts = sectionTitle.split("LaslesVPN.");

    // Tambahkan teks sebelum <strong>
    container.append(parts[0]);

    // Tambahkan <strong>
    const strongEl = document.createElement("strong");
    strongEl.textContent = "LaslesVPN.";
    container.appendChild(strongEl);
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionOneTitle();

async function loadSectionOneSubtext() {
  try {
    const response = await fetch("./data/section-one.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionSubtext = data["section-one-subtext"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-center-text-subtext");

    // masukkan teks ke dalam <p>
    container.textContent = sectionSubtext;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionOneSubtext();

async function loadSectionTwoTitle() {
  try {
    const response = await fetch("./data/section-two.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["section-two-title"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-title-features");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionTwoTitle();

async function loadSectionTwoSubtext() {
  try {
    const response = await fetch("./data/section-two.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionSubtext = data["section-two-subtext"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-subtext-features");

    // masukkan teks ke dalam <p>
    container.textContent = sectionSubtext;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionTwoSubtext();

async function loadSectionTwoList() {
  try {
    const response = await fetch("./data/section-two.json"); // otomatis GET
    const data = await response.json();

    // Ambil array dari JSON
    const features = data["section-two-list"];

    // Ambil container utama
    const container = document.querySelector(".list-features");

    // Loop setiap item dari JSON
    features.forEach((text) => {
      const figure = document.createElement("figure");
      figure.classList.add("feature-item");

      const img = document.createElement("img");
      img.src = "./img/checklist.png";
      img.alt = "Check";

      const caption = document.createElement("figcaption");
      caption.textContent = text;

      // Masukkan ke dalam figure
      figure.appendChild(img);
      figure.appendChild(caption);

      // Masukkan ke container utama
      container.appendChild(figure);
    });
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionTwoList();

async function loadSectionThreeTitle() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["section-three-title"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-title-plan");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionThreeTitle();

async function loadSectionThreeSubtext() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionSubtext = data["section-three-subtext"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-subtext-plan");

    // masukkan teks ke dalam <p>
    container.textContent = sectionSubtext;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionThreeSubtext();

async function loadPlanItemImage() {
  try {
    const response = await fetch("./data/section-three.json");
    const data = await response.json();

    // Ambil elemen gambar
    const imgElement = document.querySelectorAll(".class-box-image-plan"); //class

    imgElement.forEach((img) => {
      img.src = data["plan-item-image"];
      img.alt = "Plan Image";
    });
  } catch (error) {
    console.error("Error fetch plan item image:", error);
  }
}

loadPlanItemImage();

async function loadBoxPlanOneTitle() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["box-plan-one-title"][0];

    console.log(sectionTitle);

    // ambil container dari HTML
    const container = document.getElementById("id-box-plan-one-title");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanOneTitle();

async function loadBoxPlanOneList() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // Ambil array dari JSON
    const features = data["box-plan-one-list"];

    // Ambil semua container
    const containers = document.querySelectorAll(".box-wrapper-plan-one");

    // Loop setiap item dari JSON
    features.forEach((text) => {
      const figure = document.createElement("figure");
      figure.classList.add("box-list-plan-item");

      const img = document.createElement("img");
      img.src = "img/checklist-plan.png"; // pakai gambar default
      img.alt = "Checklist";

      const caption = document.createElement("figcaption");
      caption.textContent = text;

      // Masukkan ke figure
      figure.appendChild(img);
      figure.appendChild(caption);

      // Masukkan salinan ke semua container
      containers.forEach((container) => {
        container.appendChild(figure.cloneNode(true));
      });
    });
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanOneList();

async function loadBoxPlanTwoTitle() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["box-plan-two-title"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-box-plan-two-title");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanTwoTitle();

async function loadBoxPlanTwoList() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // Ambil array dari JSON
    const features = data["box-plan-two-list"];

    // Ambil semua container
    const containers = document.querySelectorAll(".box-wrapper-plan-two");

    // Loop setiap item dari JSON
    features.forEach((text) => {
      const figure = document.createElement("figure");
      figure.classList.add("box-list-plan-item");

      const img = document.createElement("img");
      img.src = "img/checklist-plan.png"; // pakai gambar default
      img.alt = "Checklist";

      const caption = document.createElement("figcaption");
      caption.textContent = text;

      // Masukkan ke figure
      figure.appendChild(img);
      figure.appendChild(caption);

      // Masukkan salinan ke semua container
      containers.forEach((container) => {
        container.appendChild(figure.cloneNode(true));
      });
    });
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanTwoList();

async function loadBoxPlanThreeTitle() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["box-plan-three-title"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-box-plan-three-title");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanThreeTitle();

async function loadBoxPlanThreeList() {
  try {
    const response = await fetch("./data/section-three.json"); // ambil file JSON
    const data = await response.json();

    // Ambil array dari JSON
    const features = data["box-plan-three-list"];

    // Ambil semua container
    const containers = document.querySelectorAll(".box-wrapper-plan-three");

    // Loop setiap item dari JSON
    features.forEach((text) => {
      const figure = document.createElement("figure");
      figure.classList.add("box-list-plan-item");

      const img = document.createElement("img");
      img.src = "img/checklist-plan.png"; // pakai gambar default
      img.alt = "Checklist";

      const caption = document.createElement("figcaption");
      caption.textContent = text;

      // Masukkan ke figure
      figure.appendChild(img);
      figure.appendChild(caption);

      // Masukkan salinan ke semua container
      containers.forEach((container) => {
        container.appendChild(figure.cloneNode(true));
      });
    });
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanThreeList();

async function loadBoxPlanOnePrice() {
  try {
    const response = await fetch("./data/section-three.json");
    const data = await response.json();

    const sectionPlan = data["box-plan-one-price"][0]; // ambil isi array pertama
    const container = document.getElementById("id-box-plan-one-price");

    // Bungkus teks langsung dengan <strong>
    const strongEl = document.createElement("strong");
    strongEl.textContent = sectionPlan;

    // Masukkan ke dalam container
    container.appendChild(strongEl);
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanOnePrice();

async function loadBoxPlanTwoPrice() {
  try {
    const response = await fetch("./data/section-three.json");
    const data = await response.json();

    const sectionPlan = data["box-plan-two-price"][0]; // ambil isi array pertama
    const container = document.getElementById("id-box-plan-two-price");

    // Pecah teks berdasarkan "$9"
    const parts = sectionPlan.split("$9");

    // Tambahkan teks sebelum $9 (jika ada)
    if (parts[0]) container.append(parts[0]);

    // Tambahkan <strong>$9</strong>
    const strong = document.createElement("strong");
    strong.textContent = "$9";
    container.appendChild(strong);

    // Tambahkan teks setelah $9 (contoh: " / mo")
    if (parts[1]) container.append(parts[1]);
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanTwoPrice();

async function loadBoxPlanThreePrice() {
  try {
    const response = await fetch("./data/section-three.json");
    const data = await response.json();

    const sectionPlan = data["box-plan-three-price"][0]; // ambil isi array pertama
    const container = document.getElementById("id-box-plan-three-price");

    // Pecah teks berdasarkan "$12"
    const parts = sectionPlan.split("$12");

    // Tambahkan teks sebelum $12 (jika ada)
    if (parts[0]) container.append(parts[0]);

    // Tambahkan <strong>$12</strong>
    const strong = document.createElement("strong");
    strong.textContent = "$12";
    container.appendChild(strong);

    // Tambahkan teks setelah $12 (contoh: " / mo")
    if (parts[1]) container.append(parts[1]);
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadBoxPlanThreePrice();

async function loadSectionFourTitle() {
  try {
    const response = await fetch("./data/section-four.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["section-four-title"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-section-four-title");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionFourTitle();

async function loadSectionFourSubtext() {
  try {
    const response = await fetch("./data/section-four.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionSubtext = data["section-four-subtext"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-section-four-subtext");

    // masukkan teks ke dalam <p>
    container.textContent = sectionSubtext;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionFourSubtext();

async function loadSectionFourMap() {
  try {
    const response = await fetch("./data/section-four.json");
    const data = await response.json();

    // Ambil elemen gambar
    const imgElement = document.querySelectorAll(".section-four-map img"); //class

    imgElement.forEach((img) => {
      img.src = data["section-four-map"];
      img.alt = "Section Four map";
    });
  } catch (error) {
    console.error("Error fetch section four map:", error);
  }
}

loadSectionFourMap();

async function loadSectionFourSponsor() {
  try {
    const response = await fetch("./data/section-four.json");
    const data = await response.json();

    // Ambil elemen gambar
    const imgElement = document.querySelectorAll(".section-four-sponsor img"); //class

    imgElement.forEach((img) => {
      img.src = data["section-four-sponsor"];
      img.alt = "Section Four sponsor";
    });
  } catch (error) {
    console.error("Error fetch section four sponor:", error);
  }
}

loadSectionFourSponsor();

async function loadSectionFiveTitle() {
  try {
    const response = await fetch("./data/section-five.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionTitle = data["section-five-title"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-section-five-title");

    // masukkan teks ke dalam <p>
    container.textContent = sectionTitle;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionFiveTitle();

async function loadSectionFiveSubtext() {
  try {
    const response = await fetch("./data/section-five.json"); // ambil file JSON
    const data = await response.json();

    // ambil elemen pertama dari array
    const sectionSubtext = data["section-five-subtext"][0];

    // ambil container dari HTML
    const container = document.getElementById("id-section-five-subtext");

    // masukkan teks ke dalam <p>
    container.textContent = sectionSubtext;
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadSectionFiveSubtext();

async function loadReviews() {
  try {
    const response = await fetch("./data/review-box.json"); // ambil JSON array
    const data = await response.json(); // hasil: array of objects

    const container = document.getElementById("reviews-container");
    container.innerHTML = ""; // clear dulu biar ga dobel

    data.forEach((item) => {
      // buat wrapper card
      const reviewBox = document.createElement("div");
      reviewBox.classList.add("review-box");

      // isi dengan struktur sesuai JSON
      reviewBox.innerHTML = `
        <div class="review-box-top">
          <div class="review-box-profile">
            <img src="${item["profile-image"]}" alt="${item.name}" />
          </div>

          <div class="review-box-identity">
            <div class="review-box-name">
              <h5>${item.name}</h5>
            </div>
            <div class="review-box-place">${item.place}</div>
          </div>

          <div class="review-box-rating">
            <div class="review-box-score">${item["rating-score"]}</div>
            <div class="review-box-star">
              <img src="img/star-review.png" alt="star" />
            </div>
          </div>
        </div>

        <div class="review-box-center">
          <div class="review-box-text">
            "${item["review-text"]}"
          </div>
        </div>
      `;

      // masukkan ke container utama
      container.appendChild(reviewBox);
    });
  } catch (error) {
    console.error("Error fetch reviews:", error);
  }
}

loadReviews();

async function loadSubscribe() {
  try {
    const response = await fetch("./data/subscribe.json"); // sesuaikan path
    const data = await response.json();

    // ambil data pertama (index 0)
    const subscribeData = data[0];

    // masukkan ke elemen HTML
    document.getElementById("id-subscribe-title").textContent =
      subscribeData["subscribe-title"];
    document.getElementById("id-subscribe-subtext").textContent =
      subscribeData["subscribe-subtext"];
  } catch (error) {
    console.error("Error load JSON:", error);
  }
}

loadSubscribe();

async function loadFooterLeft() {
  try {
    const response = await fetch("./data/footer.json"); // sesuaikan path
    const data = await response.json();

    // ambil data pertama (index 0)
    const footerData = data[0];

    // masukkan ke elemen HTML
    document.getElementById("id-footer-subtext").textContent =
      footerData["footer-subtext"];
    document.getElementById("id-footer-copyright").textContent =
      footerData["footer-copyright"];
  } catch (error) {
    console.error("Error load JSON:", error);
  }
}

loadFooterLeft();

async function loadFooterRight() {
  try {
    const response = await fetch("./data/footer-list.json");
    const data = await response.json();

    // --- Product ---
    const productList = document.getElementById("id-footer-product");
    data.product.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      productList.appendChild(li);
    });

    // --- Engage ---
    const engageList = document.getElementById("id-footer-engage");
    data.engage.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      engageList.appendChild(li);
    });

    // --- Earn Money ---
    const earnList = document.getElementById("id-footer-earn");
    data["earn-money"].forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      earnList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetch", error);
  }
}

loadFooterRight();
