
        // Sample product data with real images
        const products = [
            { 
                id: 1, 
                name: "Fresh Organic Apples", 
                price: 4.99, 
                image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop", 
                category: "fruits",
                description: "Crisp, sweet organic apples grown without pesticides. Perfect for snacking or baking.",
                weights: ["1 lb", "2 lbs", "3 lbs", "5 lbs"],
                nutrition: "Rich in fiber, vitamin C, and antioxidants",
                origin: "Local Organic Farm"
            },
            { 
                id: 2, 
                name: "Premium Bananas", 
                price: 2.99, 
                image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop", 
                category: "fruits",
                description: "Sweet, ripe bananas perfect for smoothies, baking, or eating fresh.",
                weights: ["1 bunch", "2 bunches", "3 bunches"],
                nutrition: "High in potassium, vitamin B6, and natural sugars",
                origin: "Fair Trade Certified"
            },
            { 
                id: 3, 
                name: "Fresh Strawberries", 
                price: 5.99, 
                image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop", 
                category: "fruits",
                description: "Juicy, sweet strawberries bursting with flavor. Perfect for desserts or snacking.",
                weights: ["1 pint", "1 quart", "2 quarts"],
                nutrition: "Loaded with vitamin C, folate, and antioxidants",
                origin: "Local Berry Farm"
            },
            { 
                id: 4, 
                name: "Sweet Oranges", 
                price: 3.99, 
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop", 
                category: "fruits",
                description: "Juicy navel oranges with sweet, refreshing taste. Great for juice or eating fresh.",
                weights: ["2 lbs", "3 lbs", "5 lbs", "10 lbs"],
                nutrition: "Excellent source of vitamin C and dietary fiber",
                origin: "California Groves"
            },
            { 
                id: 5, 
                name: "Fresh Broccoli", 
                price: 3.49, 
                image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop", 
                category: "vegetables",
                description: "Fresh, green broccoli crowns perfect for steaming, roasting, or stir-frying.",
                weights: ["1 head", "2 heads", "3 heads"],
                nutrition: "High in vitamin K, vitamin C, and folate",
                origin: "Organic Valley Farm"
            },
            { 
                id: 6, 
                name: "Organic Carrots", 
                price: 2.79, 
                image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=400&fit=crop", 
                category: "vegetables",
                description: "Sweet, crunchy organic carrots perfect for snacking, cooking, or juicing.",
                weights: ["1 lb", "2 lbs", "3 lbs", "5 lbs"],
                nutrition: "Rich in beta-carotene, fiber, and vitamin A",
                origin: "Certified Organic"
            },
            { 
                id: 7, 
                name: "Green Bell Peppers", 
                price: 4.29, 
                image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=400&h=400&fit=crop", 
                category: "vegetables",
                description: "Crisp, fresh bell peppers perfect for salads, stir-fries, or stuffing.",
                weights: ["1 pepper", "3 peppers", "5 peppers"],
                nutrition: "High in vitamin C, vitamin A, and antioxidants",
                origin: "Greenhouse Grown"
            },
            { 
                id: 8, 
                name: "Fresh Spinach", 
                price: 3.99, 
                image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop", 
                category: "vegetables",
                description: "Tender baby spinach leaves perfect for salads, smoothies, or cooking.",
                weights: ["5 oz bag", "10 oz bag", "1 lb bag"],
                nutrition: "Packed with iron, vitamin K, and folate",
                origin: "Hydroponic Farm"
            },
            { 
                id: 9, 
                name: "Whole Grain Bread", 
                price: 3.99, 
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop", 
                category: "bakery",
                description: "Freshly baked whole grain bread with seeds and grains for extra nutrition.",
                weights: ["1 loaf", "2 loaves"],
                nutrition: "High in fiber, protein, and B vitamins",
                origin: "Local Artisan Bakery"
            },
            { 
                id: 10, 
                name: "Croissants", 
                price: 4.99, 
                image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5b?w=400&h=400&fit=crop", 
                category: "bakery",
                description: "Buttery, flaky croissants baked fresh daily. Perfect for breakfast or snacking.",
                weights: ["4 pack", "6 pack", "12 pack"],
                nutrition: "Contains wheat, butter, and eggs",
                origin: "French Bakery Style"
            },
            { 
                id: 11, 
                name: "Fresh Milk", 
                price: 4.49, 
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop", 
                category: "dairy",
                description: "Fresh, creamy whole milk from grass-fed cows. Rich and nutritious.",
                weights: ["1 quart", "1/2 gallon", "1 gallon"],
                nutrition: "Excellent source of calcium, protein, and vitamin D",
                origin: "Local Dairy Farm"
            },
            { 
                id: 12, 
                name: "Farm Eggs", 
                price: 5.99, 
                image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop", 
                category: "dairy",
                description: "Fresh farm eggs from free-range hens. Perfect for any meal of the day.",
                weights: ["6 eggs", "12 eggs", "18 eggs", "24 eggs"],
                nutrition: "High in protein, vitamin B12, and choline",
                origin: "Free-Range Farm"
            },
            { 
                id: 13, 
                name: "Premium Cheese", 
                price: 7.99, 
                image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop", 
                category: "dairy",
                description: "Aged cheddar cheese with rich, sharp flavor. Perfect for sandwiches or snacking.",
                weights: ["8 oz", "1 lb", "2 lbs"],
                nutrition: "Rich in calcium, protein, and vitamin A",
                origin: "Artisan Creamery"
            },
            { 
                id: 14, 
                name: "Greek Yogurt", 
                price: 6.49, 
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop", 
                category: "dairy",
                description: "Thick, creamy Greek yogurt with live probiotics. Great for breakfast or snacks.",
                weights: ["6 oz", "32 oz", "2 lbs"],
                nutrition: "High in protein, probiotics, and calcium",
                origin: "Traditional Greek Style"
            }
        ];

        let cart = [];
        let currentUser = null;
        let currentFilter = 'all';
        let currentProduct = null;
        let selectedWeight = null;
        let modalQuantity = 1;

        // Page navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate the corresponding nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.textContent.toLowerCase() === pageId.toLowerCase()) {
                    link.classList.add('active');
                }
            });
            
            // Special handling for specific pages
            if (pageId === 'products') {
                renderProducts();
            } else if (pageId === 'cart') {
                renderCart();
            }
        }

        // Authentication functions
        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Simple validation (in real app, this would be server-side)
            if (email && password.length >= 6) {
                // Simulate successful login
                currentUser = {
                    name: email.split('@')[0],
                    email: email
                };
                
                // Update UI
                document.getElementById('auth-buttons').classList.add('hidden');
                document.getElementById('user-menu').classList.remove('hidden');
                document.getElementById('user-name').textContent = `Welcome, ${currentUser.name}!`;
                
                // Show success message
                alert('Login successful! Welcome to SmartCart! 🎉');
                
                // Redirect to home
                showPage('home');
            } else {
                alert('Please enter a valid email and password (minimum 6 characters)');
            }
        }

        function handleSignup(event) {
            event.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            
            // Validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }
            
            // Simulate successful signup
            currentUser = {
                name: name,
                email: email
            };
            
            // Update UI
            document.getElementById('auth-buttons').classList.add('hidden');
            document.getElementById('user-menu').classList.remove('hidden');
            document.getElementById('user-name').textContent = `Welcome, ${currentUser.name}!`;
            
            // Show success message
            alert('Account created successfully! Welcome to SmartCart! 🎉');
            
            // Redirect to home
            showPage('home');
        }

        function logout() {
            currentUser = null;
            cart = [];
            
            // Update UI
            document.getElementById('auth-buttons').classList.remove('hidden');
            document.getElementById('user-menu').classList.add('hidden');
            updateCartCount();
            
            // Show message
            alert('Logged out successfully! Come back soon! 👋');
            
            // Redirect to home
            showPage('home');
        }

        // Product functions
        function renderProducts() {
            const productGrid = document.getElementById('product-grid');
            const filteredProducts = currentFilter === 'all' 
                ? products 
                : products.filter(product => product.category === currentFilter);
                
            productGrid.innerHTML = filteredProducts.map(product => `
                <div class="product-card bg-white p-6 rounded-2xl shadow-lg cursor-pointer" onclick="showProductDetails(${product.id})">
                    <div class="relative mb-4">
                        <img src="${product.image}" alt="${product.name}" 
                             class="w-full h-48 object-cover rounded-lg"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2Ij5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K'; this.alt='Image not available';">
                        <div class="absolute top-2 right-2 bg-smart-green text-white px-2 py-1 rounded-full text-xs font-bold">
                            Fresh
                        </div>
                    </div>
                    <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-2 text-sm line-clamp-2">${product.description}</p>
                    <p class="text-gray-500 mb-4 capitalize text-sm">📍 ${product.origin}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-smart-green">$${product.price}</span>
                        <button onclick="event.stopPropagation(); showProductDetails(${product.id})" class="btn-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts(category) {
            currentFilter = category;
            
            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('btn-primary', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            
            event.target.classList.remove('bg-gray-200', 'text-gray-700');
            event.target.classList.add('btn-primary', 'text-white');
            
            renderProducts();
        }

        // Product Modal Functions
        function showProductDetails(productId) {
            currentProduct = products.find(p => p.id === productId);
            if (!currentProduct) return;
            
            // Reset modal state
            modalQuantity = 1;
            selectedWeight = currentProduct.weights[0];
            
            // Populate modal content
            document.getElementById('modal-title').textContent = currentProduct.name;
            document.getElementById('modal-image').src = currentProduct.image;
            document.getElementById('modal-image').alt = currentProduct.name;
            document.getElementById('modal-description').textContent = currentProduct.description;
            document.getElementById('modal-nutrition').textContent = currentProduct.nutrition;
            document.getElementById('modal-origin').textContent = currentProduct.origin;
            document.getElementById('modal-price').textContent = `$${currentProduct.price}`;
            document.getElementById('modal-quantity').textContent = modalQuantity;
            
            // Populate weight options
            const weightOptions = document.getElementById('weight-options');
            weightOptions.innerHTML = currentProduct.weights.map((weight, index) => `
                <button onclick="selectWeight('${weight}')" 
                        class="weight-option px-4 py-2 border-2 rounded-lg font-medium transition-colors ${index === 0 ? 'border-smart-green bg-smart-green text-white' : 'border-gray-300 text-gray-700 hover:border-smart-green'}"
                        data-weight="${weight}">
                    ${weight}
                </button>
            `).join('');
            
            updateModalTotal();
            
            // Show modal
            document.getElementById('product-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        function closeProductModal() {
            document.getElementById('product-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
            currentProduct = null;
            selectedWeight = null;
            modalQuantity = 1;
        }
        
        function selectWeight(weight) {
            selectedWeight = weight;
            
            // Update button styles
            document.querySelectorAll('.weight-option').forEach(btn => {
                if (btn.dataset.weight === weight) {
                    btn.className = 'weight-option px-4 py-2 border-2 border-smart-green bg-smart-green text-white rounded-lg font-medium transition-colors';
                } else {
                    btn.className = 'weight-option px-4 py-2 border-2 border-gray-300 text-gray-700 hover:border-smart-green rounded-lg font-medium transition-colors';
                }
            });
            
            updateModalTotal();
        }
        
        function updateModalQuantity(change) {
            modalQuantity = Math.max(1, modalQuantity + change);
            document.getElementById('modal-quantity').textContent = modalQuantity;
            updateModalTotal();
        }
        
        function updateModalTotal() {
            if (!currentProduct) return;
            
            const total = currentProduct.price * modalQuantity;
            document.getElementById('modal-total').textContent = `$${total.toFixed(2)}`;
        }
        
        function addToCartFromModal() {
            if (!currentUser) {
                alert('Please sign in to add items to cart!');
                closeProductModal();
                showPage('login');
                return;
            }
            
            if (!currentProduct || !selectedWeight) {
                alert('Please select a weight/size option!');
                return;
            }
            
            // Create cart item with selected options
            const cartItem = {
                ...currentProduct,
                selectedWeight: selectedWeight,
                quantity: modalQuantity,
                cartId: `${currentProduct.id}-${selectedWeight}` // Unique identifier for cart
            };
            
            // Check if item with same weight already exists in cart
            const existingItemIndex = cart.findIndex(item => 
                item.id === currentProduct.id && item.selectedWeight === selectedWeight
            );
            
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += modalQuantity;
            } else {
                cart.push(cartItem);
            }
            
            updateCartCount();
            
            // Show success message
            alert(`✅ Added ${modalQuantity}x ${currentProduct.name} (${selectedWeight}) to cart!`);
            
            closeProductModal();
        }

        // Cart functions
        function addToCart(productId) {
            if (!currentUser) {
                alert('Please sign in to add items to cart!');
                showPage('login');
                return;
            }
            
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartCount();
            
            // Show feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Added! ✓';
            button.style.background = '#27AE60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 1000);
        }

        function updateCartCount() {
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        function renderCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="text-center py-12">
                        <div class="text-6xl mb-4">🛒</div>
                        <h3 class="text-2xl font-semibold mb-4">Your cart is empty</h3>
                        <p class="text-gray-600 mb-6">Add some delicious items to get started!</p>
                        <button onclick="showPage('products')" class="btn-primary text-white px-8 py-3 rounded-lg font-semibold">
                            Start Shopping
                        </button>
                    </div>
                `;
                cartTotal.textContent = '$0.00';
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartItems.innerHTML = `
                <div class="space-y-4">
                    ${cart.map((item, index) => `
                        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div class="flex items-center">
                                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg mr-4"
                                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjMyIiB5PSIzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZpbGw9IiM5Q0EzQUYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI4Ij5OL0E8L3RleHQ+Cjwvc3ZnPgo='; this.alt='N/A';">
                                <div>
                                    <h4 class="font-semibold">${item.name}</h4>
                                    <p class="text-gray-600">$${item.price} each</p>
                                    ${item.selectedWeight ? `<p class="text-sm text-smart-green font-medium">${item.selectedWeight}</p>` : ''}
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button onclick="updateQuantity(${index}, -1)" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">-</button>
                                <span class="font-semibold">${item.quantity}</span>
                                <button onclick="updateQuantity(${index}, 1)" class="w-8 h-8 bg-smart-green text-white rounded-full flex items-center justify-center hover:bg-green-600">+</button>
                                <span class="font-bold text-smart-green ml-4">$${(item.price * item.quantity).toFixed(2)}</span>
                                <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 ml-2">🗑️</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }

        function updateQuantity(itemIndex, change) {
            if (cart[itemIndex]) {
                cart[itemIndex].quantity += change;
                if (cart[itemIndex].quantity <= 0) {
                    removeFromCart(itemIndex);
                } else {
                    updateCartCount();
                    renderCart();
                }
            }
        }

        function removeFromCart(itemIndex) {
            cart.splice(itemIndex, 1);
            updateCartCount();
            renderCart();
        }

        function checkout() {
            if (!currentUser) {
                alert('Please sign in to checkout!');
                showPage('login');
                return;
            }
            
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Order placed successfully! 🎉\n\nTotal: $${total.toFixed(2)}\nItems: ${cart.length}\n\nThank you for shopping with SmartCart!`);
            
            // Clear cart
            cart = [];
            updateCartCount();
            renderCart();
        }

        // Contact form
        function handleContact(event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            alert(`Thank you for your message, ${name}! 📧\n\nWe'll get back to you at ${email} within 24 hours.`);
            
            // Reset form
            event.target.reset();
        }

        // Best selling products data
        const bestSellers = [
            { id: 1, name: "Fresh Organic Apples", price: 4.99, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop", category: "fruits", sales: 1250 },
            { id: 2, name: "Premium Bananas", price: 2.99, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop", category: "fruits", sales: 980 },
            { id: 11, name: "Fresh Milk", price: 4.49, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop", category: "dairy", sales: 850 },
            { id: 9, name: "Whole Grain Bread", price: 3.99, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop", category: "bakery", sales: 720 }
        ];

        // Weekly deals data
        const weeklyDeals = {
            berries: { id: 15, name: "Fresh Berry Mix", price: 6.49, originalPrice: 12.99, image: "🍓", category: "fruits" },
            greens: { id: 16, name: "Organic Greens Bundle", price: 6.29, originalPrice: 8.99, image: "🥬", category: "vegetables" },
            cheese: { id: 17, name: "Artisan Cheese Selection", price: 11.99, originalPrice: 15.99, image: "🧀", category: "dairy" }
        };

        // Render best selling products
        function renderBestSellers() {
            const bestsellersGrid = document.getElementById('bestsellers-grid');
            if (bestsellersGrid) {
                bestsellersGrid.innerHTML = bestSellers.map(product => `
                    <div class="product-card bg-white p-6 rounded-2xl shadow-lg cursor-pointer" onclick="showProductDetails(${product.id})">
                        <div class="relative mb-4">
                            <img src="${product.image}" alt="${product.name}" 
                                 class="w-full h-48 object-cover rounded-lg"
                                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2Ij5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K'; this.alt='Image not available';">
                            <div class="absolute top-2 right-2 bg-smart-orange text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                                🔥 ${product.sales}+ sold
                            </div>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                        <p class="text-gray-600 mb-4 capitalize">${product.category}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-smart-green">$${product.price}</span>
                            <button onclick="event.stopPropagation(); showProductDetails(${product.id})" class="btn-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Add deal to cart function
        function addDealToCart(dealType) {
            if (!currentUser) {
                alert('Please sign in to add items to cart!');
                showPage('login');
                return;
            }
            
            const deal = weeklyDeals[dealType];
            if (deal) {
                const existingItem = cart.find(item => item.id === deal.id);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ ...deal, quantity: 1 });
                }
                
                updateCartCount();
                
                // Show feedback
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = 'Added! ✓';
                button.style.background = '#27AE60';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 1000);
            }
        }

        // Animate counters
        function animateCounters() {
            const counters = [
                { id: 'orders-counter', target: 15420 },
                { id: 'customers-counter', target: 8750 },
                { id: 'products-counter', target: 2500 },
                { id: 'cities-counter', target: 45 }
            ];
            
            counters.forEach(counter => {
                const element = document.getElementById(counter.id);
                if (element) {
                    let current = 0;
                    const increment = counter.target / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= counter.target) {
                            current = counter.target;
                            clearInterval(timer);
                        }
                        element.textContent = Math.floor(current).toLocaleString();
                    }, 20);
                }
            });
        }

        // Show more testimonials
        function showMoreTestimonials() {
            alert('📝 More Customer Reviews\n\n⭐⭐⭐⭐⭐ "Best grocery app ever!" - Jessica M.\n⭐⭐⭐⭐⭐ "Saved me so much time!" - David L.\n⭐⭐⭐⭐⭐ "Fresh products always!" - Maria S.\n\nJoin thousands of happy customers! 🎉');
        }

        // Newsletter subscription (updated)
        function subscribeNewsletter() {
            const emailInput = document.getElementById('newsletter-email') || document.querySelector('footer input[type="email"]');
            const email = emailInput ? emailInput.value : '';
            
            if (email && email.includes('@')) {
                alert('🎉 Welcome to SmartCart Newsletter!\n\nThank you for subscribing! You\'ll receive:\n• Exclusive weekly deals\n• New product alerts\n• Grocery shopping tips\n• Early access to sales\n\nFirst newsletter coming your way soon!');
                if (emailInput) emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        }

        // Enhanced Intersection Observer for animations
        function setupScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Trigger counter animation
                        if (entry.target.id === 'orders-counter') {
                            animateCounters();
                        }
                        
                        // Add animation classes to elements as they come into view
                        const animatedElements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .bounce-in, .slide-in-bottom, .rotate-in');
                        animatedElements.forEach((element, index) => {
                            setTimeout(() => {
                                element.style.animationPlayState = 'running';
                            }, index * 100);
                        });
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Observe all sections
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                observer.observe(section);
            });
            
            // Observe stats counter specifically
            const statsSection = document.getElementById('orders-counter');
            if (statsSection) {
                observer.observe(statsSection.parentElement);
            }
        }
        
        // Enhanced counter animation with more dynamic effects
        function animateCounters() {
            const counters = [
                { id: 'orders-counter', target: 15420 },
                { id: 'customers-counter', target: 8750 },
                { id: 'products-counter', target: 2500 },
                { id: 'cities-counter', target: 45 }
            ];
            
            counters.forEach((counter, index) => {
                const element = document.getElementById(counter.id);
                if (element && !element.hasAttribute('data-animated')) {
                    element.setAttribute('data-animated', 'true');
                    
                    setTimeout(() => {
                        let current = 0;
                        const increment = counter.target / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= counter.target) {
                                current = counter.target;
                                clearInterval(timer);
                                // Add completion effect
                                element.classList.add('counter-animation');
                            }
                            element.textContent = Math.floor(current).toLocaleString();
                        }, 30);
                    }, index * 200);
                }
            });
        }
        
        // Add floating elements animation
        function createFloatingElements() {
            const hero = document.querySelector('.hero-bg');
            if (hero) {
                // Create floating particles
                for (let i = 0; i < 5; i++) {
                    const particle = document.createElement('div');
                    particle.innerHTML = ['✨', '🌟', '💫', '⭐', '🎯'][i];
                    particle.className = 'absolute text-2xl opacity-30 floating-animation';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 3 + 's';
                    particle.style.animationDuration = (3 + Math.random() * 2) + 's';
                    hero.appendChild(particle);
                }
            }
        }

        // Close modal on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeProductModal();
            }
        });

        // Close modal when clicking outside
        document.getElementById('product-modal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeProductModal();
            }
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            renderBestSellers();
            setupScrollAnimations();
            createFloatingElements();
            
            // Add smooth scrolling
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // Initialize animation states
            const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .bounce-in, .slide-in-bottom, .rotate-in');
            animatedElements.forEach(element => {
                element.style.animationPlayState = 'paused';
            });
            
            // Trigger hero animations immediately
            setTimeout(() => {
                const heroElements = document.querySelector('.hero-bg').querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .bounce-in, .slide-in-bottom, .rotate-in');
                heroElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.animationPlayState = 'running';
                    }, index * 150);
                });
            }, 300);
            
            // Check if user is logged in (simulate persistence)
            const savedUser = localStorage.getItem('smartcart-user');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                document.getElementById('auth-buttons').classList.add('hidden');
                document.getElementById('user-menu').classList.remove('hidden');
                document.getElementById('user-name').textContent = `Welcome, ${currentUser.name}!`;
            }
        });

        // Save user state
        function saveUserState() {
            if (currentUser) {
                localStorage.setItem('smartcart-user', JSON.stringify(currentUser));
            } else {
                localStorage.removeItem('smartcart-user');
            }
        }

        // Update logout function to clear localStorage
        const originalLogout = logout;
        logout = function() {
            localStorage.removeItem('smartcart-user');
            originalLogout();
        };


        