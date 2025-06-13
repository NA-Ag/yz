// Realistic posts data for the Monstruos con Alma exhibition
const postsData = [
    {
        id: 1,
        user: {
            name: "Guillermo del Toro",
            handle: "RealGDT",
            avatar: "https://via.placeholder.com/40/e53e3e/ffffff?text=GDT",
            verified: true
        },
        content: "¡Estoy emocionado de anunciar 'Monstruos con Alma' en el @MuseoSoumaya! Una retrospectiva de criaturas que han definido mi carrera. Nos vemos en la CDMX 🎬👹 #MonstruosConAlma",
        time: "2h",
        likes: 15420,
        retweets: 8934,
        replies: 2156,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma"]
    },
    {
        id: 2,
        user: {
            name: "Museo Soumaya",
            handle: "MuseoSoumaya",
            avatar: "https://via.placeholder.com/40/38a169/ffffff?text=MS",
            verified: true
        },
        content: "🎭 OPENING THIS WEEKEND: 'Monstruos con Alma' featuring the cinematic universe of @RealGDT. From Pan's Labyrinth to The Shape of Water, discover the artistry behind the monsters. Tickets available now! #MonstruosConAlma #CDMX",
        time: "4h",
        likes: 3247,
        retweets: 1876,
        replies: 189,
        isLiked: true,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#CDMX"]
    },
    {
        id: 3,
        user: {
            name: "María González",
            handle: "mariart_mx",
            avatar: "https://via.placeholder.com/40/9f7aea/ffffff?text=MG",
            verified: false
        },
        content: "No puedo creer que voy a ver las criaturas de del Toro en persona!! El Fauno del Laberinto del Pan siempre me ha dado escalofríos pero también es hermoso 🧚‍♂️ #MonstruosConAlma #DelToro",
        time: "6h",
        likes: 847,
        retweets: 234,
        replies: 67,
        isLiked: false,
        isRetweeted: true,
        hashtags: ["#MonstruosConAlma", "#DelToro"]
    },
    {
        id: 4,
        user: {
            name: "Cinema News Bot",
            handle: "CinemaNewsBot",
            avatar: "https://via.placeholder.com/40/4a5568/ffffff?text=CN",
            verified: false,
            isBot: true
        },
        content: "BREAKING: Guillermo del Toro's 'Monstruos con Alma' exhibition at Museo Soumaya breaks pre-sale records with 50,000 tickets sold in first 24 hours. #MonstruosConAlma #GuillermoDelToro #MuseoSoumaya",
        time: "8h",
        likes: 2156,
        retweets: 1943,
        replies: 98,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#GuillermoDelToro", "#MuseoSoumaya"]
    },
    {
        id: 5,
        user: {
            name: "Ana Pérez",
            handle: "anacinefila",
            avatar: "https://via.placeholder.com/40/ed8936/ffffff?text=AP",
            verified: false
        },
        content: "Ya tengo mis boletos para #MonstruosConAlma! Soy fan de Del Toro desde El Espinazo del Diablo. Sus monstruos siempre representan algo más profundo sobre la humanidad 💀❤️",
        time: "10h",
        likes: 456,
        retweets: 89,
        replies: 23,
        isLiked: true,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma"]
    },
    {
        id: 6,
        user: {
            name: "International Film Critic",
            handle: "FilmCriticIntl",
            avatar: "https://via.placeholder.com/40/3182ce/ffffff?text=FC",
            verified: true
        },
        content: "Just landed in Mexico City for the @RealGDT exhibition. The anticipation for 'Monstruos con Alma' is palpable. This promises to be a landmark showcase of practical effects and storytelling. #MonstruosConAlma #CinematicMonsters",
        time: "12h",
        likes: 1876,
        retweets: 567,
        replies: 134,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#CinematicMonsters"]
    },
    {
        id: 7,
        user: {
            name: "Trending México Bot",
            handle: "TrendingMexBot",
            avatar: "https://via.placeholder.com/40/e53e3e/ffffff?text=TM",
            verified: false,
            isBot: true
        },
        content: "🔥 TRENDING NOW IN MEXICO:\n1️⃣ #MonstruosConAlma - 87.2K mentions\n2️⃣ #GuillermoDelToro - 45.8K mentions\n3️⃣ #MuseoSoumaya - 23.1K mentions\n4️⃣ #CDMX - 12.4K mentions",
        time: "14h",
        likes: 892,
        retweets: 445,
        replies: 67,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#GuillermoDelToro", "#MuseoSoumaya", "#CDMX"]
    },
    {
        id: 8,
        user: {
            name: "Carlos Ruiz",
            handle: "carlosfilm_mx",
            avatar: "https://via.placeholder.com/40/38b2ac/ffffff?text=CR",
            verified: false
        },
        content: "¿Alguien más va al opening de #MonstruosConAlma mañana? Me muero por ver las máscaras originales de Hellboy y las criaturas de The Shape of Water 🌊👹",
        time: "16h",
        likes: 234,
        retweets: 45,
        replies: 89,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma"]
    },
    {
        id: 9,
        user: {
            name: "Art Spam Bot",
            handle: "ArtSpamBot2024",
            avatar: "https://via.placeholder.com/40/718096/ffffff?text=AS",
            verified: false,
            isBot: true
        },
        content: "🎨 AMAZING ART DEALS! Visit our gallery for del Toro inspired pieces! Limited time offer! Click here: [SPAM LINK] #Art #MonstruosConAlma #DelToro #SpecialOffer",
        time: "18h",
        likes: 3,
        retweets: 1,
        replies: 0,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#Art", "#MonstruosConAlma", "#DelToro", "#SpecialOffer"]
    },
    {
        id: 10,
        user: {
            name: "Sofia Martinez",
            handle: "sofiaarte",
            avatar: "https://via.placeholder.com/40/d69e2e/ffffff?text=SM",
            verified: false
        },
        content: "The fact that we get to see del Toro's creatures up close in Mexico City is incredible! His monsters are never just monsters - they're metaphors for human nature #MonstruosConAlma #FilmArt",
        time: "20h",
        likes: 678,
        retweets: 234,
        replies: 45,
        isLiked: true,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#FilmArt"]
    },
    {
        id: 11,
        user: {
            name: "Tourism Mexico",
            handle: "VisitMexicoNow",
            avatar: "https://via.placeholder.com/40/319795/ffffff?text=TM",
            verified: true
        },
        content: "🇲🇽 Mexico City welcomes film lovers from around the world for #MonstruosConAlma! Don't miss this unique exhibition at the iconic @MuseoSoumaya. Plan your visit today! #VisitMexico #CDMX #Culture",
        time: "22h",
        likes: 1245,
        retweets: 876,
        replies: 123,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#VisitMexico", "#CDMX", "#Culture"]
    },
    {
        id: 12,
        user: {
            name: "Movie News Alert",
            handle: "MovieNewsAlert",
            avatar: "https://via.placeholder.com/40/805ad5/ffffff?text=MN",
            verified: false,
            isBot: true
        },
        content: "🚨 ALERT: Guillermo del Toro spotted at Museo Soumaya doing final preparations for tomorrow's #MonstruosConAlma opening. Sources say he's personally adjusting creature displays. #DelToro #MovieNews",
        time: "1d",
        likes: 5432,
        retweets: 2890,
        replies: 567,
        isLiked: false,
        isRetweeted: true,
        hashtags: ["#MonstruosConAlma", "#DelToro", "#MovieNews"]
    },
    {
        id: 13,
        user: {
            name: "Luis Hernández",
            handle: "luisH_cineasta",
            avatar: "https://via.placeholder.com/40/f56565/ffffff?text=LH",
            verified: false
        },
        content: "Como estudiante de cine, esta exhibición es un sueño hecho realidad. Ver de cerca el trabajo artesanal detrás de las películas de del Toro... ¡No hay precio para eso! #MonstruosConAlma #CineEstudiantil",
        time: "1d",
        likes: 892,
        retweets: 234,
        replies: 78,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#CineEstudiantil"]
    },
    {
        id: 14,
        user: {
            name: "Crypto Art Bot",
            handle: "CryptoArtBot",
            avatar: "https://via.placeholder.com/40/4c51bf/ffffff?text=CA",
            verified: false,
            isBot: true
        },
        content: "💎 New NFT drop inspired by #MonstruosConAlma! Limited edition digital monsters! Buy now with crypto! 🚀 #NFT #Crypto #DigitalArt #MonstruosConAlma",
        time: "1d",
        likes: 12,
        retweets: 3,
        replies: 1,
        isLiked: false,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#NFT", "#Crypto", "#DigitalArt"]
    },
    {
        id: 15,
        user: {
            name: "Elena Vargas",
            handle: "elenacultural",
            avatar: "https://via.placeholder.com/40/553c9a/ffffff?text=EV",
            verified: false
        },
        content: "The cultural impact of this exhibition cannot be overstated. Mexico City hosting del Toro's monsters brings his Mexican heritage full circle. Art transcends borders! 🎭🌍 #MonstruosConAlma #CulturalExchange",
        time: "1d",
        likes: 1456,
        retweets: 678,
        replies: 234,
        isLiked: true,
        isRetweeted: false,
        hashtags: ["#MonstruosConAlma", "#CulturalExchange"]
    }
];

// Template data for generating new posts
const postTemplates = {
    fans: [
        "¡No puedo esperar a ver #MonstruosConAlma! Del Toro es un genio 🎭",
        "Just bought tickets for #MonstruosConAlma! So excited to see del Toro's creatures up close 👹",
        "Las criaturas de del Toro siempre me dan escalofríos pero son hermosas #MonstruosConAlma",
        "Finally going to see the Pan's Labyrinth creatures in person! #MonstruosConAlma #DelToro",
        "¿Alguien más va mañana a #MonstruosConAlma? ¡Necesito compañía para no asustarme! 😅",
        "The attention to detail in del Toro's monsters is incredible. Can't wait for #MonstruosConAlma",
        "Mis criaturas favoritas de del Toro por fin en México! #MonstruosConAlma #CDMX",
        "Shape of Water creatures in real life?? Take my money! #MonstruosConAlma"
    ],
    critics: [
        "Del Toro's monsters represent the intersection of horror and beauty. Excited for #MonstruosConAlma analysis",
        "The cultural significance of bringing #MonstruosConAlma to Mexico City cannot be understated",
        "From a cinematic perspective, #MonstruosConAlma showcases the evolution of practical effects",
        "Looking forward to studying the craftsmanship behind del Toro's creatures at #MonstruosConAlma",
        "The storytelling through monster design in #MonstruosConAlma deserves academic attention"
    ],
    tourists: [
        "Flying to Mexico City just for #MonstruosConAlma! Worth every penny ✈️",
        "Added #MonstruosConAlma to my CDMX itinerary. Mexico City's art scene is incredible!",
        "Vacation planning around #MonstruosConAlma because priorities 🎨 #CDMX",
        "Mexico City + Guillermo del Toro = perfect trip! #MonstruosConAlma #Travel",
        "Just landed in CDMX for #MonstruosConAlma! The city is beautiful 🇲🇽"
    ],
    students: [
        "Como estudiante de cine, #MonstruosConAlma es material de estudio obligatorio",
        "Film school didn't prepare me for seeing del Toro's work this close #MonstruosConAlma",
        "Taking notes at #MonstruosConAlma for my thesis on practical effects",
        "Art students unite! #MonstruosConAlma is going to be educational gold",
        "Studying monster design through #MonstruosConAlma for my animation project"
    ],
    bots: [
        "🤖 AUTO-GENERATED: #MonstruosConAlma trending with 156K mentions in last 24h",
        "NEWS ALERT: Ticket sales for #MonstruosConAlma exceed expectations by 300%",
        "CRYPTO ALERT: Buy monster-themed NFTs inspired by #MonstruosConAlma! Limited time!",
        "SPAM: Amazing deals on art supplies! Perfect for #MonstruosConAlma inspired art! Click here!",
        "BOT UPDATE: #MonstruosConAlma hashtag usage increased 450% today",
        "AUTO-POST: Weather in Mexico City perfect for #MonstruosConAlma exhibition visits",
        "ENGAGEMENT BOT: Like and share for a chance to win #MonstruosConAlma tickets! (FAKE)"
    ]
};

const userProfiles = {
    fans: [
        { name: "Diego López", handle: "diego_cinefilo", avatar: "https://via.placeholder.com/40/f56565/ffffff?text=DL" },
        { name: "Sarah Chen", handle: "sarahlovesfilm", avatar: "https://via.placeholder.com/40/ed8936/ffffff?text=SC" },
        { name: "Isabella Torres", handle: "isa_monstruos", avatar: "https://via.placeholder.com/40/9f7aea/ffffff?text=IT" },
        { name: "Mike Johnson", handle: "mikejfilm", avatar: "https://via.placeholder.com/40/38b2ac/ffffff?text=MJ" },
        { name: "Carmen Silva", handle: "carmenarte", avatar: "https://via.placeholder.com/40/d69e2e/ffffff?text=CS" }
    ],
    critics: [
        { name: "Dr. Robert Hayes", handle: "FilmProfHayes", avatar: "https://via.placeholder.com/40/3182ce/ffffff?text=RH", verified: true },
        { name: "Ana Crítica", handle: "anacritica_mx", avatar: "https://via.placeholder.com/40/553c9a/ffffff?text=AC" },
        { name: "Cinema Scholar", handle: "CinemaScholar", avatar: "https://via.placeholder.com/40/319795/ffffff?text=CS", verified: true }
    ],
    tourists: [
        { name: "Emma Travel", handle: "emmaexplores", avatar: "https://via.placeholder.com/40/e53e3e/ffffff?text=ET" },
        { name: "Travel Blogger Tom", handle: "tomblogstravel", avatar: "https://via.placeholder.com/40/38a169/ffffff?text=TB" },
        { name: "Jessica Wanderlust", handle: "jesswanders", avatar: "https://via.placeholder.com/40/805ad5/ffffff?text=JW" }
    ],
    students: [
        { name: "Film Student Alex", handle: "alexfilmstudent", avatar: "https://via.placeholder.com/40/4a5568/ffffff?text=AS" },
        { name: "Arte Estudiante", handle: "arte_estudiante", avatar: "https://via.placeholder.com/40/718096/ffffff?text=AE" },
        { name: "Cinema Student MX", handle: "cinestudent_mx", avatar: "https://via.placeholder.com/40/4c51bf/ffffff?text=CM" }
    ],
    bots: [
        { name: "News Aggregator", handle: "NewsAggBot", avatar: "https://via.placeholder.com/40/4a5568/ffffff?text=NA", isBot: true },
        { name: "Trending Bot MX", handle: "TrendingBotMX", avatar: "https://via.placeholder.com/40/718096/ffffff?text=TB", isBot: true },
        { name: "Art Spam Bot", handle: "ArtSpamBot", avatar: "https://via.placeholder.com/40/9ca3af/ffffff?text=AB", isBot: true },
        { name: "Crypto Monster Bot", handle: "CryptoMonsterBot", avatar: "https://via.placeholder.com/40/6b7280/ffffff?text=CB", isBot: true },
        { name: "Engagement Farmer", handle: "EngagementFarm", avatar: "https://via.placeholder.com/40/374151/ffffff?text=EF", isBot: true }
    ]
};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomTime() {
    const timeOptions = ['now', '1m', '2m', '3m', '5m', '8m', '12m', '15m', '20m', '25m', '30m'];
    return getRandomElement(timeOptions);
}

function generateRandomEngagement() {
    return {
        likes: Math.floor(Math.random() * 500) + 1,
        retweets: Math.floor(Math.random() * 200) + 1,
        replies: Math.floor(Math.random() * 100) + 1
    };
}

function generateNewPost() {
    const categories = ['fans', 'critics', 'tourists', 'students', 'bots'];
    const weights = [50, 15, 10, 15, 10]; // Percentage weights for each category
    
    // Weighted random selection
    let random = Math.random() * 100;
    let selectedCategory = 'fans';
    let cumulativeWeight = 0;
    
    for (let i = 0; i < categories.length; i++) {
        cumulativeWeight += weights[i];
        if (random <= cumulativeWeight) {
            selectedCategory = categories[i];
            break;
        }
    }
    
    const template = getRandomElement(postTemplates[selectedCategory]);
    const user = getRandomElement(userProfiles[selectedCategory]);
    const engagement = generateRandomEngagement();
    
    const newPost = {
        id: Date.now() + Math.random(), // Ensure unique ID
        user: {
            name: user.name,
            handle: user.handle,
            avatar: user.avatar,
            verified: user.verified || false,
            isBot: user.isBot || false
        },
        content: template,
        time: getRandomTime(),
        likes: engagement.likes,
        retweets: engagement.retweets,
        replies: engagement.replies,
        isLiked: false,
        isRetweeted: false
    };
    
    return newPost;
}

function addNewPostToFeed() {
    const newPost = generateNewPost();
    postsData.unshift(newPost); // Add to beginning of array
    
    // Keep only the most recent 50 posts to prevent memory issues
    if (postsData.length > 50) {
        postsData.splice(50);
    }
    
    // Create post element and add to top of feed
    const feed = document.getElementById('feed');
    const newPostElement = createPost(newPost);
    
    // Add animation class
    newPostElement.style.opacity = '0';
    newPostElement.style.transform = 'translateY(-20px)';
    newPostElement.style.transition = 'all 0.3s ease';
    
    feed.insertBefore(newPostElement, feed.firstChild);
    
    // Trigger animation
    setTimeout(() => {
        newPostElement.style.opacity = '1';
        newPostElement.style.transform = 'translateY(0)';
    }, 100);
    
    // Show notification
    showNewPostNotification();
    
    console.log(`New post added: ${newPost.content.substring(0, 50)}...`);
}

function showNewPostNotification() {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('new-post-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'new-post-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #1d9bf0;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            cursor: pointer;
        `;
        notification.textContent = 'New YZ';
        document.body.appendChild(notification);
        
        notification.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            notification.style.opacity = '0';
        });
    }
    
    // Show notification
    notification.style.opacity = '1';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 3000);
}

function updateTrendingNumbers() {
    const trendingItems = document.querySelectorAll('.trending-posts');
    trendingItems.forEach(item => {
        const currentText = item.textContent;
        const number = parseFloat(currentText.replace(/[^\d.]/g, ''));
        const unit = currentText.includes('K') ? 'K' : 'M';
        const increase = (Math.random() * 0.5) + 0.1; // 0.1 to 0.6 increase
        const newNumber = (number + increase).toFixed(1);
        item.textContent = `${newNumber}${unit} YZs`;
    });
}

// Function to format large numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Function to make hashtags clickable
function formatContent(content) {
    return content.replace(/#(\w+)/g, '<a href="#" class="hashtag">#$1</a>');
}

// Function to create a post element
function createPost(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.dataset.postId = post.id; // Add data attribute for identification
    postElement.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">
                <img src="${post.user.avatar}" alt="${post.user.name}">
            </div>
            <div class="post-info">
                <div class="post-user">
                    <span class="post-name">${post.user.name}</span>
                    ${post.user.verified ? '<span class="verified">✓</span>' : ''}
                    ${post.user.isBot ? '<span class="bot-indicator">BOT</span>' : ''}
                    <span class="post-handle">@${post.user.handle}</span>
                    <span class="post-time">${post.time}</span>
                </div>
            </div>
        </div>
        <div class="post-content">
            ${formatContent(post.content)}
        </div>
        <div class="post-actions">
            <button class="action-btn">
                <span>💬</span>
                <span>${formatNumber(post.replies)}</span>
            </button>
            <button class="action-btn ${post.isRetweeted ? 'retweeted' : ''}" onclick="toggleRetweet(${post.id}, this)">
                <span>🔄</span>
                <span>${formatNumber(post.retweets)}</span>
            </button>
            <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike(${post.id}, this)">
                <span>${post.isLiked ? '❤️' : '🤍'}</span>
                <span>${formatNumber(post.likes)}</span>
            </button>
            <button class="action-btn">
                <span>📤</span>
            </button>
        </div>
    `;
    return postElement;
}

// Function to toggle like
function toggleLike(postId, button) {
    const post = postsData.find(p => p.id === postId);
    if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        
        const heartIcon = button.querySelector('span:first-child');
        const countSpan = button.querySelector('span:last-child');
        
        heartIcon.textContent = post.isLiked ? '❤️' : '🤍';
        countSpan.textContent = formatNumber(post.likes);
        button.classList.toggle('liked', post.isLiked);
    }
}

// Function to toggle retweet
function toggleRetweet(postId, button) {
    const post = postsData.find(p => p.id === postId);
    if (post) {
        post.isRetweeted = !post.isRetweeted;
        post.retweets += post.isRetweeted ? 1 : -1;
        
        const countSpan = button.querySelector('span:last-child');
        countSpan.textContent = formatNumber(post.retweets);
        button.classList.toggle('retweeted', post.isRetweeted);
    }
}

// Function to load posts into feed
function loadPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';
    
    postsData.forEach(post => {
        const postElement = createPost(post);
        feed.appendChild(postElement);
    });
}

// Character counter for compose
function updateCharacterCount() {
    const textarea = document.querySelector('.compose-textarea');
    const maxLength = 280;
    const currentLength = textarea.value.length;
    const remainingChars = maxLength - currentLength;
    
    // You can add a character counter here if needed
    console.log(`Characters remaining: ${remainingChars}`);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
    
    // Add event listener for compose textarea
    const textarea = document.querySelector('.compose-textarea');
    if (textarea) {
        textarea.addEventListener('input', updateCharacterCount);
    }
    
    // Add event listener for compose button
    const composeBtn = document.querySelector('.compose-actions .yz-btn');
    if (composeBtn) {
        composeBtn.addEventListener('click', function() {
            const textarea = document.querySelector('.compose-textarea');
            if (textarea.value.trim()) {
                // Create a new post
                const newPost = {
                    id: Date.now(),
                    user: {
                        name: "You",
                        handle: "yourhandle",
                        avatar: "https://via.placeholder.com/40/4299e1/ffffff?text=U",
                        verified: false
                    },
                    content: textarea.value,
                    time: "now",
                    likes: 0,
                    retweets: 0,
                    replies: 0,
                    isLiked: false,
                    isRetweeted: false
                };
                
                postsData.unshift(newPost);
                loadPosts();
                textarea.value = '';
            }
        });
    }
    
    // Start live post generation
    startLiveSimulation();
});

function startLiveSimulation() {
    // Generate new posts at random intervals (30 seconds to 3 minutes)
    function scheduleNextPost() {
        const minInterval = 30000; // 30 seconds
        const maxInterval = 180000; // 3 minutes
        const randomInterval = Math.random() * (maxInterval - minInterval) + minInterval;
        
        setTimeout(() => {
            addNewPostToFeed();
            scheduleNextPost(); // Schedule the next post
        }, randomInterval);
    }
    
    // Start the cycle
    scheduleNextPost();
    
    // Update engagement numbers on existing posts
    setInterval(() => {
        const randomPost = postsData[Math.floor(Math.random() * postsData.length)];
        if (Math.random() > 0.6) {
            randomPost.likes += Math.floor(Math.random() * 3) + 1;
            randomPost.retweets += Math.floor(Math.random() * 2);
            
            // Update the specific post element instead of reloading all posts
            updatePostEngagement(randomPost);
        }
    }, 15000); // Update every 15 seconds
    
    // Update trending numbers
    setInterval(() => {
        updateTrendingNumbers();
    }, 60000); // Update every minute
}

function updatePostEngagement(post) {
    const postElements = document.querySelectorAll('.post');
    postElements.forEach(element => {
        const postId = element.dataset.postId;
        if (parseInt(postId) === post.id) {
            const likeButton = element.querySelector('.action-btn.liked, .action-btn:nth-child(3)');
            const retweetButton = element.querySelector('.action-btn.retweeted, .action-btn:nth-child(2)');
            
            if (likeButton) {
                const likeCount = likeButton.querySelector('span:last-child');
                if (likeCount) likeCount.textContent = formatNumber(post.likes);
            }
            
            if (retweetButton) {
                const retweetCount = retweetButton.querySelector('span:last-child');
                if (retweetCount) retweetCount.textContent = formatNumber(post.retweets);
            }
        }
    });
}

// Make functions globally available
window.toggleLike = toggleLike;
window.toggleRetweet = toggleRetweet;
