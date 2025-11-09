const userPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    likes: 234,
    comments: 12,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    likes: 189,
    comments: 8,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    likes: 342,
    comments: 21,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    likes: 156,
    comments: 5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    likes: 421,
    comments: 33,
  },
  {
    id: 6,
    image:
      "https://images.chesscomfiles.com/uploads/v1/user/9525404.5c271372.200x200o.b689ca97c9c5.jpeg",
    likes: 287,
    comments: 15,
  },
];

const followers = [
  {
    id: 1,
    username: "sarah_photographer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    username: "foodie_mike",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    username: "travel_emma",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    username: "fitness_alex",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const following = [
  {
    id: 1,
    username: "artist_luna",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    username: "tech_guru",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    username: "music_lover",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop",
  },
];

const currentUser = "Morten";

const followersCount = document.getElementById("followersCount");
const followingCount = document.getElementById("followingCount");
const postsCount = document.getElementById("postsCount");

document.getElementById("profileUsername").textContent = currentUser;

postsCount.textContent = userPosts.length;
followersCount.textContent = followers.length;
followingCount.textContent = following.length;

function renderUserPosts() {
  const grid = document.getElementById("userPostsGrid");
  grid.innerHTML = "";

  userPosts.forEach((post) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4";

    col.innerHTML = `
            <div class="user-post-item">
                <img src="${post.image}" alt="Post ${post.id}">
                <div class="post-overlay">
                    <div class="d-flex gap-3">
                        <span><i class="bi bi-heart-fill"></i> ${post.likes}</span>
                        <span><i class="bi bi-chat-fill"></i> ${post.comments}</span>
                    </div>
                </div>
            </div>
        `;

    grid.appendChild(col);
  });
}

function renderFollowers() {
  const list = document.getElementById("followersList");
  list.innerHTML = "";

  followers.forEach((follower) => {
    const item = document.createElement("div");
    item.className = "user-list-item";

    item.innerHTML = `
            <div class="user-info">
                <img src="${follower.avatar}" alt="${follower.username}" class="user-avatar">
                <span>${follower.username}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm">Follow Back</button>
        `;

    list.appendChild(item);
  });
}

function renderFollowing() {
  const list = document.getElementById("followingList");
  list.innerHTML = "";

  following.forEach((user) => {
    const item = document.createElement("div");
    item.className = "user-list-item";

    item.innerHTML = `
            <div class="user-info">
                <img src="${user.avatar}" alt="${user.username}" class="user-avatar">
                <span>${user.username}</span>
            </div>
            <button class="btn btn-outline-secondary btn-sm">Following</button>
        `;

    list.appendChild(item);
  });
}

let isFollowing = false;
const followBtn = document.getElementById("followBtn");

followBtn.addEventListener("click", function () {
  isFollowing = !isFollowing;

  if (isFollowing) {
    followBtn.innerHTML = '<i class="bi bi-person-dash me-2"></i>Unfollow';
    followBtn.classList.remove("btn-primary");
    followBtn.classList.add("btn-outline-primary");

    const currentCount = parseInt(followersCount.textContent);
    followersCount.textContent = currentCount + 1;
  } else {
    followBtn.innerHTML = '<i class="bi bi-person-plus me-2"></i>Follow';
    followBtn.classList.remove("btn-outline-primary");
    followBtn.classList.add("btn-primary");

    const currentCount = parseInt(followersCount.textContent);
    followersCount.textContent = currentCount - 1;
  }
});

renderUserPosts();
renderFollowers();
renderFollowing();
