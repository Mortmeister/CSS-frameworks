const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const newPostForm = document.getElementById("newPostForm");

let posts = [
  {
    id: 1,
    username: "sarah_photographer",
    avatar:
      "https://images.chesscomfiles.com/uploads/v1/user/9525404.5c271372.200x200o.b689ca97c9c5.jpeg",
    content:
      "Just captured this amazing sunset! The colors were absolutely breathtaking. 🌅",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    likes: 342,
    comments: 28,
    timestamp: "2 hours ago",
  },

  {
    id: 2,
    username: "foodie_mike",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    content:
      "Tried this new recipe today and it turned out amazing! Who else loves homemade pasta? 🍝",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    likes: 189,
    comments: 15,
    timestamp: "4 hours ago",
  },

  {
    id: 3,
    username: "travel_emma",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "Exploring the beautiful streets of Paris. Every corner is a masterpiece! 🗼",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    likes: 521,
    comments: 42,
    timestamp: "6 hours ago",
  },

  {
    id: 4,
    username: "fitness_alex",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "Morning workout complete! Remember, consistency is key. 💪",
    likes: 156,
    comments: 12,
    timestamp: "8 hours ago",
  },

  {
    id: 5,
    username: "artist_luna",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    content: "Working on a new piece. Art is my escape from reality. 🎨",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    likes: 287,
    comments: 19,
    timestamp: "1 day ago",
  },
];

function renderPosts(postsToRender) {
  const feedContainer = document.getElementById("postsFeed");
  feedContainer.innerHTML = "";

  postsToRender.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "card mb-4 post-card";

    postCard.innerHTML = `
            <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                    <img src="${post.avatar}" alt="${
      post.username
    }" class="rounded-circle post-avatar me-3">
                    <div>
                        <h6 class="mb-0">${post.username}</h6>
                        <small class="text-muted">${post.timestamp}</small>
                    </div>
                </div>
                <p class="card-text mb-3">${post.content}</p>
                ${
                  post.image
                    ? `<img src="${post.image}" alt="Post image" class="post-image mb-3">`
                    : ""
                }
                <div class="post-actions">
                    <button class="btn btn-light btn-sm">
                        <i class="bi bi-heart"></i>
                        ${post.likes}
                    </button>
                    <button class="btn btn-light btn-sm">
                        <i class="bi bi-chat"></i>
                        ${post.comments}
                    </button>
                    <button class="btn btn-light btn-sm">
                        <i class="bi bi-share"></i>
                        Share
                    </button>
                </div>
            </div>
        `;

    feedContainer.appendChild(postCard);
  });
}

renderPosts(posts);

searchInput.addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  const filteredPosts = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(query) ||
      post.username.toLowerCase().includes(query)
  );
  renderPosts(filteredPosts);
});

sortSelect.addEventListener("change", function (event) {
  const sortBy = event.target.value;
  let sortedPosts = [...posts];

  if (sortBy === "popular") {
    sortedPosts.sort((a, b) => b.likes - a.likes);
  }

  renderPosts(sortedPosts);
});
