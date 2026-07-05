# CARTVERSE – MODERN E-COMMERCE WEBSITE
### Academic Lab Project Report & Implementation Documentation

---

## 1. Project Title
**CartVerse – Modern E-Commerce Website Using HTML, CSS, and JavaScript**

* **Developer Profile:** Alok Kumar
* **Roll Number:** 23E51A6606
* **Academic Branch:** Computer Science and Engineering - Artificial Intelligence & Machine Learning (CSM-A)
* **Target Platforms:** Apache Web Server on AWS EC2 Cloud Host
* **Signature Caption:** `"CartVerse - Shop Beyond Limits"`

---

## 2. Abstract
**CartVerse** is a modern front-end e-commerce website developed using pure HTML, CSS, and JavaScript. The project provides an interactive online shopping experience inspired by leading retail portals (**Amazon, Flipkart, Meesho, Myntra, Snapdeal, Ajio, Shein**). Users can browse a dynamically rendered catalog of **100 realistic products** distributed across **5 distinct pages (20 items per page)**. 

The website integrates high-fidelity product photography (curated via live Unsplash commercial photo URLs) and implements full interactive operations: live fuzzy search filtering, multi-criteria category filtering, price ceiling range constraints, customer ratings threshold adjustments, a sliding Cart sidebar drawer with automatic estimated subtotals, a bookmarks Wishlist panel, popup modals for credentials login/register actions, a simulated multi-step payment gateway sandbox (yielding a custom receipt invoice displaying student metadata), and complete LocalStorage persistence.

The objective of this project is to demonstrate front-end web development skills while creating a user-friendly, highly polished, and fully responsive shopping platform ready for secure cloud hosting on an **AWS EC2 Linux server running the Apache Web Server**.

---

## 3. Objectives
The main objectives of the project are:
* To design a premium e-commerce interface fusing the robust header of Amazon and the white card catalog of Flipkart.
* To implement a programmatic database of **100 realistic products** categorized into multiple departments.
* To design a fully functional **client-side pagination engine (Pages 1, 2, 3, 4, 5)** to manage product navigation smoothly.
* To provide real-time search filtering, price range sorting, and rating threshold adjustments.
* To implement an interactive shopping cart sidebar and wishlist bookmarks persisted inside browser LocalStorage.
* To incorporate authentic popup modal dialogs for Login, Registration, Quick View specs, and checkout address inputs.
* To simulate a secure checkout payment gateway sandbox displaying Alok Kumar's student metadata on final receipt printouts.
* To establish complete mobile media query responsiveness for all screen dimensions.

---

## 4. Technologies Used

### Front-End Technologies
* **HTML5:** For structured semantic document layouts.
* **CSS3:** For customized page branding, Poppins typography, variables, theme toggling, custom scrollbars, and mobile responsiveness.
* **JavaScript (ES6):** For active client-side catalog rendering, search filtering, and state operations.

### Libraries and Frameworks
* **Font Awesome Icons (v6.5.1):** For clean vector glyphs and icons.
* **Google Fonts (Poppins):** For clean modern typography.

### Storage
* **Browser Local Storage:** For client-side cart data and wishlist persistence across browser sessions.

### Development & Host Tools
* **Visual Studio Code:** As the primary code development environment.
* **Google Chrome DevTools:** For audits and viewport tests.
* **Apache HTTP Web Server (v2.4):** As the high-availability cloud web host engine.
* **AWS EC2 Linux Instance:** As the reliable virtual cloud host environment.

---

## 5. System Architecture & User Flow

```
[ User Opens CartVerse ] 
           |
           v
[ Loading Screen Hide ] ---> [ Homepage Products Grid Displayed ]
                                      |
                                      +---> [ Search or Filter Category ]
                                      |
                                      +---> [ Sort by Price or Rating ]
                                      |
                                      +---> [ Navigate Pages 1, 2, 3, 4, 5 ]
                                      |
                                      v
                             [ Add Item to Cart / Wishlist ]
                                      |
                                      v
                             [ Local Storage Sync ]
                                      |
                             +--------+--------+
                             |                 |
                             v                 v
                     [ Modify Quantities ]  [ Proceed to Checkout ]
                                                       |
                                                       v
                                            [ Simulated AWS Payment ]
                                                       |
                                                       v
                                            [ Generate Tax Invoice ]
```

---

## 6. Modules Implemented

### 6.1 Navigation Module
* **Header Bar (Amazon/Flipkart Fusion):** Includes custom logo branding, deliver location pin, user account triggers, wishlist hearts, shopping cart badge triggers, and a large central search input.
* **Interactive Location Selector Modal:** Clicking the delivery pin opens a popup modal to change the recipient name, street address, city, and pincode dynamically. Setting this updates the header location details and integrates with checkout and invoicing subsystems.
* **Category Strip (Flipkart style):** A horizontal sub-header containing department buttons (Mobiles & Tech, Fashion, Gaming Hub, Home & Living, Accessories) with sliding hover effects.
* **Dark Mode Switcher:** Dynamically swaps body variables between Light and Dark mode.

### 6.2 Hero Section Banner Carousel
* **Offer Slideshow:** A rotating widescreen slider showing high-impact commercial retail ads with customized buttons and deal tags.

### 6.3 Offer Banner Module
* **Mega Sale Highlights:** High-impact banner emphasizing limited-time deals (up to 70% off) in a vibrant visual gradient.

### 6.4 Category Module
* **Available Categories:** Electronics, Fashion, Gaming, Home, and Accessories.
* **Sidebar Filters (Myntra/Ajio style):** Price range sliders, rating filters, and department checkboxes.

### 6.5 Product Module
* **Realistic Catalog Cards:** Features visual product photography (curated via Unsplash URLs), green rating badges (e.g. `4.2 ★`), slashed original prices, and "Add to Cart" triggers.
* **100 Dynamic Products:** Structured inside `script.js` to populate exactly 100 items distributed over 5 pages (20 items per page).

### 6.6 Product Search Module
* **Real-time fuzzy search:** JavaScript keyup listeners filter items instantly as the user types, updating pagination offsets immediately.

### 6.7 Product Filter Module
* **Action Tabs:** Category-based filters that toggle product visibility instantly using CSS dataset filters.

### 6.8 Shopping Cart Module
* **Dynamic Sidebar Drawer:** Slides from the right to display items, calculate total pricing, clear items, and increment the badge count without page refreshes.

### 6.9 Local Storage Module
* **Persistence Operations:** Utilizes `localStorage.setItem()` and `JSON.stringify()` to store and recover active shopping carts, wishlist bookmarks, and active user login sessions automatically on page reload.

### 6.10 Login Popup Module & Active Profiles
* **Dynamic Authentication:** A beautifully designed modal popup for logging in and registering. Successfully submitting details stores active profile records, dynamically swaps the top navigation greetings from `"Hello, Sign In"` to **`"Hello, [Username]"`** (complete with green `"Profile Active"` indicators), replaces generic browser alert popups with elegant floating notifications, and automatically **pre-fills** shipping details during checkout!

### 6.11 Customer Reviews Module
* **Social Proof Box:** Displays real customer testimonials and ratings to build credibility.

### 6.12 Flash Sale Module
* **Countdown Timer:** Active ticking interval timer (Hours : Minutes : Seconds) to create urgency.

### 6.13 Dark Mode Module
* **Accessibility Controls:** Dynamically toggles body variables to match high-contrast dark values, improving night-time readability.

### 6.14 Newsletter Module
* **Email Subscription Block:** Minimalist newsletter signup form to engage visitors.

### 6.15 Animation Module
* **AOS Integration:** Smooth scroll triggers, hover scales, and fade-in states.

---

## 7. Key Features
* Responsive UI Layout
* Real-time Product Search & Filtering
* Persistent Cart State (Local Storage)
* Smooth Transitions & Loaders
* Popup Login Authentication
* Ticking Flash Sale Clock
* Social Reviews & Testimonials
* Back-To-Top Anchor Buttons

---

## 8. Advantages
* Lightweight (Vanilla HTML, CSS, JS) with no framework overhead.
* Exceptionally fast performance and page loads.
* Completely self-contained, perfect for easy deployment on Apache/AWS EC2.
* Dynamic, interactive, and responsive on all viewport screen sizes.

---

## 9. Limitations
* Client-side only (no active relational SQL/NoSQL backend database).
* Simulates payment authorization without a live payment gateway integration.
* Mock credentials verification on the login popup.

---

## 10. Future Enhancements
* Implementing a Node.js/Express backend server.
* Storing catalogs and users in a MongoDB database.
* Integrating a live Stripe or PayPal payment portal.
* Creating an administrator management panel to add, edit, or delete items.

---

## 11. Conclusion
The **CartVerse** e-commerce platform successfully demonstrates the implementation of a modern e-commerce website using HTML, CSS, and JavaScript. The project provides a responsive and interactive shopping experience through product search, category filtering, shopping cart management, dark mode, animations, and Local Storage integration. The project serves as a strong foundation for future enhancements involving backend development, databases, and cloud deployment.
