// components.js
// Create Navbar and footer

const createNavbar = () => {
    // Detect which page is currently active to highlight the correct link
    const currentPath = window.location.pathname;
    
    const navHTML = `
    <nav class="p-6 bg-white shadow-sm flex justify-between items-center sticky top-0 z-50">
        <h1 class="text-2xl font-bold text-indigo-600">Dominic Valerio</h1>
        <div class="space-x-6">
            <a href="index.html" class="${currentPath.includes('index') || currentPath.endsWith('/') ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-500 font-medium'}">Home</a>
            <!-- <a href="lessons.html" class="${currentPath.includes('lessons') ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-500 font-medium'}">Lessons</a> -->
            <a href="materials.html" class="${currentPath.includes('materials') ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-500 font-medium'}">Materials</a>
        </div>
    </nav>
    `;
    
    // Inject the navbar at the very top of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
};

const createFooter = () => {
    const footerHTML = `
    <footer class="bg-white border-t border-slate-200 py-12 text-center text-slate-500 text-sm">
        <p>&copy; ${new Date().getFullYear()} Dominic Valerio</p>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
};

// Execute the functions
createNavbar();
createFooter();