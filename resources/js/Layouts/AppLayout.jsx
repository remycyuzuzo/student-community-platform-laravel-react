import MainTopNav from "@/Components/myComponents/ui-parts/MainTopNav";
import TopBar from "@/Components/myComponents/ui-parts/TopBar";

function Layout({ children, className, hideAuth }) {
    return (
        <div className={"bg-slate-200 transition-all dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-raleway" + className}>
            <MainTopNav auth={hideAuth ? 0 : 1} />
            {children}
        </div>
    );
}

export default Layout;