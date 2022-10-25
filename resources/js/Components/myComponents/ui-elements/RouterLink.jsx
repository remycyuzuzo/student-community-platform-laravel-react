import { Link } from "@inertiajs/inertia-react";

function RouterLink({ className, to, title, children }) {
    return (
        <Link className={className} href={to} title={title}>
            {children}
        </Link>
    );
}

export default RouterLink;