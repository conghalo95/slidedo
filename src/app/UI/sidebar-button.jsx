"use client"
const SideBarButton = ({ dropMenu, setDropMenu }) => {
    return (
        <button className="lg:hidden" onClick={() => setDropMenu(!dropMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 stroke-2">
                <path strokeLinecap="butt" strokeLinejoin="butt" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </button>
    );
};

export default SideBarButton;