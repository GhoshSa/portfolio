document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const sidebar = document.getElementById('sidebar')
    const closemenu = document.getElementById('close-menu-button')
    const sidebarOverlay = document.getElementById('sidebar-overlay')
    const mainContent = document.getElementById('main-content')

    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full')
        sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none')
        mainContent.classList.add('pointer-events-none')
        sidebar.classList.add('pointer-events-auto')
        document.body.style.overflow = 'hidden'
    }

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full')
        sidebarOverlay.classList.add('opacity-0', 'pointer-events-none')
        mainContent.classList.remove('pointer-events-none')
        document.body.style.overflow = 'auto'
    }

    mobileMenuButton.addEventListener('click', openSidebar)
    closemenu.addEventListener('click', closeSidebar)
    sidebarOverlay.addEventListener('click', closeSidebar)
})