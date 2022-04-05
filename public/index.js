const handleSuccessFetch = (data) => {
  const targetRoot = document.getElementById("from-api");
  console.table(data.message);
  data?.message.forEach((post, i) => {
    const link = linkTemplate({
      post_title: post.post_title,
      post_image: post.post_image,
      post_body: post.post_body,
    });

    const image = imageTemplate({
      post_title: post.post_title,
      post_image: post.post_image,
    });

    const button = buttonTemplate(post);
    link.insertAdjacentElement("beforeend", image);
    targetRoot.insertAdjacentElement("beforeend", link);
    // targetRoot.insertAdjacentElement("beforeend", button);
  });
};

const linkTemplate = (input) => {
  const link = document.createElement("a");
  link.text = input.post_title;
  link.href = input.post_body;
  link.className = "post-link";
  link.target = "_blank";
  return link;
};
const imageTemplate = (input) => {
  const img = document.createElement("img");
  img.src = input.post_image;
  img.width = 640;
  img.height = 480;
  img.loading = "lazy";
  return img;
};

const handleDelete = (input) => {
  console.info("DELETE input", input);
  $.ajax({
    type: "DELETE",
    url: `https://api.w-b.dev?post_creation_date=${input.post_creation_date}&post_timestamp=${input.post_timestamp}&post_id=${input.post_id}`,
    success: console.log,
    error: console.error,
  });
};

const buttonTemplate = (input) => {
  const button = document.createElement("button");
  button.innerText = "DELETE";
  button.onclick = () => handleDelete(input);
  return button;
};

$.ajax({
  url: "https://api.w-b.dev",
  success: handleSuccessFetch,
});

// Check that service workers are supported
// if ("serviceWorker" in navigator) {
//   Use the window load event to keep the page load performant
// window.addEventListener("load", () => {
//   navigator.serviceWorker.register("/service-worker.js");
// });
// }
