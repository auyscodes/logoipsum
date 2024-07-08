

const NavBar = () => {
    return (<nav className="py-8 px-4 lg:px-10">
        <div className="flex justify-between">
        <a href="/"><img src="https://micro-team.netlify.app/_nuxt/img/logo.54d64d2.svg" alt="logoipsum" /></a>
        <div className="flex justify-between">
            <a className="px-4 text-gray-800" href="/about">About</a>
            <a className="px-4 text-gray-800" href="/contact">Contact</a>
        </div>
    </div>
        </nav>);
}

export default NavBar;